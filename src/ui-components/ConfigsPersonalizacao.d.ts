/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, IconProps, ImageProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ConfigsPersonalizacaoOverridesProps = {
    ConfigsPersonalizacao?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "Group 478"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "Personalizando sua experi\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "edit_24dp_000000_FILL0_wght400_GRAD0_opsz24 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector38512103?: PrimitiveOverrideProps<IconProps>;
    SelectField38531446?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38531456?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider38531472?: PrimitiveOverrideProps<DividerProps>;
    "Group 484"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 205"?: PrimitiveOverrideProps<ViewProps>;
    Vector38512088?: PrimitiveOverrideProps<IconProps>;
    Vector38512089?: PrimitiveOverrideProps<IconProps>;
    Vector38512090?: PrimitiveOverrideProps<IconProps>;
    Vector38512092?: PrimitiveOverrideProps<IconProps>;
    Acessibilidade?: PrimitiveOverrideProps<TextProps>;
    "Acesso e Seguran\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    "Apar\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "Notifica\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
    Divider38572732?: PrimitiveOverrideProps<DividerProps>;
    Divider38572737?: PrimitiveOverrideProps<DividerProps>;
    Divider38572735?: PrimitiveOverrideProps<DividerProps>;
    "Group 485"?: PrimitiveOverrideProps<ViewProps>;
    NavHeader?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 206"?: PrimitiveOverrideProps<ViewProps>;
    Button38981972?: PrimitiveOverrideProps<ButtonProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    Button38981974?: PrimitiveOverrideProps<ButtonProps>;
    Button38981975?: PrimitiveOverrideProps<ButtonProps>;
    Button38981976?: PrimitiveOverrideProps<ButtonProps>;
    Button38981977?: PrimitiveOverrideProps<ButtonProps>;
    Button38981978?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ConfigsPersonalizacaoProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: ConfigsPersonalizacaoOverridesProps | undefined | null;
}>;
export default function ConfigsPersonalizacao(props: ConfigsPersonalizacaoProps): React.ReactElement;
