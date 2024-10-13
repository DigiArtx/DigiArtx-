import styled from "@emotion/native";
import { HeaderContainerProps } from "./interface";
import { heightPixel, widthPixel } from "@utils/pxToDpConvert";
import { StyledTouchableOpacity, StyledView } from "@components/views/styled";

export const HeaderContainer = styled(StyledView)<HeaderContainerProps>(
  ({
    elevation,
    floating,
    hasBorderBottom,
    // paddingTop = heightPixel(55),
    paddingHorizontal = widthPixel(25),
    paddingBottom = heightPixel(20),
    position = floating ? "absolute" : "relative",
    flexDirection = "row",
    justifyContent = "space-evenly",
    zIndex = elevation ?? 10,
    borderBottomWidth = hasBorderBottom ? 0.3 : 0,
    borderBottomColor = "#979797",
    width = "100%",
  }) => ({
    position,
    flexDirection,
    justifyContent,
    paddingHorizontal,
    paddingBottom,
    // paddingTop,
    width,
    zIndex,
    elevation,
    borderBottomWidth,
    borderBottomColor,
  })
);

export const SideComponent = styled(StyledTouchableOpacity)(
  ({ flexGrow = 1 }) => ({
    flexGrow,
  })
);
