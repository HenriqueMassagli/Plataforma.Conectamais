/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, CheckboxFieldProps, FlexProps, ImageProps, PhoneNumberFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CadastroEmpresasOverridesProps = {
    CadastroEmpresas?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Conecte-se aos melhores talentos neurodiversos e fortale\u00E7a sua marca empregadora."?: PrimitiveOverrideProps<TextProps>;
    "Group 475"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Pronto?: PrimitiveOverrideProps<TextProps>;
    "Cadastre sua Empresa"?: PrimitiveOverrideProps<TextProps>;
    TextField38512053?: PrimitiveOverrideProps<FlexProps>;
    TextField38572442?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38572462?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38572586?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38572628?: PrimitiveOverrideProps<TextFieldProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Button38572644?: PrimitiveOverrideProps<ButtonProps>;
    Button3872877?: PrimitiveOverrideProps<ButtonProps>;
    "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview38512063"?: PrimitiveOverrideProps<ViewProps>;
    "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview38512064"?: PrimitiveOverrideProps<ImageProps>;
    TextField38761491?: PrimitiveOverrideProps<TextFieldProps>;
    PhoneNumberField?: PrimitiveOverrideProps<PhoneNumberFieldProps>;
    TextField38761525?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CadastroEmpresasProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: CadastroEmpresasOverridesProps | undefined | null;
}>;
export default function CadastroEmpresas(props: CadastroEmpresasProps): React.ReactElement;
