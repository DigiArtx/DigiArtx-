import {
  StyleProp,
  TextInputProps,
  TextProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { ExtendEmotionTheme } from "@themes/emotion_theme";
import { useThemeMode } from "providers/hooks";
import { ActiveIconProp, InputBoxProps } from "./interface";
import { BottomText, InputBox, InputWrapper, Label } from "./styled";

export const InputColorState = (
  colors: ExtendEmotionTheme["colors"],
  active?: boolean,
  error?: boolean
) => {
  let borderColor = '#253341';
  let backgroundColor = '#253341';
  borderColor = error ? colors.danger : borderColor;
  backgroundColor = error ? colors.white : backgroundColor;

  return {
    borderColor,
    backgroundColor,
  };
};

export interface PrimaryInputProps
  extends TextInputProps,
    Omit<InputBoxProps, "textAlign"> {
  isRequired?: boolean;
  leftIcon?: React.ReactElement | ActiveIconProp;
  rightIcon?: React.ReactElement | ActiveIconProp;
  editable?: boolean;
  placeholder?: string;
  label?: string;
  labelProps?: TextProps & { color: string };
  containerStyle?: ViewStyle;
  bottomText?: string;
  inputError?: boolean;
  bottomTextOnError?: boolean;
  style?: StyleProp<TextStyle>;
  solid?: boolean;
  isFocused?: (status: boolean) => void;
  onPress?: () => void;
}
export const PrimaryInput: React.FC<PrimaryInputProps> = ({
  isRequired,
  leftIcon,
  rightIcon,
  label,
  editable = true,
  style,
  labelProps,
  containerStyle,
  placeholder,
  bottomText,
  bottomTextOnError = true,
  inputError = false,
  onPress,
  solid = false,
  isFocused,
  ...rest
}) => {
  const { colors } = useThemeMode();
  const [active, setActive] = useState<boolean>(Boolean(rest.value));

  useEffect(() => {
    isFocused && isFocused(active);
  }, [active]);

  return (
    <View style={{ flexGrow: 1 }}>
      {label ? (
        <Label color={colors.black_2} {...labelProps}>
          {label}&nbsp;{isRequired ? "*" : null}
        </Label>
      ) : null}
      <InputWrapper
        style={{
          ...containerStyle,
          ...InputColorState(colors, active, inputError),
        }}
      >
        {(leftIcon as ActiveIconProp)?.active
          ? active
            ? (leftIcon as ActiveIconProp)?.active
            : (leftIcon as ActiveIconProp)?.inActive
          : (leftIcon as React.ReactElement)}
        <InputBox
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={colors.black_4}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onPressIn={onPress}
          hasIcon={Boolean(leftIcon)}
          style={[{ ...InputColorState(colors, active, inputError) }, style]}
          {...rest}
        />
        {(rightIcon as ActiveIconProp)?.active
          ? active
            ? (rightIcon as ActiveIconProp)?.active
            : (rightIcon as ActiveIconProp)?.inActive
          : (rightIcon as React.ReactElement)}
      </InputWrapper>
      {(bottomText && !bottomTextOnError) ||
      (bottomText && bottomTextOnError && inputError) ? (
        <BottomText color={inputError ? colors.danger : colors.text}>
          {bottomText}
        </BottomText>
      ) : null}
    </View>
  );
};
