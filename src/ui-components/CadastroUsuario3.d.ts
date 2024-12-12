/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, ImageProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CadastroUsuario3OverridesProps = {
    CadastroUsuario3?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "Algumas perguntas"?: PrimitiveOverrideProps<TextProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 201"?: PrimitiveOverrideProps<ViewProps>;
    "Privacidade dos Dados \u2028Todos os arquivos e informa\u00E7\u00F5es fornecidos por voc\u00EA ser\u00E3o estritamente privados e usados apenas para melhorar sua experi\u00EAncia na plataforma. Seus dados n\u00E3o ser\u00E3o compartilhados com terceiros. Para mais informa\u00E7\u00F5es, entre em contato com nossa equipe de suporte."?: PrimitiveOverrideProps<TextProps>;
    "Question\u00E1rio"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 108"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 109"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 110"?: PrimitiveOverrideProps<IconProps>;
    Button3857382?: PrimitiveOverrideProps<ButtonProps>;
    Button3857383?: PrimitiveOverrideProps<ButtonProps>;
    "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"?: PrimitiveOverrideProps<ImageProps>;
    SelectField3857352?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField3857363?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField3857372?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CadastroUsuario3Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: CadastroUsuario3OverridesProps | undefined | null;
}>;
export default function CadastroUsuario3(props: CadastroUsuario3Props): React.ReactElement;
