import { Heading, Text } from "native-base";
import WelcomeArt from "@assets/onboarding/welcome.svg";
import { RFSpacingSize, Spacer, ViewContainer } from "@components/views";

export default function Welcome() {
  return (
    <ViewContainer
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#1C212B"
    >
      <WelcomeArt />
      <Spacer height={RFSpacingSize.i40} />
      <Heading
        color="#FFFFFF"
        fontFamily="Gilroy-Bold"
        fontSize="34px"
        lineHeight="40.8px"
        textAlign="center"
      >
        Hey! Welcome
      </Heading>
      <Spacer />
      <Text
        color="#FFFFFF"
        fontFamily="Gilroy-Medium"
        fontSize="16px"
        lineHeight="19.2px"
        textAlign="center"
      >
        Create and Sell your NFT in 1 seconds
      </Text>
    </ViewContainer>
  );
}
