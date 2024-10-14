import { Tabs } from "expo-router";
import { Platform } from "react-native";
import HomeIcon from "@assets/svg/tabIcons/active/Home.svg";
import StatsIcon from "@assets/svg/tabIcons/active/Stats.svg";
import SearchIcon from "@assets/svg/tabIcons/active/Search.svg";
import ProfileIcon from "@assets/svg/tabIcons/active/Profile.svg";

import IHomeIcon from "@assets/svg/tabIcons/inactive/IHome.svg";
import IStatsIcon from "@assets/svg/tabIcons/inactive/IStats.svg";
import ISearchIcon from "@assets/svg/tabIcons/inactive/ISearch.svg";
import IProfileIcon from "@assets/svg/tabIcons/inactive/IProfile.svg";

export default function Layout() {
  const os = Platform.OS;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#253341",
          borderTopColor: "#253341",
          height: os == "ios" ? 80 : 70,
          padding: 24,
           alignItems: "center",
        },
      }}
      initialRouteName="home"
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (focused ? <HomeIcon /> : <IHomeIcon />),
        }}
      />

      {/* Search Tab */}
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <SearchIcon /> : <ISearchIcon />,
        }}
      />

      {/* Stats Tab */}
      <Tabs.Screen
        name="stats"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <StatsIcon /> : <IStatsIcon />,
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileIcon /> : <IProfileIcon />,
        }}
      />
    </Tabs>
  );
}
