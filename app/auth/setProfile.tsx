import { useRouter } from "expo-router";
import Avater from "@assets/svg/avater.svg";
import BackIcon from "@assets/svg/back.svg";
import { PrimaryInput } from "@components/input";
import { PrimaryButton } from "@components/button";
import { IconButton, Stack, Text, TextArea } from "native-base";
import { RFSpacingSize, Spacer, ViewContainer } from "@components/views";

export default function SetProfile() {
  const router = useRouter();
  return (
    <ViewContainer flex={1} justifyContent="center" backgroundColor="#1C212B">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <IconButton icon={<BackIcon />} />
        <Text
          fontFamily="Gilroy-Bold"
          fontSize="24px"
          lineHeight="28.8px"
          textAlign="center"
          color="#FFFFFF"
        >
          Setup Profile
        </Text>
      </Stack>

      <Spacer height={RFSpacingSize.i40} />
      <Stack space={8}>
        <Stack space={4} alignItems="flex-start">
          <Text
            fontFamily="Gilroy-Medium"
            fontSize="16px"
            lineHeight="19.2px"
            color="#F5F8FA"
          >
            Upload Photo Profile
          </Text>
          <Stack
            width="100%"
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Avater />
            <PrimaryButton
              text="Upload Profile"
              backgroundColor="transparent"
              borderWidth={1}
              borderColor="#F5F8FA"
            />
          </Stack>
        </Stack>
        <Stack>
          <Spacer />
          <PrimaryInput
            placeholder="Username"
            width="100%"
            inActive={<Avater />}
          />
          <Spacer />
          <PrimaryInput placeholder="Email" inActive={<Avater />} />
          <Spacer />
          <PrimaryInput placeholder="Bio" inActive={<Avater />} height={109} />
        </Stack>
      </Stack>
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />
      <Spacer height={RFSpacingSize.i40} />
      <PrimaryButton
        width="100%"
        text="Submit"
        borderColor="#1D9BF0"
        backgroundColor="#1D9BF0"
        onPress={() => router.push("/_sitemap")}
      />
    </ViewContainer>
  );
}
