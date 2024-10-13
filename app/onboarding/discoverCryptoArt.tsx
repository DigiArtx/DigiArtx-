import { Flex } from "native-base";
import { useRouter } from "expo-router";
import { Spacer } from "@components/views";
import { OnboardingCard } from "./components";
import Icon from "@assets/onboarding/onboarding2.svg";

export default function DiscoverCryptoArt() {
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
        heading="Discovering the  world of crypto art"
      />
    </Flex>
  );
}
