/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonProps,
  IconProps,
  ImageProps,
  TextProps,
  ViewProps,
} from "@aws-amplify/ui-react";

export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type EscolhaDeContaOverridesProps = {
  EscolhaDeConta?: PrimitiveOverrideProps<ViewProps>;
  Login?: PrimitiveOverrideProps<ViewProps>;
  "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
  "Group 441"?: PrimitiveOverrideProps<ViewProps>;
  "Group 3"?: PrimitiveOverrideProps<ViewProps>;
  "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
  "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"?: PrimitiveOverrideProps<ImageProps>;
  Vector38512114?: PrimitiveOverrideProps<IconProps>;
  Vector38512115?: PrimitiveOverrideProps<IconProps>;
  Vector38512116?: PrimitiveOverrideProps<IconProps>;
  Vector38512117?: PrimitiveOverrideProps<IconProps>;
  Vector38512118?: PrimitiveOverrideProps<IconProps>;
  Vector38512119?: PrimitiveOverrideProps<IconProps>;
  Vector38512120?: PrimitiveOverrideProps<IconProps>;
  Vector38512121?: PrimitiveOverrideProps<IconProps>;
  Vector38512122?: PrimitiveOverrideProps<IconProps>;
  Vector38512123?: PrimitiveOverrideProps<IconProps>;
  Vector38512124?: PrimitiveOverrideProps<IconProps>;
  Vector38512125?: PrimitiveOverrideProps<IconProps>;
  Vector38512126?: PrimitiveOverrideProps<IconProps>;
  Vector38512127?: PrimitiveOverrideProps<IconProps>;
  Vector38512128?: PrimitiveOverrideProps<IconProps>;
  Vector38512129?: PrimitiveOverrideProps<IconProps>;
  Vector38512130?: PrimitiveOverrideProps<IconProps>;
  Vector38512131?: PrimitiveOverrideProps<IconProps>;
  Vector38512132?: PrimitiveOverrideProps<IconProps>;
  Vector38512133?: PrimitiveOverrideProps<IconProps>;
  Vector38512134?: PrimitiveOverrideProps<IconProps>;
  Vector38512135?: PrimitiveOverrideProps<IconProps>;
  "Qual seu tipo de conta?"?: PrimitiveOverrideProps<TextProps>;
  "Bem-vindo!"?: PrimitiveOverrideProps<TextProps>;
  Button38544097?: PrimitiveOverrideProps<ButtonProps>;
  Button38544320?: PrimitiveOverrideProps<ButtonProps>;
  Button38544328?: PrimitiveOverrideProps<ButtonProps>;
  Vector38545451?: PrimitiveOverrideProps<IconProps>;
  Vector38545452?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type EscolhaDeContaProps = React.PropsWithChildren<
  Partial<ViewProps> & {
    bancoImagens?: any;
  } & {
    overrides?: EscolhaDeContaOverridesProps | undefined | null;
  }
>;
export default function EscolhaDeConta(
  props: EscolhaDeContaProps
): React.ReactElement;
