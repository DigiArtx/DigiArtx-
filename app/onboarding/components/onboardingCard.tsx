import Fill from "@assets/svg/fill.svg";
import Unfill from "@assets/svg/unfill.svg";
import { PrimaryButton } from "@components/button";
import { Heading, Stack, Text } from "native-base";

export interface OnboardingCardProps {
  heading: string;
  onPress: () => void;
}

export const OnboardingCard: React.FC<OnboardingCardProps> = ({
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
      padding="42px 16px 42px 16px"
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
        <Stack alignItems="center" direction="row" alignSelf="center" space={2}>
          <Unfill />
          <Fill />
          <Fill />
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
