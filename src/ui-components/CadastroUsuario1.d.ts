/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, ImageProps, PasswordFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CadastroUsuario1OverridesProps = {
    CadastroUsuario1?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Group 456"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Bem-vindo!"?: PrimitiveOverrideProps<TextProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Pronto?: PrimitiveOverrideProps<TextProps>;
    "Crie sua conta"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 10038512153"?: PrimitiveOverrideProps<IconProps>;
    "Que bom que voc\u00EA quer Se juntar a n\u00F3s"?: PrimitiveOverrideProps<TextProps>;
    Button38545543?: PrimitiveOverrideProps<ButtonProps>;
    "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"?: PrimitiveOverrideProps<ImageProps>;
    TextField38545488?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38545514?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField38545489?: PrimitiveOverrideProps<PasswordFieldProps>;
    PasswordField38545521?: PrimitiveOverrideProps<PasswordFieldProps>;
    Button38545552?: PrimitiveOverrideProps<ButtonProps>;
    "Group 487"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 10038512154"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 10038911649"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CadastroUsuario1Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: CadastroUsuario1OverridesProps | undefined | null;
}>;
export default function CadastroUsuario1(props: CadastroUsuario1Props): React.ReactElement;
