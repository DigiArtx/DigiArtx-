import { ReactNode } from "react";
import { Stack, Text } from "native-base";
import { PrimaryButton } from "@components/button";

export interface ConnectWalletButtonProps {
  title: string;
  icon: ReactNode;
  onPress: () => void;
}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  icon,
  title,
  onPress,
}) => {
  return (
    <PrimaryButton
      backgroundColor="#253341"
      borderColor="#253341"
      borderRadius={10}
      padding={12}
      width="100%"
      onPress={onPress}
    >
      <Stack direction="row" alignItems="center" space={2} alignSelf='flex-start'>
        {icon}
        <Text
          color="#F5F8FA"
          fontFamily="Gilroy-Bold"
          fontSize="14px"
          lineHeight="16.41px"
          letterSpacing="1.25%"
        >
          {title}
        </Text>
      </Stack>
    </PrimaryButton>
  );
};
