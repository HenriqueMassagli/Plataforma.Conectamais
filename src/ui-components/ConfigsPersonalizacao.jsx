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
  Divider,
  Icon,
  Image,
  SelectField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function ConfigsPersonalizacao(props) {
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
      {...getOverrideProps(overrides, "ConfigsPersonalizacao")}
      {...rest}
    >
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/BackgroundConecta.jpg?raw=true"
        width="100vw"
        height="1047px"
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
      <View
        padding="0px 0px 0px 0px"
        width="632.15px"
        height="551px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="256px"
        left="666px"
        {...getOverrideProps(overrides, "Group 478")}
      >
        <View
          width="632.15px"
          height="373px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="178px"
          left="0px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="30px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 104")}
        ></View>
        <Text
          fontSize="44px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="66px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="501.48px"
          height="117px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="64.78px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Personalizando sua experiência"
          {...getOverrideProps(
            overrides,
            "Personalizando sua experi\u00EAncia"
          )}
        ></Text>
        <View
          width="55.84px"
          height="50px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="73px"
          left="499.25px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "edit_24dp_000000_FILL0_wght400_GRAD0_opsz24 1"
          )}
        >
          <Icon
            width="41.88px"
            height="37.5px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 41.88301467895508,
              height: 37.5,
            }}
            paths={[
              {
                d: "M4.65367 33.3333L7.96941 33.3333L30.7142 12.9688L27.3985 10L4.65367 30.3646L4.65367 33.3333ZM0 37.5L0 28.6458L30.7142 1.19792C31.1796 0.815972 31.6934 0.520833 32.2557 0.3125C32.8181 0.104167 33.4095 0 34.0299 0C34.6504 0 35.2515 0.104167 35.8332 0.3125C36.415 0.520833 36.9191 0.833333 37.3457 1.25L40.5451 4.16667C41.0105 4.54861 41.3498 5 41.5631 5.52083C41.7764 6.04167 41.883 6.5625 41.883 7.08333C41.883 7.63889 41.7764 8.1684 41.5631 8.67188C41.3498 9.17535 41.0105 9.63542 40.5451 10.0521L9.88905 37.5L0 37.5ZM29.0273 11.5104L27.3985 10L30.7142 12.9688L29.0273 11.5104Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="12.5%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector38512103")}
          ></Icon>
        </View>
      </View>
      <SelectField
        width="549px"
        height="unset"
        label="Cor de fundo"
        placeholder="Cor padrão #164659"
        position="absolute"
        top="478px"
        left="693px"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField38531446")}
      ></SelectField>
      <SelectField
        width="549px"
        height="unset"
        label="Fonte"
        placeholder="Poppins"
        position="absolute"
        top="663px"
        left="693px"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField38531456")}
      ></SelectField>
      <Divider
        width="632px"
        height="5px"
        position="absolute"
        top="617px"
        left="666px"
        size="default"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider38531472")}
      ></Divider>
      <View
        padding="0px 0px 0px 0px"
        width="404px"
        height="496px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="369px"
        left="166px"
        {...getOverrideProps(overrides, "Group 484")}
      >
        <View
          width="404px"
          height="496px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 205")}
        ></View>
        <Icon
          width="30px"
          height="35px"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 35 }}
          paths={[
            {
              d: "M3.75 35C2.71875 35 1.83594 34.6736 1.10156 34.0208C0.367188 33.3681 0 32.5833 0 31.6667L0 15C0 14.0833 0.367188 13.2986 1.10156 12.6458C1.83594 11.9931 2.71875 11.6667 3.75 11.6667L5.625 11.6667L5.625 8.33333C5.625 6.02778 6.53906 4.0625 8.36719 2.4375C10.1953 0.8125 12.4062 0 15 0C17.5938 0 19.8047 0.8125 21.6328 2.4375C23.4609 4.0625 24.375 6.02778 24.375 8.33333L24.375 11.6667L26.25 11.6667C27.2812 11.6667 28.1641 11.9931 28.8984 12.6458C29.6328 13.2986 30 14.0833 30 15L30 31.6667C30 32.5833 29.6328 33.3681 28.8984 34.0208C28.1641 34.6736 27.2812 35 26.25 35L3.75 35ZM3.75 31.6667L26.25 31.6667L26.25 15L3.75 15L3.75 31.6667ZM15 26.6667C16.0312 26.6667 16.9141 26.3403 17.6484 25.6875C18.3828 25.0347 18.75 24.25 18.75 23.3333C18.75 22.4167 18.3828 21.6319 17.6484 20.9792C16.9141 20.3264 16.0312 20 15 20C13.9688 20 13.0859 20.3264 12.3516 20.9792C11.6172 21.6319 11.25 22.4167 11.25 23.3333C11.25 24.25 11.6172 25.0347 12.3516 25.6875C13.0859 26.3403 13.9688 26.6667 15 26.6667ZM9.375 11.6667L20.625 11.6667L20.625 8.33333C20.625 6.94445 20.0781 5.76389 18.9844 4.79167C17.8906 3.81944 16.5625 3.33333 15 3.33333C13.4375 3.33333 12.1094 3.81944 11.0156 4.79167C9.92188 5.76389 9.375 6.94445 9.375 8.33333L9.375 11.6667Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="9.68%"
          bottom="83.27%"
          left="9.16%"
          right="83.42%"
          {...getOverrideProps(overrides, "Vector38512088")}
        ></Icon>
        <Icon
          width="30px"
          height="35px"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 35 }}
          paths={[
            {
              d: "M15 7C14.0833 7 13.2986 6.65729 12.6458 5.97187C11.9931 5.28646 11.6667 4.4625 11.6667 3.5C11.6667 2.5375 11.9931 1.71354 12.6458 1.02812C13.2986 0.342708 14.0833 0 15 0C15.9167 0 16.7014 0.342708 17.3542 1.02812C18.0069 1.71354 18.3333 2.5375 18.3333 3.5C18.3333 4.4625 18.0069 5.28646 17.3542 5.97187C16.7014 6.65729 15.9167 7 15 7ZM10 35L10 12.25L0 12.25L0 8.75L30 8.75L30 12.25L20 12.25L20 35L16.6667 35L16.6667 24.5L13.3333 24.5L13.3333 35L10 35Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="171px"
          left="37px"
          {...getOverrideProps(overrides, "Vector38512089")}
        ></Icon>
        <Icon
          width="30px"
          height="35px"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 35 }}
          paths={[
            {
              d: "M15 35C12.95 35 11.0125 34.5406 9.1875 33.6219C7.3625 32.7031 5.76875 31.449 4.40625 29.8594C3.04375 28.2698 1.96875 26.4104 1.18125 24.2812C0.39375 22.1521 0 19.8917 0 17.5C0 15.0792 0.40625 12.8042 1.21875 10.675C2.03125 8.54583 3.13125 6.69375 4.51875 5.11875C5.90625 3.54375 7.525 2.29688 9.375 1.37812C11.225 0.459375 13.2 0 15.3 0C17.3 0 19.1875 0.401042 20.9625 1.20312C22.7375 2.00521 24.2938 3.11354 25.6313 4.52812C26.9688 5.94271 28.0312 7.61979 28.8188 9.55937C29.6063 11.499 30 13.5917 30 15.8375C30 19.1917 29.125 21.7656 27.375 23.5594C25.625 25.3531 23.5 26.25 21 26.25L18.225 26.25C18 26.25 17.8438 26.3229 17.7563 26.4688C17.6687 26.6146 17.625 26.775 17.625 26.95C17.625 27.3 17.8125 27.8031 18.1875 28.4594C18.5625 29.1156 18.75 29.8667 18.75 30.7125C18.75 32.1708 18.4062 33.25 17.7188 33.95C17.0312 34.65 16.125 35 15 35ZM6.75 19.25C7.4 19.25 7.9375 19.0021 8.3625 18.5063C8.7875 18.0104 9 17.3833 9 16.625C9 15.8667 8.7875 15.2396 8.3625 14.7438C7.9375 14.2479 7.4 14 6.75 14C6.1 14 5.5625 14.2479 5.1375 14.7438C4.7125 15.2396 4.5 15.8667 4.5 16.625C4.5 17.3833 4.7125 18.0104 5.1375 18.5063C5.5625 19.0021 6.1 19.25 6.75 19.25ZM11.25 12.25C11.9 12.25 12.4375 12.0021 12.8625 11.5062C13.2875 11.0104 13.5 10.3833 13.5 9.625C13.5 8.86667 13.2875 8.23958 12.8625 7.74375C12.4375 7.24792 11.9 7 11.25 7C10.6 7 10.0625 7.24792 9.6375 7.74375C9.2125 8.23958 9 8.86667 9 9.625C9 10.3833 9.2125 11.0104 9.6375 11.5062C10.0625 12.0021 10.6 12.25 11.25 12.25ZM18.75 12.25C19.4 12.25 19.9375 12.0021 20.3625 11.5062C20.7875 11.0104 21 10.3833 21 9.625C21 8.86667 20.7875 8.23958 20.3625 7.74375C19.9375 7.24792 19.4 7 18.75 7C18.1 7 17.5625 7.24792 17.1375 7.74375C16.7125 8.23958 16.5 8.86667 16.5 9.625C16.5 10.3833 16.7125 11.0104 17.1375 11.5062C17.5625 12.0021 18.1 12.25 18.75 12.25ZM23.25 19.25C23.9 19.25 24.4375 19.0021 24.8625 18.5063C25.2875 18.0104 25.5 17.3833 25.5 16.625C25.5 15.8667 25.2875 15.2396 24.8625 14.7438C24.4375 14.2479 23.9 14 23.25 14C22.6 14 22.0625 14.2479 21.6375 14.7438C21.2125 15.2396 21 15.8667 21 16.625C21 17.3833 21.2125 18.0104 21.6375 18.5063C22.0625 19.0021 22.6 19.25 23.25 19.25ZM15 31.5C15.225 31.5 15.4062 31.4271 15.5437 31.2812C15.6812 31.1354 15.75 30.9458 15.75 30.7125C15.75 30.3042 15.5625 29.8229 15.1875 29.2688C14.8125 28.7146 14.625 27.8833 14.625 26.775C14.625 25.55 14.9875 24.5729 15.7125 23.8438C16.4375 23.1146 17.325 22.75 18.375 22.75L21 22.75C22.65 22.75 24.0625 22.1885 25.2375 21.0656C26.4125 19.9427 27 18.2 27 15.8375C27 12.3083 25.8438 9.36979 23.5312 7.02187C21.2188 4.67396 18.475 3.5 15.3 3.5C11.9 3.5 9 4.85625 6.6 7.56875C4.2 10.2812 3 13.5917 3 17.5C3 21.3792 4.16875 24.6823 6.50625 27.4094C8.84375 30.1365 11.675 31.5 15 31.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="59.27%"
          bottom="33.67%"
          left="9.16%"
          right="83.42%"
          {...getOverrideProps(overrides, "Vector38512090")}
        ></Icon>
        <Icon
          width="30px"
          height="35px"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 35 }}
          paths={[
            {
              d: "M3.93939 28.8835L3.93939 25.4854L6.9697 25.4854L6.9697 13.5922C6.9697 12.6578 7.07702 11.7375 7.29167 10.8313C7.50631 9.92516 7.82828 9.06149 8.25758 8.24029L10.5303 10.7888C10.3535 11.2419 10.221 11.7021 10.1326 12.1693C10.0442 12.6365 10 13.1108 10 13.5922L10 25.4854L19.3939 25.4854L0 3.73786L2.12121 1.35922L30 32.6214L27.8788 35L22.3485 28.8835L3.93939 28.8835ZM25.1515 22.3422L22.1212 18.9442L22.1212 13.5922C22.1212 11.7233 21.5278 10.1234 20.3409 8.79248C19.154 7.46157 17.7273 6.79612 16.0606 6.79612C15.404 6.79612 14.7727 6.90939 14.1667 7.13592C13.5606 7.36246 13.0051 7.70227 12.5 8.15534L10.303 5.69175C10.8081 5.23867 11.351 4.84223 11.9318 4.50243C12.5126 4.16262 13.1313 3.90777 13.7879 3.73786L13.7879 2.54854C13.7879 1.84061 14.0088 1.23888 14.4508 0.743325C14.8927 0.247775 15.4293 0 16.0606 0C16.6919 0 17.2285 0.247775 17.6705 0.743325C18.1124 1.23888 18.3333 1.84061 18.3333 2.54854L18.3333 3.73786C20.3535 4.30421 21.9949 5.50061 23.2576 7.32706C24.5202 9.15352 25.1515 11.2419 25.1515 13.5922L25.1515 22.3422ZM16.0606 33.9806C15.2273 33.9806 14.5139 33.6479 13.9205 32.9824C13.327 32.3169 13.0303 31.517 13.0303 30.5825L19.0909 30.5825C19.0909 31.517 18.7942 32.3169 18.2008 32.9824C17.6073 33.6479 16.8939 33.9806 16.0606 33.9806Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="84.27%"
          bottom="8.67%"
          left="9.16%"
          right="83.42%"
          {...getOverrideProps(overrides, "Vector38512092")}
        ></Icon>
        <Text
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="170px"
          left="110px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Acessibilidade"
          onClick={() => navigate("/ConfigsAcessibilidade")}
          style={{ cursor: "pointer" }}
          {...getOverrideProps(overrides, "Acessibilidade")}
        ></Text>
        <Text
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="48px"
          left="110px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Acesso e Segurança"
          onClick={() => navigate("/Configs")}
          style={{ cursor: "pointer" }}
          {...getOverrideProps(overrides, "Acesso e Seguran\u00E7a")}
        ></Text>
        <Text
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="293px"
          left="110px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Aparência"
          onClick={() => navigate("/ConfigsPersonalizacao")}
          style={{ cursor: "pointer" }}
          {...getOverrideProps(overrides, "Apar\u00EAncia")}
        ></Text>
        <Text
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="421px"
          left="110px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Notificação"
          onClick={() => navigate("/ConfigsNotificacoes")}
          style={{ cursor: "pointer" }}
          {...getOverrideProps(overrides, "Notifica\u00E7\u00E3o")}
        ></Text>
        <Divider
          width="404px"
          position="absolute"
          top="132px"
          left="0px"
          size="default"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider38572732")}
        ></Divider>
        <Divider
          width="404px"
          position="absolute"
          top="375px"
          left="0px"
          size="default"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider38572737")}
        ></Divider>
        <Divider
          width="404px"
          position="absolute"
          top="239px"
          left="0px"
          size="default"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider38572735")}
        ></Divider>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1519px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group 485")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="1519px"
          height="70px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
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
            width="155.31px"
            height="33px"
            position="absolute"
            border="1px SOLID rgba(255,255,255,1)"
            top="24px"
            left="1327.62px"
            backgroundColor="rgba(0,0,0,0)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Cadastrar-se"
            onClick={() => navigate("/EscolhaDeConta")}
            {...getOverrideProps(overrides, "Button38981972")}
          ></Button>
          <Image
            src="https://raw.githubusercontent.com/Projeto-PROA-Conecta/imagens/9d4199ac05a2459b18928e253bab87cfaa3f1082/LogoBrancaConecta.svg"
            onClick={() => navigate("/Home")}
            style={{ cursor: "pointer" }}
            width="182.36px"
            height="37px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="27px"
            left="37.07px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "logo_branca_conecta 2")}
          ></Image>
          <Button
            width="unset"
            height="unset"
            position="absolute"
            top="22px"
            left="302.6px"
            backgroundColor="rgba(0,0,0,0)"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Início"
            onClick={() => navigate("/Home")}
            {...getOverrideProps(overrides, "Button38981974")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            position="absolute"
            top="22px"
            left="670.43px"
            backgroundColor="rgba(0,0,0,0)"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Comunidade"
            onClick={() => navigate("/Comunidade")}
            {...getOverrideProps(overrides, "Button38981975")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            position="absolute"
            top="22px"
            left="478.95px"
            backgroundColor="rgba(0,0,0,0)"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Vagas"
            onClick={() => navigate("/Vagas")}
            {...getOverrideProps(overrides, "Button38981976")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            position="absolute"
            top="22px"
            left="908.85px"
            backgroundColor="rgba(0,0,0,0)"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Acessibilidade"
            onClick={() => navigate("/ConfigsAcessibilidade")}
            {...getOverrideProps(overrides, "Button38981977")}
          ></Button>
          <Button
            width="130.26px"
            height="unset"
            position="absolute"
            top="24px"
            left="1130.23px"
            backgroundColor="rgba(191,128,64,1)"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Entrar"
            onClick={() => navigate("/TelaDeLogin")}
            {...getOverrideProps(overrides, "Button38981978")}
          ></Button>
        </View>
      </View>
    </View>
  );
}
