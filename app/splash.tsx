import Logo from "@assets/logo/logo.svg";
import { Row, ViewContainer } from "@components/views";

export default function SplashScreen() {
  return (
    <ViewContainer
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#1C212B"
    >
      <Row width={207} height={168.35} opacity={0.7}>
        <Logo />
      </Row>
    </ViewContainer>
  );
}
