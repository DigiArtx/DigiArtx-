import { hp } from "@utils/general";
import { MediaUploader, MediaUploaderProps } from "./media_uploader";
import { IconButton, StyledTouchable } from "@components/button";
import CameraIcon from "@assets/svgs/icons/camera-plus.svg";
import { useThemeMode } from "@providers/hooks";
import { ProfileAvatar, ProfileAvatarProps } from "./profile_avatar";
import { ImagePickerAsset } from "expo-image-picker";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

export interface AvatarUploaderProps extends MediaUploaderProps {
  profileAvataProps?: ProfileAvatarProps;
}
export const AvatarUploader: React.FC<AvatarUploaderProps> = ({
  profileAvataProps,
  onLoading = () => {},
  ...rest
}) => {
  const { colors } = useThemeMode();
  const [image, setImage] = useState<ImagePickerAsset>();
  const [isLoading, setIsLoading] = useState(false);

  const initIsLoading = (state: boolean) => {
    setIsLoading(state);
    onLoading(state);
  };

  return (
    <MediaUploader
      onImageSelected={(images) => setImage(images[0])}
      onLoading={initIsLoading}
      {...rest}
    >
      <ProfileAvatar
        containerStyle={{ pointerEvents: "none" }}
        source={image ? { uri: image?.uri } : undefined}
        title={image ? undefined : profileAvataProps?.title}
        {...profileAvataProps}
      />
      <IconButton
        height={25}
        width={25}
        minHeight={25}
        minWidth={25}
        paddingHorizontal={5}
        paddingVertical={5}
        marginTop={-30}
        marginRight={-60}
        // position="absolute"
        borderRadius={50}
        backgroundColor={colors.secondary_dark_shade}
        disabled
      >
        {isLoading ? (
          <ActivityIndicator color={colors?.white} animating />
        ) : (
          <CameraIcon />
        )}
      </IconButton>
    </MediaUploader>
  );
};
