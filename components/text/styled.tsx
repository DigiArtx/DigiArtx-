import { font } from "@utils/fonts";
import styled from "@emotion/native";
import { fontSize as fSize } from "./sizes";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorValue, TextProps, TextStyle, ViewStyle } from "react-native";

import { useThemeMode } from "@providers/hooks";

const colors = useThemeMode();

export interface RegularTextProps extends TextProps {
  fontSize?: TextStyle["fontSize"];
  lineHeight?: TextStyle["lineHeight"];
  color?: string | ColorValue;
  marginTop?: ViewStyle["marginTop"];
  textAlign?: TextStyle["textAlign"];
  textTransform?: TextStyle["textTransform"];
  marginBottom?: ViewStyle["marginBottom"];
  fontWeight?: TextStyle["fontWeight"];
}

export const RegularText = styled.Text<RegularTextProps>(
  ({
    fontSize = fSize.xs,
    lineHeight = fontSize * 1.6,
    color,
    marginTop,
    textAlign,
    theme,
    marginBottom,
    textTransform,
    fontWeight,
  }) => ({
    fontFamily: font.regular,
    fontSize: RFValue(fontSize),
    lineHeight: RFValue(lineHeight),
    color: color ?? colors.colors.text,
    marginTop,
    textAlign,
    marginBottom,
    textTransform,
    fontWeight,
  })
);

export const BoldText = styled(RegularText)({
  fontFamily: font.bold,
});

export const SemiBoldText = styled(RegularText)({
  fontFamily: font.bold,
});

export const ExtraBoldText = styled(RegularText)({
  fontFamily: font.extraBold,
});

export const MediumText = styled(RegularText)({
  fontFamily: font.medium,
});

export const BlackText = styled(RegularText)({
  fontFamily: font.black,
});

export const LightText = styled(RegularText)({
  fontFamily: font.light,
});
