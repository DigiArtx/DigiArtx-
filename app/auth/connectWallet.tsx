import { useRouter } from "expo-router";
import BackIcon from "@assets/svg/back.svg";
import Ethereum from "@assets/svg/ethereum.svg";
import MetaMask from "@assets/svg/MetaMask.svg";
import Logo from "@assets/logo/DigiArtx_logo.svg";
import { PrimaryButton } from "@components/button";
import { ConnectWalletButton } from "./components";
import Connect from "@assets/onboarding/connect.svg";
import Trust_Wallet from "@assets/svg/Trust_Wallet.svg";
import { Heading, IconButton, Stack, Text } from "native-base";
import { RFSpacingSize, Spacer, ViewContainer } from "@components/views";

export default function ConnectWallet() {
  const router = useRouter();
  return (
    <ViewContainer
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="#1C212B"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <IconButton icon={<BackIcon />} />
        <Logo />
      </Stack>
      <Spacer height={RFSpacingSize.i40} />
      <Connect />
      <Spacer height={RFSpacingSize.i40} />
      <Heading
        color="#FFFFFF"
        fontFamily="Gilroy-Bold"
        fontSize="34px"
        lineHeight="40.8px"
        textAlign="center"
      >
        Choose your wallet
      </Heading>
      <Spacer />
      <Text
        color="#89969F"
        fontFamily="Gilroy-Medium"
        fontSize="16px"
        lineHeight="19.2px"
        textAlign="center"
      >
        By connecting your wallet you agree to our Terms of Service and Privacy
        Policy
      </Text>

      <Spacer height={RFSpacingSize.i40} />

      <ConnectWalletButton
        icon={<MetaMask />}
        title="MetaMask"
        onPress={() => console.log("hello")}
      />
      <Spacer />
      <ConnectWalletButton
        icon={<Trust_Wallet />}
        title="Trust Wallet"
        onPress={() => console.log("hello")}
      />
      <Spacer />
      <ConnectWalletButton
        icon={<Ethereum />}
        title="Enter ethereum address"
        onPress={() => console.log("hello")}
      />

      <Spacer height={RFSpacingSize.i40} />
      <PrimaryButton
        width="100%"
        text="Continue"
        borderColor="#1D9BF0"
        backgroundColor="#1D9BF0"
        onPress={() => router.push("/_sitemap")}
      />
    </ViewContainer>
  );
}
