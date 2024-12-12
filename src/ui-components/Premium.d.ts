/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PremiumOverridesProps = {
    Premium?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "AvatarPerfil 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 447"?: PrimitiveOverrideProps<ViewProps>;
    "Group 85"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 165"?: PrimitiveOverrideProps<IconProps>;
    "Muitos usu\u00E1rios do Conecta+ escolhem o Premium para impulsionar suas carreiras profissionais."?: PrimitiveOverrideProps<TextProps>;
    Vector38512547?: PrimitiveOverrideProps<IconProps>;
    Vector38512548?: PrimitiveOverrideProps<IconProps>;
    Vector38512549?: PrimitiveOverrideProps<IconProps>;
    Vector38512550?: PrimitiveOverrideProps<IconProps>;
    Vector38512551?: PrimitiveOverrideProps<IconProps>;
    Vector38512552?: PrimitiveOverrideProps<IconProps>;
    Vector38512553?: PrimitiveOverrideProps<IconProps>;
    Vector38512554?: PrimitiveOverrideProps<IconProps>;
    Vector38512555?: PrimitiveOverrideProps<IconProps>;
    Vector38512556?: PrimitiveOverrideProps<IconProps>;
    Vector38512557?: PrimitiveOverrideProps<IconProps>;
    Vector38512558?: PrimitiveOverrideProps<IconProps>;
    Vector38512559?: PrimitiveOverrideProps<IconProps>;
    Vector38512560?: PrimitiveOverrideProps<IconProps>;
    Vector38512561?: PrimitiveOverrideProps<IconProps>;
    Vector38512562?: PrimitiveOverrideProps<IconProps>;
    Vector38512563?: PrimitiveOverrideProps<IconProps>;
    "Group 89"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 172"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 390"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    ConectaPlus?: PrimitiveOverrideProps<TextProps>;
    "R$49,99/M"?: PrimitiveOverrideProps<TextProps>;
    "Plano Mensal"?: PrimitiveOverrideProps<TextProps>;
    "Frame 138"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43038512572"?: PrimitiveOverrideProps<FlexProps>;
    "CheckIcon 138512573"?: PrimitiveOverrideProps<ViewProps>;
    Vector38512574?: PrimitiveOverrideProps<IconProps>;
    "Maior recomenda\u00E7\u00E3o em processos seletivos"?: PrimitiveOverrideProps<TextProps>;
    "Frame 139"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    "CheckIcon 138512578"?: PrimitiveOverrideProps<ViewProps>;
    Vector38512579?: PrimitiveOverrideProps<IconProps>;
    "Recomenda\u00E7\u00F5es de novas competencias"?: PrimitiveOverrideProps<TextProps>;
    "Frame 137"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43038512582"?: PrimitiveOverrideProps<FlexProps>;
    "CheckIcon 138512583"?: PrimitiveOverrideProps<ViewProps>;
    Vector38512584?: PrimitiveOverrideProps<IconProps>;
    "Recomenda\u00E7\u00F5es de vagas mais aprofundadas"?: PrimitiveOverrideProps<TextProps>;
    Vector38512587?: PrimitiveOverrideProps<IconProps>;
    Button38532422?: PrimitiveOverrideProps<ButtonProps>;
    NavHeader?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 206"?: PrimitiveOverrideProps<ViewProps>;
    Button39214302?: PrimitiveOverrideProps<ButtonProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    Button39214304?: PrimitiveOverrideProps<ButtonProps>;
    Button39214305?: PrimitiveOverrideProps<ButtonProps>;
    Button39214306?: PrimitiveOverrideProps<ButtonProps>;
    Button39214307?: PrimitiveOverrideProps<ButtonProps>;
    Button39214308?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PremiumProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: PremiumOverridesProps | undefined | null;
}>;
export default function Premium(props: PremiumProps): React.ReactElement;
