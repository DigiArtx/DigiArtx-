import { StyledTouchable } from "@components/button";
import { Row, StyledViewProps } from "@components/views";
import { Upload, useCreateUploadMutation } from "@stores/upload";
import { notify } from "@utils/notify";
import {
  ImagePickerAsset,
  ImagePickerOptions,
  ImagePickerResult,
  MediaTypeOptions,
  launchImageLibraryAsync,
} from "expo-image-picker";
import moment from "moment";
import { useState } from "react";
import { ViewProps } from "react-native";

export interface MediaUploaderProps extends ViewProps, StyledViewProps {
  folder?: string;
  imagePickerOptions?: ImagePickerOptions;
  autoUpload?: boolean;
  onImageSelected?: (results: ImagePickerAsset[]) => void;
  onUploadSuccess?: (results: Upload[]) => void;
  onLoading?: (state: boolean) => void;
}
export const MediaUploader: React.FC<MediaUploaderProps> = ({
  folder = "media",
  imagePickerOptions,
  autoUpload = true,
  onImageSelected = () => {},
  onUploadSuccess = () => {},
  onLoading = () => {},
  children,
  ...rest
}) => {
  const [assets, setAssets] = useState<ImagePickerAsset[]>([]);
  const [request, { isLoading }] = useCreateUploadMutation();

  const handlePickImage = () => {
    onLoading(true);
    // No permissions request is necessary for launching the image library
    launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      ...imagePickerOptions,
    })
      .then((result) => {
        // console.log(result);
        if (!result.canceled) {
          setAssets(result?.assets);
          onImageSelected(result?.assets);
          if (autoUpload) {
            return setTimeout(() => handleUpload(result?.assets), 500);
          }
        }

        onLoading(false);
      })
      .catch((error) => {
        notify(
          "Error Opening Gallery",
          "We are unable to select an image at this moment."
        );
      });
  };

  const handleUpload = (assets?: ImagePickerResult["assets"]) => {
    const form = new FormData();
    form.append("folder", folder);
    if (assets && assets.length) {
      // console.log("files appended", assets)
      assets.map((asset, _index) => {
        const ext = asset.mimeType?.split("/")[1] ?? "jpeg";
        const datetime = moment().format();
        form.append("files[]", {
          uri: asset.uri,
          type: asset.mimeType,
          name: `media-${datetime}-${_index}.${ext}`,
        } as unknown as Blob);
      });

      // console.log(form.getAll('files[]'))
      request(form)
        .unwrap()
        .then((response) => {
          // console.log("response", response)
          onUploadSuccess(response.data);
        })
        .catch((error) => {
          console.log("error", error?.data?.response);
        })
        .finally(() => {
          onLoading(false);
        });
    }
  };

  return (
    <>
      <StyledTouchable onPress={handlePickImage} {...rest}>
        {children}
      </StyledTouchable>
    </>
  );
};
