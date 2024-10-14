import { Flex } from "native-base";
import Fill from "@assets/svg/fill.svg";
import { useRouter } from "expo-router";
import { Spacer } from "@components/views";
import Unfill from "@assets/svg/unfill.svg";
import { OnboardingCard } from "./components";
import Icon from "@assets/onboarding/onboarding.svg";

export default function Index() {
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
        icons={[<Unfill />, <Fill />, <Fill />]}
        heading="Discover largest NFT marketplace"
        onPress={() => router.push("/onboarding/startNFT")}
      />
    </Flex>
  );
}
