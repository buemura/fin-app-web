"use client";

import { Oval } from "react-loader-spinner";
import {
  loaderHeight,
  loaderPrimaryColor,
  loaderSecondaryColor,
  loaderStrokeWidth,
  loaderStrokeWidthSecondary,
  loaderWidth,
} from "../helpers";

interface LoaderProps {
  primaryColor?: string;
  secondaryColor?: string;
  visible?: boolean;
  strokeWidth?: number;
  strokeWidthSecondary?: number;
  width?: number;
  height?: number;
}

export function LoaderSpinner({
  primaryColor,
  secondaryColor,
  visible,
  strokeWidth,
  strokeWidthSecondary,
  width,
  height,
}: LoaderProps) {
  return (
    <Oval
      width={width || loaderWidth}
      height={height || loaderHeight}
      color={primaryColor || loaderPrimaryColor}
      secondaryColor={secondaryColor || loaderSecondaryColor}
      wrapperStyle={{}}
      wrapperClass=""
      visible={visible || true}
      ariaLabel="oval-loading"
      strokeWidth={strokeWidth || loaderStrokeWidth}
      strokeWidthSecondary={strokeWidthSecondary || loaderStrokeWidthSecondary}
    />
  );
}
