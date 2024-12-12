/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { useNavigate } from "react-router-dom";
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function MensagensNotificacoes(props) {
  const { bancoImagens, overrides, ...rest } = props;
  const navigate = useNavigate();
  return (
    <View
      width="100vw"
      height="1100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MensagensNotificacoes")}
      {...rest}
    >
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/BackgroundConecta.jpg?raw=true"
        width="100vw"
        height="1030px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="70px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Fundo Novo")}
      ></Image>
      <Icon
        width="186px"
        height="625px"
        viewBox={{ minX: 0, minY: 0, width: 186, height: 625 }}
        paths={[
          {
            d: "M186 0L187 0L187 -1L186 -1L186 0ZM186 625L186 626L187 626L187 625L186 625ZM30 1L186 1L186 -1L30 -1L30 1ZM185 0L185 625L187 625L187 0L185 0ZM186 624L30 624L30 626L186 626L186 624ZM1 595L1 30L-1 30L-1 595L1 595ZM30 624C13.9837 624 1 611.016 1 595L-1 595C-1 612.121 12.8792 626 30 626L30 624ZM30 -1C12.8792 -1 -1 12.8792 -1 30L1 30C1 13.9837 13.9837 1 30 1L30 -1Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 30C0 13.4314 13.4315 0 30 0L186 0L186 625L30 625C13.4315 625 0 611.569 0 595L0 30Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="308px"
        left="1333px"
        {...getOverrideProps(overrides, "Rectangle 109")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="888.58px"
        height="713px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="281px"
        left="253px"
        {...getOverrideProps(overrides, "Group 395")}
      >
        <View
          width="839px"
          height="713px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="1px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 107")}
        ></View>
        <Text
          fontSize="30px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="36.56999969482422px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="585.96px"
          height="84.9px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="32px"
          left="137px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Mateus Souza comentou a publicação de Mariana Portela: Foi fantástico!"
          {...getOverrideProps(
            overrides,
            "Mateus Souza comentou a publica\u00E7\u00E3o de Mariana Portela: Foi fant\u00E1stico!"
          )}
        ></Text>
        <Text
          fontSize="30px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="36.56999969482422px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="585.96px"
          height="84.9px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="191.23px"
          left="137.38px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Maria Silva comentou a publicação de Mariana Portela: Foi fantástico!"
          {...getOverrideProps(
            overrides,
            "Maria Silva comentou a publica\u00E7\u00E3o de Mariana Portela: Foi fant\u00E1stico!"
          )}
        ></Text>
        <Text
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="29.256000518798828px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="651px"
          height="72px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="340px"
          left="137px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="João Melo e outras pessoas adicionaram 5 comentários à publicação de Lucas"
          {...getOverrideProps(
            overrides,
            "Jo\u00E3o Melo e outras pessoas adicionaram 5 coment\u00E1rios \u00E0 publica\u00E7\u00E3o de Lucas"
          )}
        ></Text>
        <Text
          fontSize="16px"
          fontWeight="200"
          color="rgba(0,0,0,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="114.47px"
          height="36.09px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="42.91px"
          left="774.1px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="59 min"
          {...getOverrideProps(overrides, "59 min")}
        ></Text>
        <Text
          fontSize="16px"
          fontWeight="200"
          color="rgba(0,0,0,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="45.79px"
          height="22.43px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="177.51px"
          left="786.56px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="2 h"
          {...getOverrideProps(overrides, "2 h")}
        ></Text>
        <Text
          fontSize="16px"
          fontWeight="200"
          color="rgba(0,0,0,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="45.79px"
          height="22.43px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="339.68px"
          left="789.76px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="3 h"
          {...getOverrideProps(overrides, "3 h")}
        ></Text>
        <View
          width="587px"
          height="202px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="441px"
          left="122px"
          border="1px SOLID rgba(58,58,58,1)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(207,209,208,1)"
          {...getOverrideProps(overrides, "Rectangle 108")}
        ></View>
        <Text
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="473px"
          height="27px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="457px"
          left="158px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Parabéns pela sua conquista, Lucas! ❤️"
          {...getOverrideProps(
            overrides,
            "Parab\u00E9ns pela sua conquista, Lucas! \u2764\uFE0F"
          )}
        ></Text>
        <Text
          fontSize="20px"
          fontWeight="300"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="428.22px"
          height="27.31px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="657.28px"
          left="136.84px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="55 reações - 5 comentários"
          {...getOverrideProps(
            overrides,
            "55 rea\u00E7\u00F5es - 5 coment\u00E1rios"
          )}
        ></Text>
        <Text
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24.3799991607666px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="376px"
          height="98px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="525px"
          left="233px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Gente, acabei de conquistar meu primeiro emprego na New Berg, mal posso esperar pelo..."
          {...getOverrideProps(
            overrides,
            "Gente, acabei de conquistar meu primeiro emprego na New Berg, mal posso esperar pelo..."
          )}
        ></Text>
        <Icon
          width="587.63px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 587.6304931640625, height: 1 }}
          paths={[
            {
              d: "M0 0L587.63 0L587.63 -1L0 -1L0 0Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="508.15px"
          left="121.3px"
          {...getOverrideProps(overrides, "Line 21")}
        ></Icon>
        <Icon
          width="839.27px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 839.2733154296875, height: 1 }}
          paths={[
            {
              d: "M0 0L839.273 0L839.273 -1L0 -1L0 0Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="153.93px"
          left="0.63px"
          {...getOverrideProps(overrides, "Line 22")}
        ></Icon>
        <Icon
          width="839.27px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 839.2733154296875, height: 1 }}
          paths={[
            {
              d: "M0 0L839.273 0L839.273 -1L0 -1L0 0Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="312.14px"
          left="0px"
          {...getOverrideProps(overrides, "Line 23")}
        ></Icon>
      </View>
      <Text
        fontFamily="Poppins"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="135px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="342px"
        left="1373px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Conversas"
        {...getOverrideProps(overrides, "Conversas")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="157px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="531px"
        left="1362px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Você ainda não tem mensagens :(&#x2028;&#x2028;"
        {...getOverrideProps(
          overrides,
          "Voc\u00EA ainda n\u00E3o tem mensagens :(\u2028\u2028"
        )}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="1518px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="-1px"
        {...getOverrideProps(overrides, "NavHeader")}
      >
        <View
          width="100vw"
          height="70px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(15,45,57,1)"
          {...getOverrideProps(overrides, "Rectangle 206")}
        ></View>
        <Button
          width="155.2px"
          height="33px"
          position="absolute"
          border="1px SOLID rgba(255,255,255,1)"
          top="24px"
          left="1326.75px"
          backgroundColor="rgba(0,0,0,0)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Cadastrar-se"
          {...getOverrideProps(overrides, "Button39012867")}
        ></Button>
        <Image
          src="https://raw.githubusercontent.com/Projeto-PROA-Conecta/imagens/9d4199ac05a2459b18928e253bab87cfaa3f1082/LogoBrancaConecta.svg"
          width="182.24px"
          height="37px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="27px"
          left="37.05px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "logo_branca_conecta 2")}
        ></Image>
        <Button
          width="65.09px"
          height="unset"
          position="absolute"
          top="22px"
          left="302.4px"
          backgroundColor="rgba(0,0,0,0)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Home"
          {...getOverrideProps(overrides, "Button39012869")}
        ></Button>
        <Button
          width="61.08px"
          height="unset"
          position="absolute"
          top="22px"
          left="721.95px"
          backgroundColor="rgba(0,0,0,0)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Comunidade"
          {...getOverrideProps(overrides, "Button39012870")}
        ></Button>
        <Button
          width="125.16px"
          height="unset"
          position="absolute"
          top="22px"
          left="478.63px"
          backgroundColor="rgba(0,0,0,0)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Acessibilidade"
          {...getOverrideProps(overrides, "Button39012871")}
        ></Button>
        <Button
          width="65.09px"
          height="unset"
          position="absolute"
          top="22px"
          left="938.24px"
          backgroundColor="rgba(0,0,0,0)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Ajuda"
          {...getOverrideProps(overrides, "Button39012872")}
        ></Button>
        <Button
          width="130.17px"
          height="unset"
          position="absolute"
          top="24px"
          left="1129.49px"
          backgroundColor="rgba(191,128,64,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Entrar"
          {...getOverrideProps(overrides, "Button39012873")}
        ></Button>
      </View>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/PerfilSemFoto.png?raw=true"
        width="90px"
        height="90px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="612px"
        left="275px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 839044187")}
      ></Image>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/PerfilSemFoto.png?raw=true"
        width="90px"
        height="90px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="315px"
        left="275px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 839044189")}
      ></Image>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/PerfilSemFoto.png?raw=true"
        width="90px"
        height="90px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="470px"
        left="275px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 839044191")}
      ></Image>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/PerfilSemFoto.png?raw=true"
        width="60px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="806px"
        left="411px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 839044193")}
      ></Image>
    </View>
  );
}
