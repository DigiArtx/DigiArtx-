import { Flex } from "native-base";
import { useRouter } from "expo-router";
import { Spacer } from "@components/views";
import Unfill from "@assets/svg/unfill.svg";
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
        icons={[<Unfill />, <Unfill />, <Unfill />]}
        onPress={() => router.push("/wallet")}
        heading="Discovering the  world of crypto art"
      />
    </Flex>
  );
}
