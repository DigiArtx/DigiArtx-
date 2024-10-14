import { Text } from "native-base";
import { ViewContainer } from "@components/views";

export default function Index() {
  return (
    <ViewContainer
    flex={1}
    justifyContent="center"
    alignItems="center"
    backgroundColor="#15202B"
  >
    <Text color="#FFFFFF">Profile Page</Text>
  </ViewContainer>
  );
}
