import { ViewProps } from "react-native";
import { StyledViewProps } from "@components/views/styled";

export interface HeaderContainerProps extends ViewProps, StyledViewProps {
    elevation?: number,
    floating?: boolean;
    hasBorderBottom?: boolean;
  }