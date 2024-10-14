import { Flex } from "native-base";
import { useRouter } from "expo-router";
import Fill from "@assets/svg/fill.svg";
import { Spacer } from "@components/views";
import Unfill from "@assets/svg/unfill.svg";
import { OnboardingCard } from "./components";
import Icon from "@assets/onboarding/onboarding1.svg";

export default function StartNFT() {
  const router = useRouter();
  return (
    <Flex
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="#1C212B"
      position="relative"
    >
      <Icon />
      <Spacer height={300} />
      <OnboardingCard
        heading="Start your own NFT gallery now"
        icons={[<Unfill />, <Unfill />, <Fill />]}
        onPress={() => router.push("/onboarding/discoverCryptoArt")}
      />
    </Flex>
  );
}
