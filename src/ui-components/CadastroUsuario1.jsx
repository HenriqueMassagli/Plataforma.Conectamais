/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Icon,
  Image,
  PasswordField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CadastroUsuario1(props) {
  const { bancoImagens, overrides, ...rest } = props;
  const navigate = useNavigate();
  return (
    <View
      width="100vw"
      height="1117px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CadastroUsuario1")}
      {...rest}
    >
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/BackgroundConecta.jpg?raw=true"
        width="100vw"
        height="1117px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="-4px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Fundo Novo")}
      ></Image>

      <View
        padding="0px 0px 0px 0px"
        width="1070.41px"
        height="671.92px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="19.96%"
        bottom="19.88%"
        left="17.58%"
        right="11.95%"
        {...getOverrideProps(overrides, "Group 456")}
      >
        <View
          width="82.12px"
          height="33.6px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="56.75%"
          bottom="38.25%"
          left="60.72%"
          right="31.61%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 7")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="446.18px"
          height="58.17px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="44.05%"
          bottom="47.29%"
          left="calc(50% - 223.09px - 312.11px)"
          {...getOverrideProps(overrides, "Group 6")}
        >
          <Text
            fontSize="44px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="53.6359977722168px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="446.18px"
            height="58.17px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Bem-vindo!"
            {...getOverrideProps(overrides, "Bem-vindo!")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="567.3px"
          height="671.92px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="47%"
          right="0%"
          {...getOverrideProps(overrides, "Group 4")}
        >
          <View
            width="567.3px"
            height="671.92px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            borderRadius="12px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 1")}
          ></View>
          <Text
            fontSize="12px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="14.628000259399414px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="26.46px"
            height="10.86px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="72.52%"
            bottom="25.86%"
            left="53.33%"
            right="42.01%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pronto"
            {...getOverrideProps(overrides, "Pronto")}
          ></Text>
          <Text
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="169px"
            height="19px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="calc(50% - 9.5px - 250.46px)"
            left="calc(50% - 84.5px - 0.26px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Crie sua conta "
            {...getOverrideProps(overrides, "Crie sua conta")}
          ></Text>
        </View>
        <Icon
          width="13.96px"
          height="14.28px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.960917472839355,
            height: 14.278229713439941,
          }}
          paths={[
            {
              d: "M13.9609 7.13911C13.9609 11.0819 10.8357 14.2782 6.98046 14.2782C3.12526 14.2782 0 11.0819 0 7.13911C0 3.19629 3.12526 0 6.98046 0C10.8357 0 13.9609 3.19629 13.9609 7.13911Z",
              fill: "rgba(255,255,255,0.9)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.13%"
          bottom="93.75%"
          left="71.92%"
          right="26.78%"
          {...getOverrideProps(overrides, "Ellipse 10038512153")}
        ></Icon>
        <Text
          fontSize="34px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="41.44599914550781px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="360px"
          height="91px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 45.5px - -98.54px)"
          left="calc(50% - 180px - 311.2px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Que bom que você quer Se juntar a nós "
          {...getOverrideProps(
            overrides,
            "Que bom que voc\u00EA quer Se juntar a n\u00F3s"
          )}
        ></Text>
        <Button
          width="102px"
          height="unset"
          position="absolute"
          top="588px"
          left="578px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Voltar"
          onClick={() => navigate("/TelaDeLogin")}
          {...getOverrideProps(overrides, "Button38545543")}
        ></Button>
      </View>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/LogoPretaConecta.png?raw=true"
        width="20.41%"
        height="13.43%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="28.47%"
        bottom="58.1%"
        left="22.12%"
        right="57.47%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"
        )}
      ></Image>
      <TextField
        width="416px"
        height="72px"
        label="Nome completo"
        placeholder="Insira seu nome completo"
        position="absolute"
        top="371px"
        left="846px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField38545488")}
      ></TextField>
      <TextField
        width="416px"
        height="72px"
        label="Email"
        placeholder="Insira seu email"
        position="absolute"
        top="468px"
        left="846px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField38545514")}
      ></TextField>
      <PasswordField
        width="416px"
        height="73px"
        label="Senha"
        placeholder="Insira sua senha"
        position="absolute"
        top="662px"
        left="846px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        hideShowPassword={false}
        {...getOverrideProps(overrides, "PasswordField38545489")}
      ></PasswordField>
      <PasswordField
        width="416px"
        height="unset"
        label="CPF"
        placeholder="Insira seu CPF"
        position="absolute"
        top="565px"
        left="846px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        hideShowPassword={true}
        {...getOverrideProps(overrides, "PasswordField38545521")}
      ></PasswordField>
      <Button
        width="100px"
        height="unset"
        position="absolute"
        top="812px"
        left="1162px"
        backgroundColor="rgba(0,0,0,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Próxima"
        onClick={() => navigate("/CadastroUsuario2")}
        {...getOverrideProps(overrides, "Button38545552")}
      ></Button>
      <View
        padding="0px 0px 0px 0px"
        width="39.96px"
        height="14.28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="251px"
        left="1034px"
        {...getOverrideProps(overrides, "Group 487")}
      >
        <Icon
          width="13.96px"
          height="14.28px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.960917472839355,
            height: 14.278229713439941,
          }}
          paths={[
            {
              d: "M13.9609 7.13911C13.9609 11.0819 10.8357 14.2782 6.98046 14.2782C3.12526 14.2782 0 11.0819 0 7.13911C0 3.19629 3.12526 0 6.98046 0C10.8357 0 13.9609 3.19629 13.9609 7.13911Z",
              fill: "rgba(211,152,74,0.9)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="65.06%"
          {...getOverrideProps(overrides, "Ellipse 10038512154")}
        ></Icon>
        <Icon
          width="13.96px"
          height="14.28px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.960917472839355,
            height: 14.278229713439941,
          }}
          paths={[
            {
              d: "M13.9609 7.13911C13.9609 11.0819 10.8357 14.2782 6.98046 14.2782C3.12526 14.2782 0 11.0819 0 7.13911C0 3.19629 3.12526 0 6.98046 0C10.8357 0 13.9609 3.19629 13.9609 7.13911Z",
              fill: "rgba(216,216,216,0.9)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="65.06%"
          right="0%"
          {...getOverrideProps(overrides, "Ellipse 10038911649")}
        ></Icon>
      </View>
    </View>
  );
}
