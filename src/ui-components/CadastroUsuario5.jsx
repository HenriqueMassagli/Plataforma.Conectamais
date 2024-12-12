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
  Flex,
  Icon,
  Image,
  SelectField,
  Text,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
export default function CadastroUsuario5(props) {
  const { bancoImagens, overrides, ...rest } = props;
  const navigate = useNavigate();
  const negativa = ["não"];

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
      {...getOverrideProps(overrides, "CadastroUsuario5")}
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
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Fundo Novo")}
      ></Image>
      <Text
        fontSize="44px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="66px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="797.57px"
        height="68.61px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="240px"
        left="361px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Últimas perguntas"
        {...getOverrideProps(overrides, "\u00DAltimas perguntas")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="525.08px"
        height="662.87px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="364px"
        left="497px"
        {...getOverrideProps(overrides, "Group 476")}
      >
        <View
          width="525.08px"
          height="662.87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="12px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <Icon
          width="14.44px"
          height="14.73px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.435802459716797,
            height: 14.731194496154785,
          }}
          paths={[
            {
              d: "M14.4358 7.3656C14.4358 11.4335 11.2042 14.7312 7.2179 14.7312C3.23156 14.7312 0 11.4335 0 7.3656C0 3.29769 3.23156 0 7.2179 0C11.2042 0 14.4358 3.29769 14.4358 7.3656Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="32.33px"
          left="255.42px"
          {...getOverrideProps(overrides, "Ellipse 109")}
        ></Icon>
        <Icon
          width="14.44px"
          height="14.73px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.435802459716797,
            height: 14.731194496154785,
          }}
          paths={[
            {
              d: "M14.4358 7.3656C14.4358 11.4335 11.2042 14.7312 7.2179 14.7312C3.23156 14.7312 0 11.4335 0 7.3656C0 3.29769 3.23156 0 7.2179 0C11.2042 0 14.4358 3.29769 14.4358 7.3656Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="32px"
          left="215px"
          {...getOverrideProps(overrides, "Ellipse 108")}
        ></Icon>
        <Icon
          width="14.44px"
          height="14.73px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.435802459716797,
            height: 14.731194496154785,
          }}
          paths={[
            {
              d: "M14.4358 7.3656C14.4358 11.4335 11.2042 14.7312 7.2179 14.7312C3.23156 14.7312 0 11.4335 0 7.3656C0 3.29769 3.23156 0 7.2179 0C11.2042 0 14.4358 3.29769 14.4358 7.3656Z",
              fill: "rgba(253,157,72,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="32px"
          left="295.84px"
          {...getOverrideProps(overrides, "Ellipse 110")}
        ></Icon>
        <Flex
          width="464.26px"
          height="120.3px"
          {...getOverrideProps(overrides, "TextAreaField38512290")}
        ></Flex>
        <TextAreaField
          width="408px"
          height="unset"
          label="Há algo mais que gostaria de compartilhar para que possamos entender melhor suas necessidades?"
          placeholder="Compartilhe aqui..."
          position="absolute"
          top="395px"
          left="59px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextAreaField38572087")}
        ></TextAreaField>
      </View>
      <SelectField
        width="384px"
        height="72px"
        label="9.Sente-se confortável em um ambiente que valoriza a diversidade e inclusão?"
        placeholder="Sim"
        position="absolute"
        top="calc(50% - 36px - -1.5px)"
        left="37.39%"
        right="37.33%"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField38572060")}
      >
        {negativa.map((negativa) => (
          <option key={negativa} value={negativa}>
            {negativa}
          </option>
        ))}
      </SelectField>
      <SelectField
        width="384px"
        height="unset"
        label="10.Faz parte de algum outro grupo de diversidade?"
        placeholder="Sim"
        position="absolute"
        top="calc(50% - 34.5px - -122px)"
        left="37.39%"
        right="37.33%"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField38572061")}
      >
        {negativa.map((negativa) => (
          <option key={negativa} value={negativa}>
            {negativa}
          </option>
        ))}
      </SelectField>
      <Button
        width="102px"
        height="unset"
        position="absolute"
        top="948px"
        left="587px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Voltar"
        onClick={() => navigate("/CadastroUsuario4")}
        {...getOverrideProps(overrides, "Button38572062")}
      ></Button>
      <Button
        width="100px"
        height="unset"
        position="absolute"
        top="949px"
        left="825px"
        backgroundColor="rgba(234,191,62,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Continuar"
        onClick={() => navigate("/Home")}
        {...getOverrideProps(overrides, "Button38572063")}
      ></Button>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/LogoPretaConecta.png?raw=true"
        width="20.41%"
        height="13.43%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="4.21%"
        bottom="82.36%"
        left="39.83%"
        right="39.76%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"
        )}
      ></Image>
      <Text
        fontSize="32px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="39.007999420166016px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="340.99px"
        height="51.31px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 25.66px - 101.84px)"
        left="calc(50% - 170.5px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Questionário"
        {...getOverrideProps(overrides, "Question\u00E1rio")}
      ></Text>
    </View>
  );
}
