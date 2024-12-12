/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MensagensNotificacoesOverridesProps = {
    MensagensNotificacoes?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 109"?: PrimitiveOverrideProps<IconProps>;
    "Group 395"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 107"?: PrimitiveOverrideProps<ViewProps>;
    "Mateus Souza comentou a publica\u00E7\u00E3o de Mariana Portela: Foi fant\u00E1stico!"?: PrimitiveOverrideProps<TextProps>;
    "Maria Silva comentou a publica\u00E7\u00E3o de Mariana Portela: Foi fant\u00E1stico!"?: PrimitiveOverrideProps<TextProps>;
    "Jo\u00E3o Melo e outras pessoas adicionaram 5 coment\u00E1rios \u00E0 publica\u00E7\u00E3o de Lucas"?: PrimitiveOverrideProps<TextProps>;
    "59 min"?: PrimitiveOverrideProps<TextProps>;
    "2 h"?: PrimitiveOverrideProps<TextProps>;
    "3 h"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 108"?: PrimitiveOverrideProps<ViewProps>;
    "Parab\u00E9ns pela sua conquista, Lucas! \u2764\uFE0F"?: PrimitiveOverrideProps<TextProps>;
    "55 rea\u00E7\u00F5es - 5 coment\u00E1rios"?: PrimitiveOverrideProps<TextProps>;
    "Gente, acabei de conquistar meu primeiro emprego na New Berg, mal posso esperar pelo..."?: PrimitiveOverrideProps<TextProps>;
    "Line 21"?: PrimitiveOverrideProps<IconProps>;
    "Line 22"?: PrimitiveOverrideProps<IconProps>;
    "Line 23"?: PrimitiveOverrideProps<IconProps>;
    Conversas?: PrimitiveOverrideProps<TextProps>;
    "Voc\u00EA ainda n\u00E3o tem mensagens :(\u2028\u2028"?: PrimitiveOverrideProps<TextProps>;
    NavHeader?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 206"?: PrimitiveOverrideProps<ViewProps>;
    Button39012867?: PrimitiveOverrideProps<ButtonProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    Button39012869?: PrimitiveOverrideProps<ButtonProps>;
    Button39012870?: PrimitiveOverrideProps<ButtonProps>;
    Button39012871?: PrimitiveOverrideProps<ButtonProps>;
    Button39012872?: PrimitiveOverrideProps<ButtonProps>;
    Button39012873?: PrimitiveOverrideProps<ButtonProps>;
    "image 839044187"?: PrimitiveOverrideProps<ImageProps>;
    "image 839044189"?: PrimitiveOverrideProps<ImageProps>;
    "image 839044191"?: PrimitiveOverrideProps<ImageProps>;
    "image 839044193"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MensagensNotificacoesProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: MensagensNotificacoesOverridesProps | undefined | null;
}>;
export default function MensagensNotificacoes(props: MensagensNotificacoesProps): React.ReactElement;
