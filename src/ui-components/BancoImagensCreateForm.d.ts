/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BancoImagensCreateFormInputValues = {
    EmpresaExemplo?: string;
    ImagemDeFundo?: string;
    LogoBrancaConecta?: string;
    LogoFundoBrancoConecta?: string;
    LogoAzulConecta?: string;
    PerfilFotoExemploReal?: string;
    InteligenciaArtificial?: string;
    LogoPretaConecta?: string;
    Background2?: string;
    JoiaSenha?: string;
    ChavesSenha?: string;
    PerfilSemFoto?: string;
    GoogleLogo?: string;
    FacebookLogo?: string;
    JoiaTelefone?: string;
    PerfilAvatar?: string;
    Post1?: string;
    Post2?: string;
    Post3?: string;
    Post4?: string;
    Post5?: string;
    MonicaIPerfil?: string;
};
export declare type BancoImagensCreateFormValidationValues = {
    EmpresaExemplo?: ValidationFunction<string>;
    ImagemDeFundo?: ValidationFunction<string>;
    LogoBrancaConecta?: ValidationFunction<string>;
    LogoFundoBrancoConecta?: ValidationFunction<string>;
    LogoAzulConecta?: ValidationFunction<string>;
    PerfilFotoExemploReal?: ValidationFunction<string>;
    InteligenciaArtificial?: ValidationFunction<string>;
    LogoPretaConecta?: ValidationFunction<string>;
    Background2?: ValidationFunction<string>;
    JoiaSenha?: ValidationFunction<string>;
    ChavesSenha?: ValidationFunction<string>;
    PerfilSemFoto?: ValidationFunction<string>;
    GoogleLogo?: ValidationFunction<string>;
    FacebookLogo?: ValidationFunction<string>;
    JoiaTelefone?: ValidationFunction<string>;
    PerfilAvatar?: ValidationFunction<string>;
    Post1?: ValidationFunction<string>;
    Post2?: ValidationFunction<string>;
    Post3?: ValidationFunction<string>;
    Post4?: ValidationFunction<string>;
    Post5?: ValidationFunction<string>;
    MonicaIPerfil?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BancoImagensCreateFormOverridesProps = {
    BancoImagensCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    EmpresaExemplo?: PrimitiveOverrideProps<TextFieldProps>;
    ImagemDeFundo?: PrimitiveOverrideProps<TextFieldProps>;
    LogoBrancaConecta?: PrimitiveOverrideProps<TextFieldProps>;
    LogoFundoBrancoConecta?: PrimitiveOverrideProps<TextFieldProps>;
    LogoAzulConecta?: PrimitiveOverrideProps<TextFieldProps>;
    PerfilFotoExemploReal?: PrimitiveOverrideProps<TextFieldProps>;
    InteligenciaArtificial?: PrimitiveOverrideProps<TextFieldProps>;
    LogoPretaConecta?: PrimitiveOverrideProps<TextFieldProps>;
    Background2?: PrimitiveOverrideProps<TextFieldProps>;
    JoiaSenha?: PrimitiveOverrideProps<TextFieldProps>;
    ChavesSenha?: PrimitiveOverrideProps<TextFieldProps>;
    PerfilSemFoto?: PrimitiveOverrideProps<TextFieldProps>;
    GoogleLogo?: PrimitiveOverrideProps<TextFieldProps>;
    FacebookLogo?: PrimitiveOverrideProps<TextFieldProps>;
    JoiaTelefone?: PrimitiveOverrideProps<TextFieldProps>;
    PerfilAvatar?: PrimitiveOverrideProps<TextFieldProps>;
    Post1?: PrimitiveOverrideProps<TextFieldProps>;
    Post2?: PrimitiveOverrideProps<TextFieldProps>;
    Post3?: PrimitiveOverrideProps<TextFieldProps>;
    Post4?: PrimitiveOverrideProps<TextFieldProps>;
    Post5?: PrimitiveOverrideProps<TextFieldProps>;
    MonicaIPerfil?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BancoImagensCreateFormProps = React.PropsWithChildren<{
    overrides?: BancoImagensCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BancoImagensCreateFormInputValues) => BancoImagensCreateFormInputValues;
    onSuccess?: (fields: BancoImagensCreateFormInputValues) => void;
    onError?: (fields: BancoImagensCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BancoImagensCreateFormInputValues) => BancoImagensCreateFormInputValues;
    onValidate?: BancoImagensCreateFormValidationValues;
} & React.CSSProperties>;
export default function BancoImagensCreateForm(props: BancoImagensCreateFormProps): React.ReactElement;
