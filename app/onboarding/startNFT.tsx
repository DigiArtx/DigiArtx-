import { Flex } from "native-base";
import { useRouter } from "expo-router";
import { Spacer } from "@components/views";
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
        onPress={() => router.push("/_sitemap")}
        heading="Start your own NFT gallery now"
      />
    </Flex>
  );
}
