import { useEffect } from "react";
import SplashScreen from "./splash";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/onboarding");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return <SplashScreen />;
}
