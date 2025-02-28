import {
  RFFontSize,
  RFLineHeight,
  RegularText,
  fontSize,
} from "components/text";
import styled from "@emotion/native";
import { Platform } from "react-native";
import { spacingSize } from "@components/views";
import { useThemeMode } from "@providers/hooks";
import { font, heightPixel, hp, widthPixel, wp } from "utils";
import { StyledInputProps, InputBoxProps } from "./interface";

const colors = useThemeMode();

export const StyledInput = styled.TextInput<StyledInputProps>(
  ({ ...rest }) => ({
    paddingHorizontal: rest?.paddingHorizontal,
    paddingVertical: rest?.paddingVertical,
    borderRadius: rest?.borderRadius,
    alignItems: rest?.alignItems,
    justifyContent: rest?.justifyContent,
    backgroundColor: rest?.backgroundColor,
    width: rest?.width,
    height: rest?.height,
    borderColor: rest?.borderColor,
    borderWidth: rest?.borderWidth,
    marginTop: rest?.marginTop,
    marginBottom: rest?.marginBottom,
    marginLeft: rest?.marginLeft,
    marginRight: rest?.marginRight,
    opacity: rest?.opacity,
    padding: rest?.padding,
    zIndex: rest?.zIndex,
    position: rest?.position,
    flex: rest?.flex,
    flexGrow: rest?.flexGrow,
    textTransform: rest?.textTransform,
  })
);

export const InputBox = styled(StyledInput)<InputBoxProps>(
  ({
    theme,
    color,
    hasIcon = false,
    fontSize = RFFontSize.sm,
    lineHeight = fontSize * 1.2,
    fontFamily = font.medium,
  }) => ({
    paddingLeft: widthPixel(!hasIcon ? 0 : spacingSize.i10),
    fontSize: fontSize,
    fontFamily: fontFamily,
    borderWidth: 0,
    flexGrow: 1,
    lineHeight,
    backgroundColor: "transparent",
    color: color ?? colors.theme.colors.text,
  })
);

export const InputWrapper = styled.View<{}>(({}) => ({
  paddingHorizontal: widthPixel(spacingSize.i14),
  paddingVertical: heightPixel(
    Platform.OS == "android" ? spacingSize.i12 : spacingSize.i14
  ),
  marginBottom: hp(0.2),
  borderWidth: 1,
  borderRadius: 8,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const BottomText = styled(RegularText)({
  paddingLeft: wp(1),
  paddingBottom: hp(0.5),
  fontSize: fontSize.xs,
});

export const Label = styled(RegularText)(({ color, theme }) => ({
  fontFamily: font.medium,
  fontSize: RFFontSize.xs,
  lineHeight: RFLineHeight.xs,
  paddingBottom: heightPixel(spacingSize.i10),
  color,
  // paddingLeft: widthPixel(15),
}));

export const InputIconBox = styled.View({
  paddingHorizontal: widthPixel(spacingSize.i10),
});

export const InputPlaceholderTextSection = styled.View({
  flexGrow: 1,
});

export const InputPlaceholderPressable = styled.Pressable<{}>(({}) => ({
  paddingHorizontal: widthPixel(spacingSize.i14),
  paddingVertical: heightPixel(
    Platform.OS == "android" ? spacingSize.i12 : spacingSize.i14
  ),
  marginBottom: heightPixel(spacingSize.i10),
  borderWidth: 1,
  borderRadius: 8,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}));
