import { ReactNode } from "react";
import { PrimaryButton } from "@components/button";
import { Heading, Stack, Text, Flex } from "native-base";

export interface OnboardingCardProps {
  icons: ReactNode[]; 
  heading: string;
  onPress: () => void;
}

export const OnboardingCard: React.FC<OnboardingCardProps> = ({
  icons,
  heading,
  onPress,
}) => {
  return (
    <Stack
      position="absolute"
      bottom={0}
      backgroundColor="#253341"
      borderTopLeftRadius="30px"
      borderTopRightRadius="30px"
      padding="42px 16px"
      space={10}
      height="367px"
      width="100%"
    >
      <Stack direction="column" space={6}>
        <Stack direction="column" space={4} alignItems="center">
          <Heading
            lineHeight="40.8px"
            fontSize="34px"
            color="#FFFFFF"
            fontFamily="Gilroy-Bold"
            textAlign="center"
          >
            {heading}
          </Heading>
          <Text
            fontFamily="Gilroy-Medium"
            fontSize="16px"
            lineHeight="19.2px"
            textAlign="center"
            color="#F5F8FA"
          >
            Buy and sell digital items
          </Text>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          space={2}
        >
          {icons.map((icon, index) => (
            <Flex key={index}>{icon}</Flex>
          ))}
        </Stack>
      </Stack>
      <PrimaryButton
        onPress={onPress}
        text="Next"
        borderColor="#1D9BF0"
        backgroundColor="#1D9BF0"
        accessibilityLabel="Proceed to the next step"
      />
    </Stack>
  );
};
