/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, SelectFieldProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ConfigsAcessibilidadeOverridesProps = {
    ConfigsAcessibilidade?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    Acessibilidade38511991?: PrimitiveOverrideProps<TextProps>;
    Vector38511998?: PrimitiveOverrideProps<IconProps>;
    "Group 482"?: PrimitiveOverrideProps<ViewProps>;
    "Group 471"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "Group 76"?: PrimitiveOverrideProps<ViewProps>;
    "Assist\u00EAncia com IA"?: PrimitiveOverrideProps<TextProps>;
    thumb?: PrimitiveOverrideProps<ViewProps>;
    "Desativar Anima\u00E7\u00F5es"?: PrimitiveOverrideProps<TextProps>;
    Temas?: PrimitiveOverrideProps<TextProps>;
    Button38512019?: PrimitiveOverrideProps<FlexProps>;
    Button38512020?: PrimitiveOverrideProps<FlexProps>;
    "ThemeIcon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector38512023?: PrimitiveOverrideProps<IconProps>;
    SwitchField38532358?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField38532359?: PrimitiveOverrideProps<SwitchFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    "Group 484"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 205"?: PrimitiveOverrideProps<ViewProps>;
    Vector38572761?: PrimitiveOverrideProps<IconProps>;
    Vector38572762?: PrimitiveOverrideProps<IconProps>;
    Vector38572763?: PrimitiveOverrideProps<IconProps>;
    Vector38572764?: PrimitiveOverrideProps<IconProps>;
    Acessibilidade38572765?: PrimitiveOverrideProps<TextProps>;
    "Acesso e Seguran\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    "Apar\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "Notifica\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
    Divider38572769?: PrimitiveOverrideProps<DividerProps>;
    Divider38572770?: PrimitiveOverrideProps<DividerProps>;
    Divider38572771?: PrimitiveOverrideProps<DividerProps>;
    Divider38572798?: PrimitiveOverrideProps<DividerProps>;
    Divider38572819?: PrimitiveOverrideProps<DividerProps>;
    "Group 486"?: PrimitiveOverrideProps<ViewProps>;
    NavHeader?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 206"?: PrimitiveOverrideProps<ViewProps>;
    Button38981943?: PrimitiveOverrideProps<ButtonProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    Button38981945?: PrimitiveOverrideProps<ButtonProps>;
    Button38981946?: PrimitiveOverrideProps<ButtonProps>;
    Button38981947?: PrimitiveOverrideProps<ButtonProps>;
    Button38981948?: PrimitiveOverrideProps<ButtonProps>;
    Button38981949?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ConfigsAcessibilidadeProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: ConfigsAcessibilidadeOverridesProps | undefined | null;
}>;
export default function ConfigsAcessibilidade(props: ConfigsAcessibilidadeProps): React.ReactElement;
