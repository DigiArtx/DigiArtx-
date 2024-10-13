import { useContext } from "react";
import { ThemeModeProviderContext } from "./theme_modes_provider/main";

export const useThemeMode = () => useContext(ThemeModeProviderContext);
