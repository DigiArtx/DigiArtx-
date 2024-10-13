import { Stack } from "expo-router";
import { SSRProvider } from "@react-aria/ssr";
import { NativeBaseProvider } from "native-base";

export default function RootLayout() {
  return (
    <SSRProvider>
      <NativeBaseProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </NativeBaseProvider>
    </SSRProvider>
  );
}
