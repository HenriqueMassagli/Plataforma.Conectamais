/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, SelectFieldProps, TextAreaFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CadastroUsuario5OverridesProps = {
    CadastroUsuario5?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "\u00DAltimas perguntas"?: PrimitiveOverrideProps<TextProps>;
    "Group 476"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 109"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 108"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 110"?: PrimitiveOverrideProps<IconProps>;
    TextAreaField38512290?: PrimitiveOverrideProps<FlexProps>;
    TextAreaField38572087?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SelectField38572060?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38572061?: PrimitiveOverrideProps<SelectFieldProps>;
    Button38572062?: PrimitiveOverrideProps<ButtonProps>;
    Button38572063?: PrimitiveOverrideProps<ButtonProps>;
    "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"?: PrimitiveOverrideProps<ImageProps>;
    "Question\u00E1rio"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CadastroUsuario5Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: CadastroUsuario5OverridesProps | undefined | null;
}>;
export default function CadastroUsuario5(props: CadastroUsuario5Props): React.ReactElement;
