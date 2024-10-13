import { ReactNode } from "react";
import { BoldText } from "../text/styled";
import { AntDesign } from "@expo/vector-icons";
import { useThemeMode } from "@providers/hooks";
import { HeaderContainerProps } from "./interface";
import { StyledViewProps } from "@components/views";
import { useNavigation } from "@react-navigation/native";
import { HeaderContainer, SideComponent } from "./styled";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacityProps, useWindowDimensions } from "react-native";

export interface NavHeaderProps extends HeaderContainerProps {
  title?: string;
  rightComponent?: ReactNode;
  centerComponent?: ReactNode;
  leftComponent?: React.ReactElement;
  rightComponentProps?: TouchableOpacityProps & StyledViewProps;
  centerComponentProps?: TouchableOpacityProps & StyledViewProps;
  leftComponentProps?: TouchableOpacityProps & StyledViewProps;
  backAction?: () => void;
  elevation?: number;
  color?: string;
}

export const NavHeader: React.FC<NavHeaderProps> = ({
  title,
  leftComponent,
  centerComponent,
  rightComponent,
  rightComponentProps,
  centerComponentProps,
  leftComponentProps,
  elevation,
  backAction,
  color,
  ...rest
}) => {
  const { colors } = useThemeMode();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  return (
    <HeaderContainer {...rest}>
      <SideComponent
        onPress={() => (backAction ? backAction() : navigation.goBack())}
        // backgroundColor={"red"}
        height={"100%"}
        width={"15%"}
        {...leftComponentProps}
      >
        {leftComponent ? (
          leftComponent
        ) : (
          <>
            <AntDesign
              name="arrowleft"
              size={24}
              color={color ? color : colors.black}
              style={{ marginTop: 3 }}
            />
            {/* <BackArrow height={RFValue(60)} /> */}
          </>
        )}
      </SideComponent>
      <SideComponent
        flexGrow={3}
        // backgroundColor={"purple"}
        {...centerComponentProps}
      >
        {centerComponent ? (
          centerComponent
        ) : (
          <BoldText fontSize={RFValue(12)} textAlign="center">
            {title}
          </BoldText>
        )}
      </SideComponent>
      <SideComponent
        alignItems="flex-end"
        // backgroundColor={"blue"}
        height={"100%"}
        width={"15%"}
        {...rightComponentProps}
      >
        {rightComponent ? rightComponent : <></>}
      </SideComponent>
    </HeaderContainer>
  );
};
