import { ViewStyle } from "react-native";
import { StyledTouchable } from "./styled";
import { RegularText, RegularTextProps } from "../text/styled";

interface TouchableTextProps extends RegularTextProps {
  value?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

export const TouchableText: React.FC<TouchableTextProps> = ({
  value,
  onPress,
  containerStyle,
  ...rest
}) => {
  return (
    <StyledTouchable onPress={onPress} style={{ ...containerStyle }}>
      <RegularText {...rest}>{value}</RegularText>
    </StyledTouchable>
  );
};
