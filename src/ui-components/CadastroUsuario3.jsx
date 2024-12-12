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
  SelectField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function CadastroUsuario3(props) {
  const { bancoImagens, overrides, ...rest } = props;
  const navigate = useNavigate();
  const negativa = ["não"];
  const nivel = ["nível 2"];
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
      {...getOverrideProps(overrides, "CadastroUsuario3")}
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
        left="-0.26%"
        right="0.26%"
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
        width="514px"
        height="44px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="17.64%"
        bottom="78.42%"
        left="33.11%"
        right="33.05%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Algumas perguntas"
        {...getOverrideProps(overrides, "Algumas perguntas")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="541.44px"
        height="789px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="26.68%"
        bottom="2.69%"
        left="32.19%"
        right="32.16%"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <View
          width="541.44px"
          height="789px"
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
        <View
          width="512px"
          height="156px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="14.83%"
          bottom="65.4%"
          left="2.03%"
          right="3.41%"
          borderRadius="15px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(161,161,161,1)"
          opacity="0.20000000298023224"
          {...getOverrideProps(overrides, "Rectangle 201")}
        ></View>
        <Text
          fontSize="13px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="19.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="484px"
          height="134px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="16.6%"
          bottom="66.41%"
          left="4.8%"
          right="5.81%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Privacidade dos Dados&#xA;&#x2028;Todos os arquivos e informações fornecidos por você serão estritamente privados e usados apenas para melhorar sua experiência na plataforma. Seus dados não serão compartilhados com terceiros. Para mais informações, entre em contato com nossa equipe de suporte."
          {...getOverrideProps(
            overrides,
            "Privacidade dos Dados \u2028Todos os arquivos e informa\u00E7\u00F5es fornecidos por voc\u00EA ser\u00E3o estritamente privados e usados apenas para melhorar sua experi\u00EAncia na plataforma. Seus dados n\u00E3o ser\u00E3o compartilhados com terceiros. Para mais informa\u00E7\u00F5es, entre em contato com nossa equipe de suporte."
          )}
        ></Text>
        <Text
          fontSize="32px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="48px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="221px"
          height="56px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 28px - 311.5px)"
          left="calc(50% - 110.5px - 0.22px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Questionário"
          {...getOverrideProps(overrides, "Question\u00E1rio")}
        ></Text>
        <Icon
          width="14.87px"
          height="18.09px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.87465763092041,
            height: 18.085960388183594,
          }}
          paths={[
            {
              d: "M14.8747 9.04298C14.8747 14.0373 11.5449 18.086 7.43733 18.086C3.32981 18.086 0 14.0373 0 9.04298C0 4.04868 3.32981 0 7.43733 0C11.5449 0 14.8747 4.04868 14.8747 9.04298Z",
              fill: "rgba(253,157,72,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3.91%"
          bottom="93.79%"
          left="41%"
          right="56.25%"
          {...getOverrideProps(overrides, "Ellipse 108")}
        ></Icon>
        <Icon
          width="14.87px"
          height="18.09px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.87465763092041,
            height: 18.085960388183594,
          }}
          paths={[
            {
              d: "M14.8747 9.04298C14.8747 14.0373 11.5449 18.086 7.43733 18.086C3.32981 18.086 0 14.0373 0 9.04298C0 4.04868 3.32981 0 7.43733 0C11.5449 0 14.8747 4.04868 14.8747 9.04298Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3.91%"
          bottom="93.79%"
          left="48.76%"
          right="48.49%"
          {...getOverrideProps(overrides, "Ellipse 109")}
        ></Icon>
        <Icon
          width="14.87px"
          height="18.09px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.87465763092041,
            height: 18.085960388183594,
          }}
          paths={[
            {
              d: "M14.8747 9.04298C14.8747 14.0373 11.5449 18.086 7.43733 18.086C3.32981 18.086 0 14.0373 0 9.04298C0 4.04868 3.32981 0 7.43733 0C11.5449 0 14.8747 4.04868 14.8747 9.04298Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3.91%"
          bottom="93.79%"
          left="56.52%"
          right="40.74%"
          {...getOverrideProps(overrides, "Ellipse 110")}
        ></Icon>
        <Button
          width="102px"
          height="unset"
          position="absolute"
          top="711px"
          left="103px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Voltar"
          onClick={() => navigate("/CadastroUsuario2")}
          {...getOverrideProps(overrides, "Button3857382")}
        ></Button>
        <Button
          width="100px"
          height="unset"
          position="absolute"
          top="712px"
          left="331px"
          backgroundColor="rgba(234,191,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Continuar"
          onClick={() => navigate("/CadastroUsuario4")}
          {...getOverrideProps(overrides, "Button3857383")}
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
      <SelectField
        width="384px"
        height="unset"
        label="Você foi diagnosticado com Transtorno do Espectro Autista (TEA)?"
        placeholder="Sim"
        position="absolute"
        top="calc(50% - 45px - -92.5px)"
        left="37.13%"
        right="37.59%"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField3857352")}
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
        label="Em que nível do espectro autista você foi diagnosticado?"
        placeholder="Nível 1"
        position="absolute"
        top="calc(50% - 48px - -213.5px)"
        left="37.13%"
        right="37.59%"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField3857363")}
      >
        {nivel.map((nivel) => (
          <option key={nivel} value={nivel}>
            {nivel}
          </option>
        ))}
      </SelectField>
      <SelectField
        width="384px"
        height="unset"
        label="Possui alguma outra condição diagnosticada além do TEA?"
        placeholder="Sim"
        position="absolute"
        top="calc(50% - 48px - -337.5px)"
        left="37.13%"
        right="37.59%"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField3857372")}
      >
        {negativa.map((negativa) => (
          <option key={negativa} value={negativa}>
            {negativa}
          </option>
        ))}
      </SelectField>
    </View>
  );
}
