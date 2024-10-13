import { TextStyle } from "react-native";

export type ActiveIconProp = {
  active: React.ReactElement;
  inActive: React.ReactElement;
};

export interface StyledInputProps extends TextStyle {}

export interface InputBoxProps extends StyledInputProps {
  inActive: React.ReactElement;
  hasIcon?: boolean;
}
