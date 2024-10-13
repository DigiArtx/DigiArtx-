import { useRouter } from "expo-router";
import NextIcon from "@assets/svg/next.svg";
import Logo from "@assets/logo/DigiArtx_logo.svg";
import { PrimaryButton } from "@components/button";
import { Flex, Heading, IconButton, Stack, Text } from "native-base";
import { RFSpacingSize, Spacer, ViewContainer } from "@components/views";

export default function Index() {
  const router = useRouter();
  return (
    <ViewContainer
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="#1C212B"
    >
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />
      <Logo />
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />
      <Stack space={6} alignItems="flex-start">
        <Heading
          fontFamily="Gilroy-Bold"
          fontSize="34px"
          lineHeight="40.8px"
          color="#F5F8FA"
        >
          All NFTs are certifiably unique and ownable
        </Heading>
        <Text
          fontFamily="Gilroy-Medium"
          fontSize="16px"
          lineHeight="19.2px"
          color="#AAB8C2"
        >
          A credible and excellent marketplace for non-fungible token.
        </Text>
      </Stack>
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <PrimaryButton
          text="Connect with Wallet"
          backgroundColor="#1D9BF0"
          borderColor="#1D9BF0"
          width="80%"
          onPress={() => router.push("/_sitemap")}
        />
        <Flex
          borderWidth="1px"
          borderColor="#F5F8FA"
          borderRadius="10px"
          padding="10px"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton icon={<NextIcon />} />
        </Flex>
      </Stack>
      <Spacer height={RFSpacingSize.i20} />
    </ViewContainer>
  );
}
