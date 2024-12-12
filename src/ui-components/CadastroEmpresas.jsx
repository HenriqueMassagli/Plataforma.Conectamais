/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { getOverrideProps } from "./utils";
import {
  Button,
  CheckboxField,
  Flex,
  Image,
  PhoneNumberField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CadastroEmpresas(props) {
  const { bancoImagens, overrides, ...rest } = props;
  const navigate = useNavigate();
  return (
    <View
      width="100vw"
      height="1118.47px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CadastroEmpresas")}
      {...rest}
    >
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/BackgroundConecta.jpg?raw=true"
        width="100vw"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0.13%"
        left="-0.26%"
        right="0.26%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Fundo Novo")}
      ></Image>
      <View
        width="100px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="659px"
        left="1056px"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 7")}
      ></View>
      <Text
        fontSize="34px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="75px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="454px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 150px - -58.76px)"
        left="calc(50% - 227px - 270.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Conecte-se aos melhores talentos neurodiversos e fortaleça sua marca empregadora."
        {...getOverrideProps(
          overrides,
          "Conecte-se aos melhores talentos neurodiversos e fortale\u00E7a sua marca empregadora."
        )}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="615px"
        height="830px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="173px"
        left="748px"
        {...getOverrideProps(overrides, "Group 475")}
      >
        <View
          width="602px"
          height="830px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="13px"
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
          width="37.27px"
          height="12.53px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="634.19px"
          left="370.12px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Pronto"
          {...getOverrideProps(overrides, "Pronto")}
        ></Text>
        <Text
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="285.19px"
          height="24.23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 12.12px - 367.25px)"
          left="calc(50% - 142.59px - -12.09px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cadastre sua Empresa"
          {...getOverrideProps(overrides, "Cadastre sua Empresa")}
        ></Text>
        <Flex
          width="398.74px"
          height="38.44px"
          {...getOverrideProps(overrides, "TextField38512053")}
        ></Flex>
        <TextField
          width="300px"
          height="40px"
          label="Nome da Empresa"
          placeholder="Nome da Empresa"
          position="absolute"
          top="100px"
          left="170px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField38572442")}
        ></TextField>
        <TextField
          width="300px"
          height="40px"
          label="Nome completo"
          placeholder="Nome Completo do Contato"
          position="absolute"
          top="180px"
          left="170px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField38572462")}
        ></TextField>
        <TextField
          width="300px"
          height="40px"
          label="Cargo"
          placeholder="Cargo"
          position="absolute"
          top="264px"
          left="170px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField38572586")}
        ></TextField>
        <TextField
          width="300px"
          height="40px"
          label="Email"
          placeholder="Email"
          position="absolute"
          top="344px"
          left="170px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField38572628")}
        ></TextField>
        <CheckboxField
          width="602px"
          height="unset"
          label="Li e aceito as Condições Legais e a Política de Privacidade "
          position="absolute"
          top="calc(50% - 10.5px - -283.5px)"
          left="calc(50% - 301px - 6.5px)"
          size="large"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "CheckboxField")}
        ></CheckboxField>
        <Button
          width="102px"
          height="unset"
          position="absolute"
          top="751px"
          left="118px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Voltar"
          onClick={() => navigate("/EscolhaDeConta")}
          {...getOverrideProps(overrides, "Button38572644")}
        ></Button>
        <Button
          width="100px"
          height="unset"
          position="absolute"
          top="752px"
          left="428px"
          backgroundColor="rgba(0,0,0,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Continuar"
          onClick={() => navigate("/Home")}
          {...getOverrideProps(overrides, "Button3872877")}
        ></Button>
      </View>
      <View
        width="310px"
        height="150px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24.32%"
        bottom="62.27%"
        left="21.99%"
        right="57.6%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview38512063"
        )}
      ></View>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/LogoPretaConecta.png?raw=true"
        width="20.41%"
        height="13.41%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="29.24%"
        bottom="57.35%"
        left="21.99%"
        right="57.6%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview38512064"
        )}
      ></Image>
      <TextField
        width="300px"
        height="40px"
        label="Email"
        placeholder="CNPJ"
        position="absolute"
        top="597px"
        left="918px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField38761491")}
      ></TextField>
      <PhoneNumberField
        width="300px"
        height="unset"
        label="Telefone"
        placeholder="Telefone"
        position="absolute"
        top="677px"
        left="918px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "PhoneNumberField")}
      ></PhoneNumberField>
      <TextField
        width="300px"
        height="40px"
        label="Email"
        placeholder="Quantidade de funcionários"
        position="absolute"
        top="757px"
        left="918px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField38761525")}
      ></TextField>
    </View>
  );
}
