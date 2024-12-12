/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ConfigsOverridesProps = {
    Configs?: PrimitiveOverrideProps<ViewProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "Group 451"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector38511765?: PrimitiveOverrideProps<IconProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 5"?: PrimitiveOverrideProps<ViewProps>;
    Vector38511767?: PrimitiveOverrideProps<IconProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 4"?: PrimitiveOverrideProps<ViewProps>;
    Vector38511769?: PrimitiveOverrideProps<IconProps>;
    "Acesso \u00E0 conta"?: PrimitiveOverrideProps<TextProps>;
    "Endere\u00E7o de e-mail"?: PrimitiveOverrideProps<TextProps>;
    "Trocar de senha"?: PrimitiveOverrideProps<TextProps>;
    "N\u00FAmeros de telefone"?: PrimitiveOverrideProps<TextProps>;
    "Verifica\u00E7\u00E3o de duas etapas"?: PrimitiveOverrideProps<TextProps>;
    "Suas sess\u00F5es ativas"?: PrimitiveOverrideProps<TextProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 6"?: PrimitiveOverrideProps<ViewProps>;
    Vector38511781?: PrimitiveOverrideProps<IconProps>;
    SwitchField38511795?: PrimitiveOverrideProps<FlexProps>;
    SwitchField38572678?: PrimitiveOverrideProps<SwitchFieldProps>;
    Divider38572821?: PrimitiveOverrideProps<DividerProps>;
    Divider38572826?: PrimitiveOverrideProps<DividerProps>;
    Divider38572824?: PrimitiveOverrideProps<DividerProps>;
    Divider38572827?: PrimitiveOverrideProps<DividerProps>;
    "Group 485"?: PrimitiveOverrideProps<ViewProps>;
    NavHeader?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 206"?: PrimitiveOverrideProps<ViewProps>;
    Button38981750?: PrimitiveOverrideProps<ButtonProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    Button38981752?: PrimitiveOverrideProps<ButtonProps>;
    Button38981753?: PrimitiveOverrideProps<ButtonProps>;
    Button38981754?: PrimitiveOverrideProps<ButtonProps>;
    Button38981755?: PrimitiveOverrideProps<ButtonProps>;
    Button38981756?: PrimitiveOverrideProps<ButtonProps>;
    "Group 484"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 205"?: PrimitiveOverrideProps<ViewProps>;
    Vector38572744?: PrimitiveOverrideProps<IconProps>;
    Vector38572745?: PrimitiveOverrideProps<IconProps>;
    Vector38572746?: PrimitiveOverrideProps<IconProps>;
    Vector38572747?: PrimitiveOverrideProps<IconProps>;
    Acessibilidade?: PrimitiveOverrideProps<TextProps>;
    "Acesso e Seguran\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    "Apar\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "Notifica\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
    Divider38572752?: PrimitiveOverrideProps<DividerProps>;
    Divider38572753?: PrimitiveOverrideProps<DividerProps>;
    Divider38572754?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type ConfigsProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: ConfigsOverridesProps | undefined | null;
}>;
export default function Configs(props: ConfigsProps): React.ReactElement;
