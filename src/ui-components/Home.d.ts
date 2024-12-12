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
export declare type HomeOverridesProps = {
    Home?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ViewProps>;
    Button38512593?: PrimitiveOverrideProps<FlexProps>;
    Button38512594?: PrimitiveOverrideProps<FlexProps>;
    Button38512596?: PrimitiveOverrideProps<FlexProps>;
    BackgroundDaHome?: PrimitiveOverrideProps<ImageProps>;
    "Conecte-se com oportunidades que valorizam suas habilidades"?: PrimitiveOverrideProps<TextProps>;
    "Sobre n\u00F3s n\u00F3s"?: PrimitiveOverrideProps<TextProps>;
    "Sabemos que pessoas com TEA possuem certas limita\u00E7\u00F5es, como a necessidade de interfaces mais simples e menos sobrecarregadas de informa\u00E7\u00E3o. Assim, criamos a Conecta+, uma plataforma que conecta empregadores e candidatos com TEA, promovendo a inclus\u00E3o no mercado de trabalho."?: PrimitiveOverrideProps<TextProps>;
    "Categorias de vagas"?: PrimitiveOverrideProps<TextProps>;
    "Frame 432 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 468"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 112"?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<IconProps>;
    "Sa\u00FAde"?: PrimitiveOverrideProps<TextProps>;
    Tecnologia?: PrimitiveOverrideProps<TextProps>;
    Vector38512610?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 94"?: PrimitiveOverrideProps<ViewProps>;
    Design?: PrimitiveOverrideProps<TextProps>;
    Vector38512613?: PrimitiveOverrideProps<IconProps>;
    Vector38512614?: PrimitiveOverrideProps<IconProps>;
    Vector38512615?: PrimitiveOverrideProps<IconProps>;
    Vector38512616?: PrimitiveOverrideProps<IconProps>;
    "Recomenda\u00E7\u00E3o de vaga"?: PrimitiveOverrideProps<TextProps>;
    "RecomendacaoImg 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 467"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 202"?: PrimitiveOverrideProps<IconProps>;
    "ANALISTA DE DADOS"?: PrimitiveOverrideProps<TextProps>;
    "4,5"?: PrimitiveOverrideProps<TextProps>;
    Vector38512623?: PrimitiveOverrideProps<IconProps>;
    "REKTR TEC"?: PrimitiveOverrideProps<TextProps>;
    Vector38512625?: PrimitiveOverrideProps<IconProps>;
    "1.783 avalia\u00E7\u00F5es"?: PrimitiveOverrideProps<TextProps>;
    "S\u00E3o Paulo - SP"?: PrimitiveOverrideProps<TextProps>;
    "R$ 5.200,00"?: PrimitiveOverrideProps<TextProps>;
    "H\u00EDbrido"?: PrimitiveOverrideProps<TextProps>;
    Vector38512630?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 203"?: PrimitiveOverrideProps<ViewProps>;
    REKTR?: PrimitiveOverrideProps<TextProps>;
    HomeFooter?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 204"?: PrimitiveOverrideProps<ViewProps>;
    "Copyright \u00A9 2024-2024 ConectaMais"?: PrimitiveOverrideProps<TextProps>;
    Suporte?: PrimitiveOverrideProps<TextProps>;
    Contato?: PrimitiveOverrideProps<TextProps>;
    "Mapa do site"?: PrimitiveOverrideProps<TextProps>;
    "Redes Sociais"?: PrimitiveOverrideProps<TextProps>;
    Vector38512640?: PrimitiveOverrideProps<IconProps>;
    Vector38512641?: PrimitiveOverrideProps<IconProps>;
    Vector38512642?: PrimitiveOverrideProps<IconProps>;
    Vector38512643?: PrimitiveOverrideProps<IconProps>;
    Vector38512644?: PrimitiveOverrideProps<IconProps>;
    Vector38512645?: PrimitiveOverrideProps<IconProps>;
    "In\u00EDcio"?: PrimitiveOverrideProps<TextProps>;
    Vagas?: PrimitiveOverrideProps<TextProps>;
    Comunidade?: PrimitiveOverrideProps<TextProps>;
    Plus?: PrimitiveOverrideProps<TextProps>;
    Ajuda?: PrimitiveOverrideProps<TextProps>;
    SearchField?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 184"?: PrimitiveOverrideProps<ViewProps>;
    Vector38512655?: PrimitiveOverrideProps<IconProps>;
    Vector38512656?: PrimitiveOverrideProps<IconProps>;
    "WokIconT 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector38512658?: PrimitiveOverrideProps<IconProps>;
    SelectField38512659?: PrimitiveOverrideProps<FlexProps>;
    SelectField38512660?: PrimitiveOverrideProps<FlexProps>;
    SelectField38512661?: PrimitiveOverrideProps<FlexProps>;
    Button38512662?: PrimitiveOverrideProps<FlexProps>;
    NavHeader?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 206"?: PrimitiveOverrideProps<ViewProps>;
    Button38604011?: PrimitiveOverrideProps<ButtonProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    Button38573258?: PrimitiveOverrideProps<ButtonProps>;
    Button38573267?: PrimitiveOverrideProps<ButtonProps>;
    Button38573263?: PrimitiveOverrideProps<ButtonProps>;
    Button38573268?: PrimitiveOverrideProps<ButtonProps>;
    Button38573275?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HomeProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomeOverridesProps | undefined | null;
}>;
export default function Home(props: HomeProps): React.ReactElement;
