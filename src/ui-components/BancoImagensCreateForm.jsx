/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createBancoImagens } from "../graphql/mutations";
const client = generateClient();
export default function BancoImagensCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    EmpresaExemplo: "",
    ImagemDeFundo: "",
    LogoBrancaConecta: "",
    LogoFundoBrancoConecta: "",
    LogoAzulConecta: "",
    PerfilFotoExemploReal: "",
    InteligenciaArtificial: "",
    LogoPretaConecta: "",
    Background2: "",
    JoiaSenha: "",
    ChavesSenha: "",
    PerfilSemFoto: "",
    GoogleLogo: "",
    FacebookLogo: "",
    JoiaTelefone: "",
    PerfilAvatar: "",
    Post1: "",
    Post2: "",
    Post3: "",
    Post4: "",
    Post5: "",
    MonicaIPerfil: "",
  };
  const [EmpresaExemplo, setEmpresaExemplo] = React.useState(
    initialValues.EmpresaExemplo
  );
  const [ImagemDeFundo, setImagemDeFundo] = React.useState(
    initialValues.ImagemDeFundo
  );
  const [LogoBrancaConecta, setLogoBrancaConecta] = React.useState(
    initialValues.LogoBrancaConecta
  );
  const [LogoFundoBrancoConecta, setLogoFundoBrancoConecta] = React.useState(
    initialValues.LogoFundoBrancoConecta
  );
  const [LogoAzulConecta, setLogoAzulConecta] = React.useState(
    initialValues.LogoAzulConecta
  );
  const [PerfilFotoExemploReal, setPerfilFotoExemploReal] = React.useState(
    initialValues.PerfilFotoExemploReal
  );
  const [InteligenciaArtificial, setInteligenciaArtificial] = React.useState(
    initialValues.InteligenciaArtificial
  );
  const [LogoPretaConecta, setLogoPretaConecta] = React.useState(
    initialValues.LogoPretaConecta
  );
  const [Background2, setBackground2] = React.useState(
    initialValues.Background2
  );
  const [JoiaSenha, setJoiaSenha] = React.useState(initialValues.JoiaSenha);
  const [ChavesSenha, setChavesSenha] = React.useState(
    initialValues.ChavesSenha
  );
  const [PerfilSemFoto, setPerfilSemFoto] = React.useState(
    initialValues.PerfilSemFoto
  );
  const [GoogleLogo, setGoogleLogo] = React.useState(initialValues.GoogleLogo);
  const [FacebookLogo, setFacebookLogo] = React.useState(
    initialValues.FacebookLogo
  );
  const [JoiaTelefone, setJoiaTelefone] = React.useState(
    initialValues.JoiaTelefone
  );
  const [PerfilAvatar, setPerfilAvatar] = React.useState(
    initialValues.PerfilAvatar
  );
  const [Post1, setPost1] = React.useState(initialValues.Post1);
  const [Post2, setPost2] = React.useState(initialValues.Post2);
  const [Post3, setPost3] = React.useState(initialValues.Post3);
  const [Post4, setPost4] = React.useState(initialValues.Post4);
  const [Post5, setPost5] = React.useState(initialValues.Post5);
  const [MonicaIPerfil, setMonicaIPerfil] = React.useState(
    initialValues.MonicaIPerfil
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEmpresaExemplo(initialValues.EmpresaExemplo);
    setImagemDeFundo(initialValues.ImagemDeFundo);
    setLogoBrancaConecta(initialValues.LogoBrancaConecta);
    setLogoFundoBrancoConecta(initialValues.LogoFundoBrancoConecta);
    setLogoAzulConecta(initialValues.LogoAzulConecta);
    setPerfilFotoExemploReal(initialValues.PerfilFotoExemploReal);
    setInteligenciaArtificial(initialValues.InteligenciaArtificial);
    setLogoPretaConecta(initialValues.LogoPretaConecta);
    setBackground2(initialValues.Background2);
    setJoiaSenha(initialValues.JoiaSenha);
    setChavesSenha(initialValues.ChavesSenha);
    setPerfilSemFoto(initialValues.PerfilSemFoto);
    setGoogleLogo(initialValues.GoogleLogo);
    setFacebookLogo(initialValues.FacebookLogo);
    setJoiaTelefone(initialValues.JoiaTelefone);
    setPerfilAvatar(initialValues.PerfilAvatar);
    setPost1(initialValues.Post1);
    setPost2(initialValues.Post2);
    setPost3(initialValues.Post3);
    setPost4(initialValues.Post4);
    setPost5(initialValues.Post5);
    setMonicaIPerfil(initialValues.MonicaIPerfil);
    setErrors({});
  };
  const validations = {
    EmpresaExemplo: [{ type: "URL" }],
    ImagemDeFundo: [{ type: "URL" }],
    LogoBrancaConecta: [{ type: "URL" }],
    LogoFundoBrancoConecta: [{ type: "URL" }],
    LogoAzulConecta: [{ type: "URL" }],
    PerfilFotoExemploReal: [{ type: "URL" }],
    InteligenciaArtificial: [{ type: "URL" }],
    LogoPretaConecta: [{ type: "URL" }],
    Background2: [{ type: "URL" }],
    JoiaSenha: [{ type: "URL" }],
    ChavesSenha: [{ type: "URL" }],
    PerfilSemFoto: [{ type: "URL" }],
    GoogleLogo: [{ type: "URL" }],
    FacebookLogo: [{ type: "URL" }],
    JoiaTelefone: [{ type: "URL" }],
    PerfilAvatar: [{ type: "URL" }],
    Post1: [{ type: "URL" }],
    Post2: [{ type: "URL" }],
    Post3: [{ type: "URL" }],
    Post4: [{ type: "URL" }],
    Post5: [{ type: "URL" }],
    MonicaIPerfil: [{ type: "URL" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          EmpresaExemplo,
          ImagemDeFundo,
          LogoBrancaConecta,
          LogoFundoBrancoConecta,
          LogoAzulConecta,
          PerfilFotoExemploReal,
          InteligenciaArtificial,
          LogoPretaConecta,
          Background2,
          JoiaSenha,
          ChavesSenha,
          PerfilSemFoto,
          GoogleLogo,
          FacebookLogo,
          JoiaTelefone,
          PerfilAvatar,
          Post1,
          Post2,
          Post3,
          Post4,
          Post5,
          MonicaIPerfil,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createBancoImagens.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BancoImagensCreateForm")}
      {...rest}
    >
      <TextField
        label="Empresa exemplo"
        isRequired={false}
        isReadOnly={false}
        value={EmpresaExemplo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo: value,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.EmpresaExemplo ?? value;
          }
          if (errors.EmpresaExemplo?.hasError) {
            runValidationTasks("EmpresaExemplo", value);
          }
          setEmpresaExemplo(value);
        }}
        onBlur={() => runValidationTasks("EmpresaExemplo", EmpresaExemplo)}
        errorMessage={errors.EmpresaExemplo?.errorMessage}
        hasError={errors.EmpresaExemplo?.hasError}
        {...getOverrideProps(overrides, "EmpresaExemplo")}
      ></TextField>
      <TextField
        label="Imagem de fundo"
        isRequired={false}
        isReadOnly={false}
        value={ImagemDeFundo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo: value,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.ImagemDeFundo ?? value;
          }
          if (errors.ImagemDeFundo?.hasError) {
            runValidationTasks("ImagemDeFundo", value);
          }
          setImagemDeFundo(value);
        }}
        onBlur={() => runValidationTasks("ImagemDeFundo", ImagemDeFundo)}
        errorMessage={errors.ImagemDeFundo?.errorMessage}
        hasError={errors.ImagemDeFundo?.hasError}
        {...getOverrideProps(overrides, "ImagemDeFundo")}
      ></TextField>
      <TextField
        label="Logo branca conecta"
        isRequired={false}
        isReadOnly={false}
        value={LogoBrancaConecta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta: value,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.LogoBrancaConecta ?? value;
          }
          if (errors.LogoBrancaConecta?.hasError) {
            runValidationTasks("LogoBrancaConecta", value);
          }
          setLogoBrancaConecta(value);
        }}
        onBlur={() =>
          runValidationTasks("LogoBrancaConecta", LogoBrancaConecta)
        }
        errorMessage={errors.LogoBrancaConecta?.errorMessage}
        hasError={errors.LogoBrancaConecta?.hasError}
        {...getOverrideProps(overrides, "LogoBrancaConecta")}
      ></TextField>
      <TextField
        label="Logo fundo branco conecta"
        isRequired={false}
        isReadOnly={false}
        value={LogoFundoBrancoConecta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta: value,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.LogoFundoBrancoConecta ?? value;
          }
          if (errors.LogoFundoBrancoConecta?.hasError) {
            runValidationTasks("LogoFundoBrancoConecta", value);
          }
          setLogoFundoBrancoConecta(value);
        }}
        onBlur={() =>
          runValidationTasks("LogoFundoBrancoConecta", LogoFundoBrancoConecta)
        }
        errorMessage={errors.LogoFundoBrancoConecta?.errorMessage}
        hasError={errors.LogoFundoBrancoConecta?.hasError}
        {...getOverrideProps(overrides, "LogoFundoBrancoConecta")}
      ></TextField>
      <TextField
        label="Logo azul conecta"
        isRequired={false}
        isReadOnly={false}
        value={LogoAzulConecta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta: value,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.LogoAzulConecta ?? value;
          }
          if (errors.LogoAzulConecta?.hasError) {
            runValidationTasks("LogoAzulConecta", value);
          }
          setLogoAzulConecta(value);
        }}
        onBlur={() => runValidationTasks("LogoAzulConecta", LogoAzulConecta)}
        errorMessage={errors.LogoAzulConecta?.errorMessage}
        hasError={errors.LogoAzulConecta?.hasError}
        {...getOverrideProps(overrides, "LogoAzulConecta")}
      ></TextField>
      <TextField
        label="Perfil foto exemplo real"
        isRequired={false}
        isReadOnly={false}
        value={PerfilFotoExemploReal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal: value,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.PerfilFotoExemploReal ?? value;
          }
          if (errors.PerfilFotoExemploReal?.hasError) {
            runValidationTasks("PerfilFotoExemploReal", value);
          }
          setPerfilFotoExemploReal(value);
        }}
        onBlur={() =>
          runValidationTasks("PerfilFotoExemploReal", PerfilFotoExemploReal)
        }
        errorMessage={errors.PerfilFotoExemploReal?.errorMessage}
        hasError={errors.PerfilFotoExemploReal?.hasError}
        {...getOverrideProps(overrides, "PerfilFotoExemploReal")}
      ></TextField>
      <TextField
        label="Inteligencia artificial"
        isRequired={false}
        isReadOnly={false}
        value={InteligenciaArtificial}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial: value,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.InteligenciaArtificial ?? value;
          }
          if (errors.InteligenciaArtificial?.hasError) {
            runValidationTasks("InteligenciaArtificial", value);
          }
          setInteligenciaArtificial(value);
        }}
        onBlur={() =>
          runValidationTasks("InteligenciaArtificial", InteligenciaArtificial)
        }
        errorMessage={errors.InteligenciaArtificial?.errorMessage}
        hasError={errors.InteligenciaArtificial?.hasError}
        {...getOverrideProps(overrides, "InteligenciaArtificial")}
      ></TextField>
      <TextField
        label="Logo preta conecta"
        isRequired={false}
        isReadOnly={false}
        value={LogoPretaConecta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta: value,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.LogoPretaConecta ?? value;
          }
          if (errors.LogoPretaConecta?.hasError) {
            runValidationTasks("LogoPretaConecta", value);
          }
          setLogoPretaConecta(value);
        }}
        onBlur={() => runValidationTasks("LogoPretaConecta", LogoPretaConecta)}
        errorMessage={errors.LogoPretaConecta?.errorMessage}
        hasError={errors.LogoPretaConecta?.hasError}
        {...getOverrideProps(overrides, "LogoPretaConecta")}
      ></TextField>
      <TextField
        label="Background2"
        isRequired={false}
        isReadOnly={false}
        value={Background2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2: value,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.Background2 ?? value;
          }
          if (errors.Background2?.hasError) {
            runValidationTasks("Background2", value);
          }
          setBackground2(value);
        }}
        onBlur={() => runValidationTasks("Background2", Background2)}
        errorMessage={errors.Background2?.errorMessage}
        hasError={errors.Background2?.hasError}
        {...getOverrideProps(overrides, "Background2")}
      ></TextField>
      <TextField
        label="Joia senha"
        isRequired={false}
        isReadOnly={false}
        value={JoiaSenha}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha: value,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.JoiaSenha ?? value;
          }
          if (errors.JoiaSenha?.hasError) {
            runValidationTasks("JoiaSenha", value);
          }
          setJoiaSenha(value);
        }}
        onBlur={() => runValidationTasks("JoiaSenha", JoiaSenha)}
        errorMessage={errors.JoiaSenha?.errorMessage}
        hasError={errors.JoiaSenha?.hasError}
        {...getOverrideProps(overrides, "JoiaSenha")}
      ></TextField>
      <TextField
        label="Chaves senha"
        isRequired={false}
        isReadOnly={false}
        value={ChavesSenha}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha: value,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.ChavesSenha ?? value;
          }
          if (errors.ChavesSenha?.hasError) {
            runValidationTasks("ChavesSenha", value);
          }
          setChavesSenha(value);
        }}
        onBlur={() => runValidationTasks("ChavesSenha", ChavesSenha)}
        errorMessage={errors.ChavesSenha?.errorMessage}
        hasError={errors.ChavesSenha?.hasError}
        {...getOverrideProps(overrides, "ChavesSenha")}
      ></TextField>
      <TextField
        label="Perfil sem foto"
        isRequired={false}
        isReadOnly={false}
        value={PerfilSemFoto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto: value,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.PerfilSemFoto ?? value;
          }
          if (errors.PerfilSemFoto?.hasError) {
            runValidationTasks("PerfilSemFoto", value);
          }
          setPerfilSemFoto(value);
        }}
        onBlur={() => runValidationTasks("PerfilSemFoto", PerfilSemFoto)}
        errorMessage={errors.PerfilSemFoto?.errorMessage}
        hasError={errors.PerfilSemFoto?.hasError}
        {...getOverrideProps(overrides, "PerfilSemFoto")}
      ></TextField>
      <TextField
        label="Google logo"
        isRequired={false}
        isReadOnly={false}
        value={GoogleLogo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo: value,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.GoogleLogo ?? value;
          }
          if (errors.GoogleLogo?.hasError) {
            runValidationTasks("GoogleLogo", value);
          }
          setGoogleLogo(value);
        }}
        onBlur={() => runValidationTasks("GoogleLogo", GoogleLogo)}
        errorMessage={errors.GoogleLogo?.errorMessage}
        hasError={errors.GoogleLogo?.hasError}
        {...getOverrideProps(overrides, "GoogleLogo")}
      ></TextField>
      <TextField
        label="Facebook logo"
        isRequired={false}
        isReadOnly={false}
        value={FacebookLogo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo: value,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.FacebookLogo ?? value;
          }
          if (errors.FacebookLogo?.hasError) {
            runValidationTasks("FacebookLogo", value);
          }
          setFacebookLogo(value);
        }}
        onBlur={() => runValidationTasks("FacebookLogo", FacebookLogo)}
        errorMessage={errors.FacebookLogo?.errorMessage}
        hasError={errors.FacebookLogo?.hasError}
        {...getOverrideProps(overrides, "FacebookLogo")}
      ></TextField>
      <TextField
        label="Joia telefone"
        isRequired={false}
        isReadOnly={false}
        value={JoiaTelefone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone: value,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.JoiaTelefone ?? value;
          }
          if (errors.JoiaTelefone?.hasError) {
            runValidationTasks("JoiaTelefone", value);
          }
          setJoiaTelefone(value);
        }}
        onBlur={() => runValidationTasks("JoiaTelefone", JoiaTelefone)}
        errorMessage={errors.JoiaTelefone?.errorMessage}
        hasError={errors.JoiaTelefone?.hasError}
        {...getOverrideProps(overrides, "JoiaTelefone")}
      ></TextField>
      <TextField
        label="Perfil avatar"
        isRequired={false}
        isReadOnly={false}
        value={PerfilAvatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar: value,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.PerfilAvatar ?? value;
          }
          if (errors.PerfilAvatar?.hasError) {
            runValidationTasks("PerfilAvatar", value);
          }
          setPerfilAvatar(value);
        }}
        onBlur={() => runValidationTasks("PerfilAvatar", PerfilAvatar)}
        errorMessage={errors.PerfilAvatar?.errorMessage}
        hasError={errors.PerfilAvatar?.hasError}
        {...getOverrideProps(overrides, "PerfilAvatar")}
      ></TextField>
      <TextField
        label="Post1"
        isRequired={false}
        isReadOnly={false}
        value={Post1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1: value,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.Post1 ?? value;
          }
          if (errors.Post1?.hasError) {
            runValidationTasks("Post1", value);
          }
          setPost1(value);
        }}
        onBlur={() => runValidationTasks("Post1", Post1)}
        errorMessage={errors.Post1?.errorMessage}
        hasError={errors.Post1?.hasError}
        {...getOverrideProps(overrides, "Post1")}
      ></TextField>
      <TextField
        label="Post2"
        isRequired={false}
        isReadOnly={false}
        value={Post2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2: value,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.Post2 ?? value;
          }
          if (errors.Post2?.hasError) {
            runValidationTasks("Post2", value);
          }
          setPost2(value);
        }}
        onBlur={() => runValidationTasks("Post2", Post2)}
        errorMessage={errors.Post2?.errorMessage}
        hasError={errors.Post2?.hasError}
        {...getOverrideProps(overrides, "Post2")}
      ></TextField>
      <TextField
        label="Post3"
        isRequired={false}
        isReadOnly={false}
        value={Post3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3: value,
              Post4,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.Post3 ?? value;
          }
          if (errors.Post3?.hasError) {
            runValidationTasks("Post3", value);
          }
          setPost3(value);
        }}
        onBlur={() => runValidationTasks("Post3", Post3)}
        errorMessage={errors.Post3?.errorMessage}
        hasError={errors.Post3?.hasError}
        {...getOverrideProps(overrides, "Post3")}
      ></TextField>
      <TextField
        label="Post4"
        isRequired={false}
        isReadOnly={false}
        value={Post4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4: value,
              Post5,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.Post4 ?? value;
          }
          if (errors.Post4?.hasError) {
            runValidationTasks("Post4", value);
          }
          setPost4(value);
        }}
        onBlur={() => runValidationTasks("Post4", Post4)}
        errorMessage={errors.Post4?.errorMessage}
        hasError={errors.Post4?.hasError}
        {...getOverrideProps(overrides, "Post4")}
      ></TextField>
      <TextField
        label="Post5"
        isRequired={false}
        isReadOnly={false}
        value={Post5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5: value,
              MonicaIPerfil,
            };
            const result = onChange(modelFields);
            value = result?.Post5 ?? value;
          }
          if (errors.Post5?.hasError) {
            runValidationTasks("Post5", value);
          }
          setPost5(value);
        }}
        onBlur={() => runValidationTasks("Post5", Post5)}
        errorMessage={errors.Post5?.errorMessage}
        hasError={errors.Post5?.hasError}
        {...getOverrideProps(overrides, "Post5")}
      ></TextField>
      <TextField
        label="Monica i perfil"
        isRequired={false}
        isReadOnly={false}
        value={MonicaIPerfil}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EmpresaExemplo,
              ImagemDeFundo,
              LogoBrancaConecta,
              LogoFundoBrancoConecta,
              LogoAzulConecta,
              PerfilFotoExemploReal,
              InteligenciaArtificial,
              LogoPretaConecta,
              Background2,
              JoiaSenha,
              ChavesSenha,
              PerfilSemFoto,
              GoogleLogo,
              FacebookLogo,
              JoiaTelefone,
              PerfilAvatar,
              Post1,
              Post2,
              Post3,
              Post4,
              Post5,
              MonicaIPerfil: value,
            };
            const result = onChange(modelFields);
            value = result?.MonicaIPerfil ?? value;
          }
          if (errors.MonicaIPerfil?.hasError) {
            runValidationTasks("MonicaIPerfil", value);
          }
          setMonicaIPerfil(value);
        }}
        onBlur={() => runValidationTasks("MonicaIPerfil", MonicaIPerfil)}
        errorMessage={errors.MonicaIPerfil?.errorMessage}
        hasError={errors.MonicaIPerfil?.hasError}
        {...getOverrideProps(overrides, "MonicaIPerfil")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
