import { useThemeMode } from "@providers/hooks";
import { Avatar, AvatarProps } from "@rneui/base";
import { Upload, useReadUploadQuery } from "@stores/upload";
import { getInitials } from "@utils/formatting";
import { hp } from "@utils/general";

export interface ProfileAvatarProps extends AvatarProps {
  upload_id?: string;
  upload?: Upload;
}
export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  upload_id,
  upload,
  title,
  source,
  containerStyle,
  ...rest
}) => {
  const { colors } = useThemeMode();
  const { data, error, isLoading, isFetching } = useReadUploadQuery({
    uuid: upload_id ?? upload?.uuid ?? "",
  });

  // console.log(upload_id, data, error)

  return (
    <Avatar
      rounded
      size={hp(3)}
      title={
        title && !Boolean(upload?.url || data?.data?.url || source)
          ? getInitials(title)
          : undefined
      }
      source={
        Boolean((upload?.url ?? data?.data?.url) && !source)
          ? { uri: upload?.url ?? data?.data?.url }
          : source
      }
      containerStyle={[
        {
          backgroundColor: colors.secondary_dark_shade,
          borderColor: colors.secondary_dark_shade,
          borderWidth: 2.5,
        },
        containerStyle,
      ]}
      {...rest}
    />
  );
};
