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
export default function CadastroUsuario4(props) {
  const { bancoImagens, overrides, ...rest } = props;
  const navigate = useNavigate();
  const negativa = ["não"];
  const ambiente = ["remoto", "híbrido"];
  const aspectos = ["auditivo"];
  const dificuldades = [
    "Carga de Trabalho Excessiva",
    "Comunicação Ineficiente",
    "Conflitos com Colegas de Trabalho",
    "Falta de Reconhecimento",
    "Gestão Ineficaz",
    "Prazos Irrealistas",
    "Falta de Treinamento Adequado",
    "Ambiente de Trabalho Tóxico",
    "Falta de Autonomia",
    "Resistência à Mudança",
    "Falta de Planejamento",
    "Problemas com Ferramentas de Trabalho",
    "Falta de Oportunidades de Crescimento",
    "Pressão por Resultados",
    "Falta de Clareza nas Tarefas",
    "Baixo Moral da Equipe",
    "Problemas Técnicos Constantes",
    "Falta de Equilíbrio entre Vida Profissional e Pessoal",
    "Mudanças Constantes de Prioridades",
    "Falta de Apoio da Liderança",
    "Falta de Diversidade ou Inclusão",
  ];

  const habilidades = [
    "Inteligente",
    "Proativo",
    "Organizado",
    "Comunicativo",
    "Empático",
    "Ágil",
    "Responsável",
    "Resiliente",
    "Flexível",
    "Liderança",
    "Colaborativo",
  ];

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
      {...getOverrideProps(overrides, "CadastroUsuario4")}
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
        fontSize="34px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="51px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="609px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="200px"
        left="455px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Queremos conhecer&#x2028;mais um pouco sobre você"
        {...getOverrideProps(
          overrides,
          "Queremos conhecer\u2028mais um pouco sobre voc\u00EA"
        )}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="609.96px"
        height="762.93px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="336px"
        left="451px"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <View
          width="609.96px"
          height="762.93px"
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
          width="17px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 17, height: 18 }}
          paths={[
            {
              d: "M17 9C17 13.9706 13.1944 18 8.5 18C3.80558 18 0 13.9706 0 9C0 4.02944 3.80558 0 8.5 0C13.1944 0 17 4.02944 17 9Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="29px"
          left="246px"
          {...getOverrideProps(overrides, "Ellipse 108")}
        ></Icon>
        <Icon
          width="17px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 17, height: 18 }}
          paths={[
            {
              d: "M17 9C17 13.9706 13.1944 18 8.5 18C3.80558 18 0 13.9706 0 9C0 4.02944 3.80558 0 8.5 0C13.1944 0 17 4.02944 17 9Z",
              fill: "rgba(253,157,72,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="29px"
          left="300px"
          {...getOverrideProps(overrides, "Ellipse 109")}
        ></Icon>
        <Icon
          width="17px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 17, height: 18 }}
          paths={[
            {
              d: "M17 9C17 13.9706 13.1944 18 8.5 18C3.80558 18 0 13.9706 0 9C0 4.02944 3.80558 0 8.5 0C13.1944 0 17 4.02944 17 9Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="29px"
          left="355px"
          {...getOverrideProps(overrides, "Ellipse 110")}
        ></Icon>
        <Text
          fontSize="32px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="39.007999420166016px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="99.47px"
          height="29.91px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="690.07px"
          left="453.63px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Proxímo"
          {...getOverrideProps(overrides, "Prox\u00EDmo")}
        ></Text>
        <View
          width="103px"
          height="80px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="682.93px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "undraw_coffee_with_friends_3cbj 1")}
        >
          <Icon
            width="103px"
            height="0.28px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 103,
              height: 0.2817927300930023,
            }}
            paths={[
              {
                d: "M103 0.140896C103 0.218711 102.941 0.281793 102.869 0.281793L0 0.281793L0 0L102.869 0C102.941 0 103 0.0630821 103 0.140896Z",
                fill: "rgba(230,230,230,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54.88%"
            bottom="44.77%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector38512196")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="29.24px"
            height="80px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="14.26%"
            right="57.35%"
            {...getOverrideProps(overrides, "Group38512197")}
          >
            <Icon
              width="7.78px"
              height="8.35px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.775025844573975,
                height: 8.346435546875,
              }}
              paths={[
                {
                  d: "M3.88751 8.34644C6.03453 8.34644 7.77503 6.47802 7.77503 4.17322C7.77503 1.86841 6.03453 0 3.88751 0C1.7405 0 0 1.86841 0 4.17322C0 6.47802 1.7405 8.34644 3.88751 8.34644Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1.91%"
              bottom="87.66%"
              left="52.15%"
              right="21.26%"
              {...getOverrideProps(overrides, "Vector38512198")}
            ></Icon>
            <Icon
              width="16.77px"
              height="35.73px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.7747802734375,
                height: 35.725955963134766,
              }}
              paths={[
                {
                  d: "M8.73378 0L3.61677 1.56945L2.88577 3.33508L1.24102 11.7709L1.24102 25.1112C1.24102 25.1112 -0.769228 29.8195 0.327271 33.9393C1.49933 38.343 5.62703 33.1453 8.73378 33.7385C11.8405 34.3317 16.7748 34.9202 16.7748 34.9202L13.8508 20.599L13.1198 3.1389L8.73378 0Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="13.44%"
              bottom="41.9%"
              left="42.62%"
              right="0.01%"
              {...getOverrideProps(overrides, "Vector38512199")}
            ></Icon>
            <Icon
              width="9.87px"
              height="10.16px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.872706413269043,
                height: 10.164210319519043,
              }}
              paths={[
                {
                  d: "M5.53258 7.0656L4.74222 6.64137C4.74222 6.64137 4.54462 4.73234 4.14944 4.30812C3.75425 3.88389 3.75425 3.67177 3.75425 3.67177L4.34703 2.82332C4.34703 2.82332 1.38315 4.52023 0.790371 3.45966C0.197593 2.39909 0.987961 1.97486 0.987961 1.97486L0 1.12641C0 1.12641 1.18555 1.97486 1.38315 1.33852C1.58074 0.702179 2.76629 0.270435 2.76629 0.270435C2.76629 0.270435 5.35522 0.899261 5.14751 0.270435C4.93981 -0.35839 5.73017 0.277952 5.92777 0.490065C6.12536 0.702179 7.90369 2.82332 8.10128 2.6112C8.29887 2.39909 9.28683 3.03543 9.08924 3.24755C8.89165 3.45966 8.89165 3.67177 9.08924 3.88389C9.28683 4.096 10.4724 6.42926 9.48443 7.27771C8.49646 8.12616 7.11332 9.18674 7.31091 10.0352C7.5085 10.8836 7.31091 7.27771 5.53258 7.0656Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="87.29%"
              left="50.27%"
              right="15.97%"
              {...getOverrideProps(overrides, "Vector38512200")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="20.65px"
              height="17.85px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="17.36%"
              bottom="60.33%"
              left="0%"
              right="29.39%"
              {...getOverrideProps(overrides, "Group38512201")}
            >
              <Icon
                width="8.16px"
                height="8.23px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.157173156738281,
                  height: 8.227083206176758,
                }}
                paths={[
                  {
                    d: "M1.06978 3.31223C0.0719908 2.38888 -0.292993 1.08777 0.254503 0.406201C0.802001 -0.275368 2.05447 -0.0792436 3.0525 0.844573C3.45589 1.20773 3.77239 1.66931 3.97553 2.19069L8.15717 6.16025L6.38008 8.22708L2.4464 4.09437C1.93592 3.95542 1.46387 3.68722 1.06978 3.31223Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="2.09%"
                bottom="51.82%"
                left="0%"
                right="60.5%"
                {...getOverrideProps(
                  overrides,
                  "uuid-9ec032c4-1053-42c3-862e-530ead60710b-837"
                )}
              ></Icon>
              <Icon
                width="17.91px"
                height="17.85px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.909509658813477,
                  height: 17.850494384765625,
                }}
                paths={[
                  {
                    d: "M12.6536 0.26881L15.4081 0L17.8237 12.3673C18.284 14.7239 16.845 17.0246 14.6389 17.4593L12.6536 17.8505L0 5.89058L1.84869 2.58225L11.1802 8.86595L12.6536 0.26881Z",
                    fill: "rgba(230,230,230,1)",
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
                left="13.27%"
                right="0%"
                {...getOverrideProps(overrides, "Vector38512203")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="24.32px"
              height="54.33px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="32.09%"
              bottom="0%"
              left="4.89%"
              right="11.94%"
              {...getOverrideProps(overrides, "Group38512204")}
            >
              <Icon
                width="4.38px"
                height="5.03px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 4.377410888671875,
                  height: 5.025593280792236,
                }}
                paths={[
                  {
                    d: "M2.03664 0C2.03664 0 -0.148072 4.35551 0.00797883 4.18799C0.16403 4.02047 2.8169 5.02559 2.8169 5.02559L4.37741 0.670079L2.03664 0Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="80.04%"
                bottom="10.71%"
                left="23.76%"
                right="58.24%"
                {...getOverrideProps(overrides, "Vector38512205")}
              ></Icon>
              <Icon
                width="3.44px"
                height="4.66px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.435922384262085,
                  height: 4.664588451385498,
                }}
                paths={[
                  {
                    d: "M1.01352 0C1.01352 0 -0.104824 4.79891 0.00799612 4.5953C0.120816 4.39168 2.92256 4.66459 2.92256 4.66459L3.43592 0.0306815L1.01352 0Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.92%"
                bottom="67.5%"
                left="14.71%"
                right="71.16%"
                {...getOverrideProps(overrides, "Vector38512206")}
              ></Icon>
              <Icon
                width="14.03px"
                height="10.85px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 14.03354549407959,
                  height: 10.851366996765137,
                }}
                paths={[
                  {
                    d: "M13.7561 2.96301C8.81893 3.70756 4.35947 3.0584 0.72585 0C0.72585 0 -1.92702 9.54863 2.91057 10.5537C7.74815 11.5589 13.1319 9.83132 13.7561 8.15612C14.3803 6.48092 13.7561 2.96301 13.7561 2.96301Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="16.98%"
                bottom="63.05%"
                left="42.3%"
                right="0%"
                {...getOverrideProps(overrides, "Vector38512207")}
              ></Icon>
              <Icon
                width="17.09px"
                height="30.21px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.08759880065918,
                  height: 30.205909729003906,
                }}
                paths={[
                  {
                    d: "M7.88058 0L2.49682 13.6215L0 29.3683L3.27707 30.2059L9.13882 15.7154L17.0876 1.84272L7.88058 0Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="27.98%"
                bottom="16.42%"
                left="28.61%"
                right="1.14%"
                {...getOverrideProps(overrides, "Vector38512208")}
              ></Icon>
              <Icon
                width="10.3px"
                height="16.01px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 10.29630184173584,
                  height: 16.006689071655273,
                }}
                paths={[
                  {
                    d: "M10.2963 11.3161C10.2963 11.3161 9.04789 0.929906 6.70713 0.259827C5.56599 -0.0668397 4.49903 -0.0351914 3.70512 0.0830491C2.90495 0.202223 2.26707 0.858501 2.12716 1.7126L0 14.6979L3.00798 14.6979L3.97623 11.18L6.55107 16.0067L10.2963 11.3161Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="70.54%"
                left="15.79%"
                right="41.88%"
                {...getOverrideProps(overrides, "Vector38512209")}
              ></Icon>
              <Icon
                width="8.99px"
                height="7.46px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.987967491149902,
                  height: 7.463935852050781,
                }}
                paths={[
                  {
                    d: "M6.48961 0.889949L3.51543 0.554909L3.05649 2.39763C3.05649 2.39763 -1.7811 7.08818 0.715722 7.42322C3.21254 7.75826 5.55331 5.91554 5.55331 5.91554L8.98797 3.80044C8.98797 3.80044 7.66 0 6.72369 0C5.78738 0 6.48961 0.889949 6.48961 0.889949Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="28.44%"
                bottom="57.82%"
                left="0%"
                right="63.05%"
                {...getOverrideProps(overrides, "Vector38512210")}
              ></Icon>
              <Icon
                width="8.99px"
                height="7.63px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.987967491149902,
                  height: 7.6314568519592285,
                }}
                paths={[
                  {
                    d: "M6.48961 1.05747L3.51543 0.722429L3.05649 2.56515C3.05649 2.56515 -1.7811 7.2557 0.715722 7.59074C3.21254 7.92578 5.55331 6.08306 5.55331 6.08306L8.98797 3.96796C8.98797 3.96796 8.75236 0 7.81605 0C6.87974 0 6.48961 1.05747 6.48961 1.05747Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="85.95%"
                bottom="0%"
                left="6.42%"
                right="56.63%"
                {...getOverrideProps(overrides, "Vector38512211")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="7.68px"
              height="36.52px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="16.92%"
              bottom="37.43%"
              left="73.73%"
              right="0%"
              {...getOverrideProps(overrides, "Group38512212")}
            >
              <Icon
                width="4.89px"
                height="9.87px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 4.8853278160095215,
                  height: 9.869346618652344,
                }}
                paths={[
                  {
                    d: "M2.97619 7.88132C2.61758 9.20162 1.69231 10.0732 0.909629 9.82806C0.126948 9.58293 -0.216637 8.31407 0.14226 6.99336C0.278884 6.46368 0.531685 5.97682 0.879517 5.57353L2.46475 0L4.88533 0.854324L3.06558 6.25814C3.15697 6.7991 3.12632 7.35569 2.97619 7.88132Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="72.98%"
                bottom="0%"
                left="0%"
                right="36.4%"
                {...getOverrideProps(
                  overrides,
                  "uuid-0c2c35cf-ee7e-4b84-8f52-274d32364181-838"
                )}
              ></Icon>
              <Icon
                width="7.2px"
                height="31.16px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 7.203332424163818,
                  height: 31.15580177307129,
                }}
                paths={[
                  {
                    d: "M4.17332 0.382135L2.91116 0C1.72101 2.54201 1.20924 5.38795 1.43249 8.22285L2.05543 16.1332L0 30.0369L4.02864 31.1558L7.20333 13.7072L4.17332 0.382135Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="14.69%"
                left="6.23%"
                right="0%"
                {...getOverrideProps(overrides, "Vector38512214")}
              ></Icon>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="12.49px"
            height="15.89px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="35.61%"
            bottom="44.53%"
            left="4.17%"
            right="83.7%"
            {...getOverrideProps(overrides, "Group38512215")}
          >
            <Icon
              width="9.44px"
              height="11.35px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.436079978942871,
                height: 11.348088264465332,
              }}
              paths={[
                {
                  d: "M8.97824 2.78327C8.92297 2.60171 8.50405 2.68164 8.46383 2.51924C8.42375 2.35743 8.82573 2.22174 9.13403 1.76573C9.18963 1.6835 9.53999 1.16528 9.40561 0.947312C9.15091 0.534167 7.3788 1.56315 6.95343 0.985719C6.86007 0.858997 6.82166 0.641445 6.54356 0.236573C6.43292 0.0755074 6.36194 -0.0022521 6.27714 4.96204e-05C6.1568 0.00331291 6.11374 0.164919 5.92461 0.457657C5.64097 0.896676 5.53861 0.841558 5.35176 1.20127C5.21305 1.4683 5.19662 1.63892 5.09659 1.64898C4.95504 1.66321 4.89655 1.33075 4.7236 1.31785C4.5471 1.30469 4.37049 1.6332 4.28294 1.88985C4.11864 2.37149 4.22038 2.73962 4.24294 3.1065C4.26745 3.50521 4.20989 4.08885 3.80634 4.83796L0 11.3481C0.817451 10.0209 3.13788 6.40194 4.07277 5.07448C4.34266 4.69127 4.63268 4.30647 5.07908 4.23408C5.50886 4.16438 6.03179 4.39264 6.76169 4.37935C6.84694 4.3778 7.08417 4.37024 7.14187 4.23526C7.18958 4.12366 7.07113 4.02664 7.11422 3.92174C7.17202 3.78104 7.43206 3.84141 7.78645 3.74796C8.03634 3.68207 8.20612 3.5732 8.35211 3.47957C8.39613 3.45135 9.05182 3.02497 8.97824 2.78327Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27.58%"
              bottom="0.99%"
              left="24.44%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512216")}
            ></Icon>
            <Icon
              width="3.39px"
              height="7.96px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.386436700820923,
                height: 7.956695556640625,
              }}
              paths={[
                {
                  d: "M2.06107 0.755046C1.96211 0.731777 1.87779 0.975559 1.79193 0.949893C1.70638 0.924323 1.76033 0.673379 1.6408 0.379368C1.61925 0.326348 1.4834 -0.00777371 1.34497 0.000138245C1.08259 0.0151279 1.04173 1.24571 0.654996 1.30322C0.570124 1.31585 0.459571 1.27331 0.194223 1.30302C0.0886611 1.31484 0.0326311 1.3298 0.00921247 1.37515C-0.0240155 1.43949 0.0374452 1.50881 0.116718 1.69291C0.2356 1.96903 0.180864 2.00706 0.291412 2.20929C0.373478 2.35942 0.446744 2.41731 0.422479 2.47291C0.388148 2.5516 0.219268 2.48649 0.163467 2.57389C0.106527 2.66309 0.205765 2.85092 0.297848 2.97111C0.470651 3.19664 0.668316 3.24925 0.842565 3.34323C1.03193 3.44535 1.28217 3.64407 1.50822 4.07284L3.38644 7.9567C3.01552 7.14308 2.03041 4.8763 1.69323 4.00071C1.5959 3.74794 1.50365 3.48411 1.59936 3.22802C1.69149 2.98147 1.94674 2.77181 2.15126 2.38341C2.17515 2.33805 2.24014 2.21087 2.19508 2.14152C2.15782 2.08419 2.07928 2.11861 2.04376 2.06563C1.99611 1.99458 2.09874 1.87499 2.15826 1.66131C2.20024 1.51063 2.19945 1.38977 2.19877 1.28583C2.19856 1.2545 2.1928 0.786018 2.06107 0.755046Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="49.91%"
              bottom="0%"
              left="0%"
              right="72.88%"
              {...getOverrideProps(overrides, "Vector38512217")}
            ></Icon>
            <Icon
              width="2.88px"
              height="2.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.8791658878326416,
                height: 2.209907293319702,
              }}
              paths={[
                {
                  d: "M0 2.2099L0.0590371 1.62478L0.0952473 1.58801C0.262773 1.41805 0.367573 1.23799 0.406886 1.05266C0.413142 1.0232 0.417986 0.993396 0.422944 0.963046C0.442548 0.842738 0.466886 0.69318 0.574635 0.537838C0.634936 0.451291 0.79445 0.255682 0.958965 0.324006C1.00337 0.341872 1.03334 0.372774 1.05416 0.405537C1.05938 0.399847 1.06474 0.394183 1.07047 0.38803C1.14153 0.313896 1.19124 0.286739 1.23913 0.260586C1.27593 0.24046 1.31392 0.219756 1.37823 0.164546C1.40643 0.14034 1.42902 0.118548 1.44806 0.100246C1.50578 0.0449128 1.57962 -0.0198777 1.68076 0.00578633C1.78797 0.0372449 1.82473 0.147031 1.84912 0.219713C1.89267 0.349355 1.90609 0.438508 1.91496 0.497635C1.91816 0.519235 1.92187 0.543558 1.92467 0.551465C1.94814 0.614955 2.24271 0.631377 2.35355 0.638239C2.6027 0.652751 2.81829 0.665309 2.87014 0.848444C2.90734 0.979459 2.82981 1.12236 2.63305 1.28446C2.57176 1.33489 2.51048 1.3697 2.4571 1.39569C2.48993 1.42902 2.51609 1.47434 2.5177 1.53607C2.5213 1.68219 2.38169 1.79431 2.10277 1.8699C2.03346 1.88889 1.94023 1.91402 1.81823 1.90767C1.76078 1.90462 1.71045 1.89518 1.66754 1.88635C1.66114 1.9126 1.64941 1.93988 1.62826 1.96578C1.56618 2.04206 1.46592 2.06146 1.32984 2.01846C1.1796 1.97352 1.0609 1.9124 0.956155 1.85868C0.864662 1.81189 0.785775 1.77187 0.719581 1.76094C0.596466 1.74246 0.481663 1.82406 0.344274 1.93266L0 2.2099Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="46.72%"
              bottom="39.37%"
              left="31.51%"
              right="45.44%"
              {...getOverrideProps(overrides, "Vector38512218")}
            ></Icon>
            <Icon
              width="2.41px"
              height="2.76px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.412407159805298,
                height: 2.7553532123565674,
              }}
              paths={[
                {
                  d: "M2.41239 2.66824L1.87017 2.75535L1.82787 2.72708C1.63222 2.59623 1.44339 2.53308 1.26643 2.53927C1.23829 2.54025 1.21021 2.54278 1.1816 2.54533C1.06822 2.55548 0.927287 2.56815 0.759984 2.49567C0.6667 2.455 0.449984 2.33898 0.469821 2.15082C0.474657 2.10019 0.4949 2.06123 0.519143 2.0313C0.512685 2.02732 0.506225 2.02319 0.499231 2.01881C0.414406 1.96382 0.377324 1.91908 0.341611 1.87599C0.314143 1.84289 0.285848 1.80869 0.219792 1.75592C0.190824 1.73277 0.165459 1.71484 0.144139 1.69972C0.0796357 1.65382 0.00252803 1.59357 0 1.48204C0.00115166 1.36273 0.0907543 1.29671 0.150058 1.25295C0.25583 1.17485 0.332759 1.1383 0.383787 1.11409C0.402439 1.10529 0.423418 1.09527 0.429832 1.09035C0.481088 1.04988 0.421166 0.739833 0.399236 0.622999C0.349117 0.360607 0.305746 0.133557 0.457617 0.0332694C0.566236 -0.0385915 0.714664 0.00567191 0.910633 0.168868C0.971621 0.219717 1.01853 0.274515 1.05549 0.323354C1.07719 0.280807 1.1114 0.242143 1.16662 0.22483C1.29737 0.184025 1.43381 0.300549 1.57266 0.571001C1.60736 0.638155 1.65366 0.728589 1.67888 0.856881C1.6907 0.917314 1.69496 0.97197 1.69789 1.01877C1.72316 1.01875 1.75072 1.02402 1.77942 1.03941C1.8639 1.08452 1.90682 1.18371 1.90259 1.33592C1.9002 1.50332 1.87524 1.64209 1.85339 1.76448C1.83444 1.87135 1.81839 1.96342 1.82534 2.03492C1.83991 2.16745 1.94256 2.26596 2.07527 2.38108L2.41239 2.66824Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="22.86%"
              bottom="59.8%"
              left="20.06%"
              right="60.62%"
              {...getOverrideProps(overrides, "Vector38512219")}
            ></Icon>
            <Icon
              width="2.88px"
              height="2.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.8791658878326416,
                height: 2.209907054901123,
              }}
              paths={[
                {
                  d: "M0 2.2099L0.0590371 1.62478L0.0952473 1.58802C0.262773 1.41805 0.367573 1.23799 0.406886 1.05266C0.413142 1.0232 0.417986 0.993395 0.422944 0.963046C0.442548 0.842738 0.466886 0.693179 0.574635 0.537838C0.634936 0.451291 0.794451 0.255682 0.958966 0.324006C1.00337 0.341872 1.03334 0.372774 1.05416 0.405537C1.05938 0.399846 1.06474 0.394183 1.07047 0.38803C1.14153 0.313896 1.19124 0.286739 1.23913 0.260586C1.27593 0.24046 1.31392 0.219755 1.37823 0.164546C1.40643 0.140339 1.42902 0.11855 1.44806 0.100249C1.50578 0.0449152 1.57962 -0.0198779 1.68076 0.00578616C1.78797 0.0372447 1.82473 0.147031 1.84912 0.219713C1.89267 0.349355 1.90609 0.438507 1.91496 0.497635C1.91816 0.519235 1.92187 0.543561 1.92467 0.551468C1.94814 0.614958 2.24271 0.631377 2.35355 0.638239C2.6027 0.652751 2.81829 0.665309 2.87014 0.848444C2.90734 0.979459 2.82981 1.12236 2.63305 1.28446C2.57176 1.33489 2.51048 1.3697 2.4571 1.39569C2.48993 1.42902 2.51609 1.47434 2.5177 1.53607C2.5213 1.68219 2.38169 1.79431 2.10277 1.8699C2.03346 1.88889 1.94023 1.91403 1.81823 1.90768C1.76078 1.90463 1.71045 1.89518 1.66754 1.88635C1.66114 1.9126 1.64941 1.93989 1.62826 1.96578C1.56618 2.04207 1.46592 2.06146 1.32984 2.01846C1.1796 1.97352 1.0609 1.9124 0.956155 1.85868C0.864662 1.81189 0.785776 1.77188 0.719582 1.76095C0.596467 1.74246 0.481663 1.82406 0.344274 1.93266L0 2.2099Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="14.74%"
              bottom="71.35%"
              left="39.96%"
              right="36.98%"
              {...getOverrideProps(overrides, "Vector38512220")}
            ></Icon>
            <Icon
              width="2.3px"
              height="13.82px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.304246187210083,
                height: 13.818690299987793,
              }}
              paths={[
                {
                  d: "M0.234266 13.8187L0.138402 13.717L0.00515377 13.7019C0.00579046 13.6885 0.0049147 13.657 0.00393938 13.6079C-0.0011869 13.3387 -0.017099 12.5195 0.0891655 11.2607C0.163366 10.3821 0.287358 9.49015 0.457699 8.60933C0.628325 7.72713 0.805409 7.07072 0.947641 6.54313C1.05498 6.14521 1.16332 5.76779 1.26908 5.40016C1.55133 4.41794 1.81782 3.49012 1.98285 2.43181C2.01981 2.19557 2.09651 1.70379 1.93947 1.12336C1.84836 0.786718 1.69236 0.46985 1.47564 0.181844L1.6854 0C1.92453 0.318257 2.09705 0.66918 2.19824 1.04295C2.37235 1.68651 2.28878 2.22236 2.24863 2.47982C2.08066 3.55682 1.8115 4.49356 1.52648 5.48523C1.42126 5.85154 1.31327 6.22731 1.2064 6.62361C1.06545 7.1463 0.88996 7.79701 0.721555 8.66788C0.553135 9.53816 0.430732 10.4192 0.357353 11.2868C0.252496 12.5296 0.268248 13.3367 0.273406 13.6018C0.276071 13.7433 0.276645 13.773 0.234266 13.8187Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.24%"
              bottom="0.78%"
              left="24.01%"
              right="57.54%"
              {...getOverrideProps(overrides, "Vector38512221")}
            ></Icon>
            <Icon
              width="2.1px"
              height="2.47px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.104926824569702,
                height: 2.4731698036193848,
              }}
              paths={[
                {
                  d: "M0.674814 2.45851C0.66403 2.45593 0.653175 2.45304 0.642306 2.44957C0.42109 2.38301 0.243641 2.18947 0.114745 1.87446C0.0544161 1.72633 0.0401745 1.57043 0.0117779 1.25952C0.00731952 1.21157 -0.0123679 0.969006 0.0118356 0.647535C0.0275828 0.437467 0.0486187 0.353095 0.101871 0.28685C0.161008 0.213044 0.240682 0.170776 0.324876 0.149556C0.327153 0.121743 0.335629 0.0945489 0.352444 0.0687693C0.421706 -0.0382021 0.537641 0.00576204 0.600547 0.0286352C0.632241 0.0408541 0.671736 0.0563853 0.716162 0.0644162C0.785978 0.0773721 0.827667 0.0642013 0.89077 0.0445881C0.951151 0.0257689 1.02623 0.00236755 1.13 0.00435433C1.33477 0.00737472 1.48635 0.106169 1.53633 0.13868C1.79958 0.308481 1.89047 0.579383 1.99565 0.893056C2.01655 0.955931 2.08591 1.18319 2.10206 1.47584C2.11372 1.68697 2.08795 1.77339 2.0584 1.83518C1.99804 1.96223 1.90561 2.02112 1.67622 2.14502C1.43657 2.27486 1.31634 2.33982 1.21775 2.37322C0.98834 2.45053 0.844284 2.49909 0.674814 2.45851Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="84.43%"
              left="25.81%"
              right="57.33%"
              {...getOverrideProps(overrides, "Vector38512222")}
            ></Icon>
          </View>
          <Icon
            width="9.01px"
            height="15.72px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.00975513458252,
              height: 15.720587730407715,
            }}
            paths={[
              {
                d: "M4.525 0C4.525 0 6.01321 0.936915 5.52513 1.86346C5.03705 2.79001 4.35663 4.05208 4.81824 4.44955C5.27984 4.84703 6.04196 6.59951 6.04196 6.59951C6.04196 6.59951 9.29491 6.11178 8.98952 8.82434C8.68413 11.5369 7.15595 11.9067 8.46578 13.1001C9.77561 14.2934 7.10447 15.7206 7.10447 15.7206C7.10447 15.7206 5.26042 15.1037 4.83971 13.2067C4.419 11.3097 5.21475 14.6572 4.94787 14.8972C4.68099 15.1372 3.64473 16.7193 2.91148 14.6159C2.17822 12.5124 2.90432 11.6968 1.93543 10.4554C0.966539 9.2139 0.307808 7.20591 0.336667 6.8549C0.365525 6.50389 -0.771624 3.30092 0.978692 2.05178C2.72901 0.802638 4.525 0 4.525 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.07%"
            bottom="72.28%"
            left="63.29%"
            right="27.96%"
            {...getOverrideProps(overrides, "Vector38512223")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="18.28px"
            height="19.5px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="21.34%"
            bottom="54.28%"
            left="66.68%"
            right="15.57%"
            {...getOverrideProps(overrides, "Group38512224")}
          >
            <Icon
              width="7.19px"
              height="6.67px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.19155740737915,
                height: 6.665607929229736,
              }}
              paths={[
                {
                  d: "M4.59914 5.98104C5.46319 6.7487 6.53255 6.89236 6.98756 6.30198C7.44257 5.7116 7.11091 4.61091 6.24645 3.8431C5.90505 3.5313 5.49906 3.31181 5.06245 3.20298L1.36316 0L0 1.89559L3.79157 4.85191C3.97289 5.29212 4.24981 5.6793 4.59914 5.98104Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="65.81%"
              bottom="0%"
              left="60.66%"
              right="0%"
              {...getOverrideProps(
                overrides,
                "uuid-40eda929-ef4c-4923-ad7d-cda70967e632-839"
              )}
            ></Icon>
            <Icon
              width="15.29px"
              height="17.5px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 15.292284965515137,
                height: 17.500316619873047,
              }}
              paths={[
                {
                  d: "M4.60109 1.34422C4.60109 1.34422 1.69802 -0.739937 0.747351 0.282025C-0.20332 1.30399 0.023724 3.85656 0.023724 3.85656L7.63677 13.3811L13.6735 17.5003L15.2923 14.7793L10.2171 9.91776L4.60109 1.34422Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="10.24%"
              left="0%"
              right="16.35%"
              {...getOverrideProps(overrides, "Vector38512226")}
            ></Icon>
          </View>
          <Icon
            width="5.78px"
            height="4.95px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 5.781263828277588,
              height: 4.952210426330566,
            }}
            paths={[
              {
                d: "M4.72792 0.933055L5.78126 4.95221L0 4.95221L1.90372 0L4.72792 0.933055Z",
                fill: "rgba(255,182,182,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.22%"
            bottom="77.59%"
            left="62.43%"
            right="31.96%"
            {...getOverrideProps(overrides, "Vector38512227")}
          ></Icon>
          <Icon
            width="5.78px"
            height="4.95px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 5.781263828277588,
              height: 4.952210426330566,
            }}
            paths={[
              {
                d: "M4.72792 0.933055L5.78126 4.95221L0 4.95221L1.90372 0L4.72792 0.933055Z",
                fill: "rgba(0,0,0,0.1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.22%"
            bottom="77.59%"
            left="62.43%"
            right="31.96%"
            {...getOverrideProps(overrides, "Vector38512228")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="7.32px"
            height="26.14px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="24.64%"
            bottom="42.69%"
            left="54.19%"
            right="38.7%"
            {...getOverrideProps(overrides, "Group38512229")}
          >
            <Icon
              width="2.63px"
              height="8.66px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.633512258529663,
                height: 8.663457870483398,
              }}
              paths={[
                {
                  d: "M0.00716434 6.39413C-0.0674671 7.59548 0.449467 8.61061 1.16168 8.66147C1.87389 8.71233 2.51155 7.77975 2.58606 6.57796C2.62195 6.09833 2.55033 5.61645 2.37718 5.17263L2.63351 0.0781747L0.403936 0L0.387949 5.03053C0.161397 5.4459 0.0308233 5.91348 0.00716434 6.39413Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="66.86%"
              bottom="0%"
              left="8.18%"
              right="55.84%"
              {...getOverrideProps(
                overrides,
                "uuid-c7296f43-523d-4c33-91d5-0d02a2c7186e-840"
              )}
            ></Icon>
            <Icon
              width="7.32px"
              height="21.35px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.319092750549316,
                height: 21.34759521484375,
              }}
              paths={[
                {
                  d: "M7.31909 3.99828C7.31909 3.99828 7.1958 0.251511 5.86758 0.0215063C4.53936 -0.208498 2.74351 1.48221 2.74351 1.48221L0 13.6819L0.418583 21.3476L3.42129 21.1655L4.12601 13.9029L7.31909 3.99828Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="18.33%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512231")}
            ></Icon>
          </View>
          <Icon
            width="4.38px"
            height="5.03px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 4.377410888671875,
              height: 5.025593280792236,
            }}
            paths={[
              {
                d: "M2.34077 0C2.34077 0 4.52548 4.35551 4.36943 4.18799C4.21338 4.02047 1.56051 5.02559 1.56051 5.02559L0 0.670079L2.34077 0Z",
                fill: "rgba(255,182,182,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="85.61%"
            bottom="8.11%"
            left="71.53%"
            right="24.22%"
            {...getOverrideProps(overrides, "Vector38512232")}
          ></Icon>
          <Icon
            width="3.44px"
            height="4.66px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 3.4359254837036133,
              height: 4.664588451385498,
            }}
            paths={[
              {
                d: "M2.4224 0C2.4224 0 3.54075 4.79891 3.42793 4.5953C3.31511 4.39169 0.513367 4.66459 0.513367 4.66459L0 0.0306815L2.4224 0Z",
                fill: "rgba(255,182,182,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="47.5%"
            bottom="46.67%"
            left="74.58%"
            right="22.09%"
            {...getOverrideProps(overrides, "Vector38512233")}
          ></Icon>
          <Icon
            width="17.4px"
            height="26.13px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 17.399702072143555,
              height: 26.13308334350586,
            }}
            paths={[
              {
                d: "M13.1083 0L7.65388 0L1.71656 4.35551L0 19.5998L0.936307 22.6152L2.65287 26.1331C2.65287 26.1331 0.936307 18.4272 5.14969 21.4425C9.36307 24.4579 9.67517 24.9604 9.67517 24.9604L15.293 21.9451L17.3997 9.46487L15.8392 2.59656L13.1083 0Z",
                fill: "rgba(63,61,86,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20.73%"
            bottom="46.6%"
            left="55.77%"
            right="27.34%"
            {...getOverrideProps(overrides, "Vector38512234")}
          ></Icon>
          <Icon
            width="14.03px"
            height="10.85px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 14.03354549407959,
              height: 10.851366996765137,
            }}
            paths={[
              {
                d: "M0.277424 2.96301C5.21462 3.70756 9.67408 3.0584 13.3077 0C13.3077 0 15.9606 9.54863 11.123 10.5537C6.28539 11.5589 0.901629 9.83132 0.277424 8.15612C-0.34678 6.48092 0.277424 2.96301 0.277424 2.96301Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="42.78%"
            bottom="43.65%"
            left="57.77%"
            right="28.6%"
            {...getOverrideProps(overrides, "Vector38512235")}
          ></Icon>
          <Icon
            width="17.09px"
            height="30.21px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 17.08759880065918,
              height: 30.205909729003906,
            }}
            paths={[
              {
                d: "M9.20702 0L14.5908 13.6215L17.0876 29.3683L13.8105 30.2059L7.94878 15.7154L0 1.84272L9.20702 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="50.26%"
            bottom="11.99%"
            left="58.04%"
            right="25.37%"
            {...getOverrideProps(overrides, "Vector38512236")}
          ></Icon>
          <Icon
            width="10.3px"
            height="16.01px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 10.296303749084473,
              height: 16.006689071655273,
            }}
            paths={[
              {
                d: "M0 11.3161C0 11.3161 1.24841 0.929906 3.58918 0.259827C4.73031 -0.0668397 5.79728 -0.0351914 6.59118 0.0830491C7.39135 0.202223 8.02924 0.858501 8.16915 1.7126L10.2963 14.6979L7.28833 14.6979L6.32007 11.18L3.74523 16.0067L0 11.3161Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="31.26%"
            bottom="48.74%"
            left="67.66%"
            right="22.34%"
            {...getOverrideProps(overrides, "Vector38512237")}
          ></Icon>
          <Icon
            width="8.99px"
            height="7.46px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.987971305847168,
              height: 7.463935852050781,
            }}
            paths={[
              {
                d: "M2.49835 0.889949L5.47254 0.554909L5.93148 2.39763C5.93148 2.39763 10.7691 7.08818 8.27225 7.42322C5.77543 7.75826 3.43466 5.91554 3.43466 5.91554L0 3.80044C0 3.80044 1.32797 0 2.26428 0C3.20058 0 2.49835 0.889949 2.49835 0.889949Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="50.57%"
            bottom="40.1%"
            left="72.66%"
            right="18.61%"
            {...getOverrideProps(overrides, "Vector38512238")}
          ></Icon>
          <Icon
            width="8.99px"
            height="7.63px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.987971305847168,
              height: 7.6314568519592285,
            }}
            paths={[
              {
                d: "M2.49835 1.05747L5.47254 0.722429L5.93148 2.56515C5.93148 2.56515 10.7691 7.2557 8.27225 7.59074C5.77543 7.92578 3.43466 6.08306 3.43466 6.08306L0 3.96796C0 3.96796 0.23561 0 1.17192 0C2.10822 0 2.49835 1.05747 2.49835 1.05747Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="89.62%"
            bottom="0.84%"
            left="71.15%"
            right="20.13%"
            {...getOverrideProps(overrides, "Vector38512239")}
          ></Icon>
          <Icon
            width="6.96px"
            height="7.47px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 6.963195323944092,
              height: 7.474939346313477,
            }}
            paths={[
              {
                d: "M3.4816 7.47494C5.40443 7.47494 6.9632 5.80162 6.9632 3.73747C6.9632 1.67332 5.40443 0 3.4816 0C1.55877 0 0 1.67332 0 3.73747C0 5.80162 1.55877 7.47494 3.4816 7.47494Z",
                fill: "rgba(255,182,182,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="9.13%"
            bottom="81.53%"
            left="62.31%"
            right="30.93%"
            {...getOverrideProps(overrides, "Vector38512240")}
          ></Icon>
          <Icon
            width="10.32px"
            height="14.87px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 10.32251262664795,
              height: 14.866610527038574,
            }}
            paths={[
              {
                d: "M10.1434 0.885735C10.1434 0.885735 10.7237 2.62989 9.79526 3.00364C8.86683 3.37738 7.59025 3.87571 7.7063 4.49862C7.82235 5.12154 7.35814 6.99027 7.35814 6.99027C7.35814 6.99027 10.1434 8.85901 8.28657 10.7277C6.42971 12.5965 5.03707 11.8264 5.32721 13.6441C5.61734 15.4619 2.71601 14.7144 2.71601 14.7144C2.71601 14.7144 1.67153 12.9702 2.4839 11.2261C3.29627 9.48192 1.90364 12.5965 1.55548 12.5965C1.20732 12.5965 -0.533483 13.0948 0.162836 10.9769C0.859154 8.859 1.90364 8.73442 1.90364 7.11485C1.90364 5.49528 2.59996 3.50196 2.83206 3.2528C3.06417 3.00364 4.10865 -0.235507 6.19761 0.013659C8.28657 0.262825 10.1434 0.885735 10.1434 0.885735Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="7.48%"
            bottom="73.94%"
            left="57.13%"
            right="32.84%"
            {...getOverrideProps(overrides, "Vector38512241")}
          ></Icon>
          <Icon
            width="4.38px"
            height="5.03px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 4.377408504486084,
              height: 5.025593280792236,
            }}
            paths={[
              {
                d: "M2.03664 0C2.03664 0 -0.148072 4.35551 0.00797883 4.18799C0.16403 4.02047 2.8169 5.02559 2.8169 5.02559L4.37741 0.670079L2.03664 0Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="85.61%"
            bottom="8.11%"
            left="35.46%"
            right="60.29%"
            {...getOverrideProps(overrides, "Vector38512242")}
          ></Icon>
          <Icon
            width="14.03px"
            height="10.85px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 14.03354549407959,
              height: 10.851366996765137,
            }}
            paths={[
              {
                d: "M13.7561 2.96301C8.81893 3.70756 4.35947 3.0584 0.72585 0C0.72585 0 -1.92702 9.54863 2.91057 10.5537C7.74815 11.5589 13.1319 9.83132 13.7561 8.15612C14.3803 6.48092 13.7561 2.96301 13.7561 2.96301Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="42.78%"
            bottom="43.65%"
            left="39.84%"
            right="46.54%"
            {...getOverrideProps(overrides, "Vector38512243")}
          ></Icon>
          <Icon
            width="17.09px"
            height="30.21px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 17.087596893310547,
              height: 30.205909729003906,
            }}
            paths={[
              {
                d: "M7.88058 0L2.49682 13.6215L0 29.3683L3.27707 30.2059L9.13882 15.7154L17.0876 1.84272L7.88058 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="50.26%"
            bottom="11.99%"
            left="36.6%"
            right="46.81%"
            {...getOverrideProps(overrides, "Vector38512244")}
          ></Icon>
          <Icon
            width="8.99px"
            height="7.63px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.987968444824219,
              height: 7.6314568519592285,
            }}
            paths={[
              {
                d: "M6.48961 1.05747L3.51542 0.722429L3.05649 2.56515C3.05649 2.56515 -1.7811 7.2557 0.715722 7.59074C3.21254 7.92578 5.55331 6.08306 5.55331 6.08306L8.98797 3.96796C8.98797 3.96796 8.75235 0 7.81605 0C6.87974 0 6.48961 1.05747 6.48961 1.05747Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="89.62%"
            bottom="0.84%"
            left="31.36%"
            right="59.91%"
            {...getOverrideProps(overrides, "Vector38512245")}
          ></Icon>
          <Icon
            width="3.15px"
            height="4.8px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 3.1537532806396484,
              height: 4.800052165985107,
            }}
            paths={[
              {
                d: "M0.734594 0.137817C0.734594 0.137817 -0.0918546 5.00441 0.00844262 4.79338C0.10874 4.58235 2.92106 4.65987 2.92106 4.65987L3.15375 0L0.734594 0.137817Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="82.57%"
            bottom="11.43%"
            left="41.51%"
            right="55.42%"
            {...getOverrideProps(overrides, "Vector38512246")}
          ></Icon>
          <Icon
            width="10.49px"
            height="31.84px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 10.494063377380371,
              height: 31.84200096130371,
            }}
            paths={[
              {
                d: "M1.20657 1.29632L0 16.0363L2.15036 31.842L5.5083 31.5534L6.91981 15.8285L10.4941 0L1.20657 1.29632Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="44.59%"
            bottom="15.61%"
            left="39.65%"
            right="50.16%"
            {...getOverrideProps(overrides, "Vector38512247")}
          ></Icon>
          <Icon
            width="7.75px"
            height="9.62px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 7.754337310791016,
              height: 9.620674133300781,
            }}
            paths={[
              {
                d: "M4.54142 1.46365L1.61602 2.12993L1.70903 4.03476C1.70903 4.03476 -1.5446 10.0986 0.926715 9.59043C3.39803 9.08223 5.09505 6.55419 5.09505 6.55419L7.75434 3.40477C7.75434 3.40477 6.38989 -0.291611 5.49925 0.0184728C4.60862 0.328557 4.54142 1.46365 4.54142 1.46365Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="85.89%"
            bottom="2.08%"
            left="39.23%"
            right="53.25%"
            {...getOverrideProps(overrides, "Vector38512248")}
          ></Icon>
          <Icon
            width="9.01px"
            height="15.72px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.00975513458252,
              height: 15.720587730407715,
            }}
            paths={[
              {
                d: "M4.48476 0C4.48476 0 2.99655 0.936915 3.48463 1.86346C3.97271 2.79001 4.65313 4.05208 4.19152 4.44955C3.72991 4.84703 2.9678 6.59951 2.9678 6.59951C2.9678 6.59951 -0.285159 6.11178 0.0202317 8.82434C0.325622 11.5369 1.8538 11.9067 0.543971 13.1001C-0.765858 14.2934 1.90529 15.7206 1.90529 15.7206C1.90529 15.7206 3.74934 15.1037 4.17004 13.2067C4.59075 11.3097 3.79501 14.6572 4.06189 14.8972C4.32877 15.1372 5.36502 16.7193 6.09828 14.6159C6.83154 12.5124 6.10544 11.6968 7.07433 10.4554C8.04322 9.2139 8.70195 7.20591 8.67309 6.8549C8.64423 6.50389 9.78138 3.30092 8.03106 2.05178C6.28075 0.802638 4.48476 0 4.48476 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.07%"
            bottom="72.28%"
            left="39.2%"
            right="52.05%"
            {...getOverrideProps(overrides, "Vector38512249")}
          ></Icon>
          <Icon
            width="5.78px"
            height="4.95px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 5.781263828277588,
              height: 4.952210426330566,
            }}
            paths={[
              {
                d: "M1.05335 0.933055L0 4.95221L5.78126 4.95221L3.87754 0L1.05335 0.933055Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.22%"
            bottom="77.59%"
            left="43.19%"
            right="51.19%"
            {...getOverrideProps(overrides, "Vector38512250")}
          ></Icon>
          <Icon
            width="5.78px"
            height="4.95px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 5.781263828277588,
              height: 4.952210426330566,
            }}
            paths={[
              {
                d: "M1.05335 0.933055L0 4.95221L5.78126 4.95221L3.87754 0L1.05335 0.933055Z",
                fill: "rgba(0,0,0,0.1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.22%"
            bottom="77.59%"
            left="43.19%"
            right="51.19%"
            {...getOverrideProps(overrides, "Vector38512251")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="7.32px"
            height="26.14px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="24.64%"
            bottom="42.69%"
            left="49.94%"
            right="42.95%"
            {...getOverrideProps(overrides, "Group38512252")}
          >
            <Icon
              width="2.63px"
              height="8.66px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.633517026901245,
                height: 8.663457870483398,
              }}
              paths={[
                {
                  d: "M2.62635 6.39413C2.70098 7.59548 2.18405 8.61061 1.47184 8.66147C0.759625 8.71233 0.121969 7.77975 0.0474611 6.57796C0.0115647 6.09833 0.0831829 5.61645 0.256336 5.17263L0 0.0781747L2.22958 0L2.24556 5.03053C2.47212 5.4459 2.60269 5.91348 2.62635 6.39413Z",
                  fill: "rgba(160,97,106,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="66.86%"
              bottom="0%"
              left="55.84%"
              right="8.18%"
              {...getOverrideProps(
                overrides,
                "uuid-30591428-cd87-4ca8-90c0-8a5e265d7e31-841"
              )}
            ></Icon>
            <Icon
              width="7.32px"
              height="21.35px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.319092750549316,
                height: 21.34759521484375,
              }}
              paths={[
                {
                  d: "M0 3.99828C0 3.99828 0.123297 0.251511 1.45152 0.0215063C2.77974 -0.208498 4.57559 1.48221 4.57559 1.48221L7.31909 13.6819L6.90051 21.3476L3.89781 21.1655L3.19309 13.9029L0 3.99828Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="18.33%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512254")}
            ></Icon>
          </View>
          <Icon
            width="16.07px"
            height="26.13px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.07326889038086,
              height: 26.13308334350586,
            }}
            paths={[
              {
                d: "M2.96497 1.27807e-06L8.41939 1.27807e-06L14.3567 4.35552L16.0733 19.5998L15.137 22.6152L13.4204 26.1331C13.4204 26.1331 15.137 18.4272 10.9236 21.4425C10.8814 21.4727 10.8397 21.5026 10.7983 21.5322C8.08612 23.4769 4.50732 23.2772 1.9967 21.0423L0 19.2648L1.09236 13.4016L0.234077 2.59656L2.96497 1.27807e-06Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20.73%"
            bottom="46.6%"
            left="39.86%"
            right="44.53%"
            {...getOverrideProps(overrides, "Vector38512255")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="18.5px"
            height="19.24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="21.36%"
            bottom="54.59%"
            left="26.98%"
            right="55.07%"
            {...getOverrideProps(overrides, "Group38512256")}
          >
            <Icon
              width="7.24px"
              height="6.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.243957996368408,
                height: 6.586740016937256,
              }}
              paths={[
                {
                  d: "M2.58751 5.92755C1.71269 6.68103 0.641418 6.80722 0.194821 6.20949C-0.251775 5.61175 0.0954306 4.5166 0.970658 3.76298C1.31643 3.45679 1.72548 3.24395 2.16358 3.14226L5.90779 0L7.24396 1.91761L3.41097 4.81173C3.22344 5.24893 2.94107 5.63155 2.58751 5.92755Z",
                  fill: "rgba(160,97,106,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="65.76%"
              bottom="0%"
              left="0%"
              right="60.83%"
              {...getOverrideProps(
                overrides,
                "uuid-53b096d6-03cc-438c-8f9a-f5acbbdd06bd-842"
              )}
            ></Icon>
            <Icon
              width="15.46px"
              height="17.3px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 15.455525398254395,
                height: 17.29989242553711,
              }}
              paths={[
                {
                  d: "M10.8802 1.29368C10.8802 1.29368 13.8124 -0.742871 14.7485 0.294481C15.6846 1.33183 15.4214 3.88041 15.4214 3.88041L7.67442 13.2796L1.58002 17.2999L0 14.5528L5.14346 9.77461L10.8802 1.29368Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="10.08%"
              left="16.44%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512258")}
            ></Icon>
          </View>
          <Icon
            width="6.96px"
            height="7.47px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 6.963195323944092,
              height: 7.474939346313477,
            }}
            paths={[
              {
                d: "M3.4816 7.47494C5.40443 7.47494 6.9632 5.80162 6.9632 3.73747C6.9632 1.67332 5.40443 0 3.4816 0C1.55877 0 0 1.67332 0 3.73747C0 5.80162 1.55877 7.47494 3.4816 7.47494Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="9.13%"
            bottom="81.53%"
            left="42.17%"
            right="51.07%"
            {...getOverrideProps(overrides, "Vector38512259")}
          ></Icon>
          <Icon
            width="8.02px"
            height="16.74px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.022626876831055,
              height: 16.743526458740234,
            }}
            paths={[
              {
                d: "M0.267336 1.8354C0.267336 1.8354 -0.245582 0 0.609288 0C1.46416 0 4.88363 0.18354 5.22558 0.550618C5.56753 0.917695 9.61382 4.60177 7.22019 7.53839C4.82656 10.475 7.22019 11.8939 7.22019 11.8939C7.22019 11.8939 8.987 16.335 7.27726 16.7021C5.56753 17.0691 -1.44564 14.9702 0.267341 11.563C2.12628 7.86541 2.99118 2.02942 0.267336 1.8354Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.38%"
            bottom="70.69%"
            left="43.61%"
            right="48.6%"
            {...getOverrideProps(overrides, "Vector38512260")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="12.49px"
            height="15.89px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="35.82%"
            bottom="44.32%"
            left="87.5%"
            right="0.38%"
            {...getOverrideProps(overrides, "Group38512261")}
          >
            <Icon
              width="9.44px"
              height="11.35px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.436080932617188,
                height: 11.348088264465332,
              }}
              paths={[
                {
                  d: "M8.97825 2.78327C8.92297 2.60171 8.50405 2.68164 8.46383 2.51924C8.42375 2.35743 8.82573 2.22174 9.13403 1.76573C9.18963 1.6835 9.53999 1.16528 9.40561 0.947312C9.15091 0.534167 7.3788 1.56315 6.95343 0.985719C6.86007 0.858997 6.82166 0.641445 6.54356 0.236573C6.43292 0.0755074 6.36194 -0.0022521 6.27713 4.96204e-05C6.1568 0.00331291 6.11374 0.164919 5.92461 0.457657C5.64097 0.896676 5.53861 0.841558 5.35176 1.20127C5.21305 1.4683 5.19662 1.63892 5.09659 1.64898C4.95504 1.66321 4.89655 1.33075 4.7236 1.31785C4.5471 1.30469 4.37049 1.6332 4.28294 1.88985C4.11864 2.37149 4.22038 2.73962 4.24294 3.1065C4.26745 3.50521 4.2099 4.08885 3.80635 4.83796L0 11.3481C0.817451 10.0209 3.13788 6.40194 4.07277 5.07448C4.34266 4.69127 4.63268 4.30647 5.07908 4.23408C5.50886 4.16438 6.0318 4.39264 6.7617 4.37935C6.84694 4.3778 7.08417 4.37024 7.14187 4.23526C7.18958 4.12366 7.07113 4.02664 7.11422 3.92174C7.17202 3.78104 7.43206 3.84141 7.78645 3.74796C8.03635 3.68207 8.20612 3.5732 8.35212 3.47957C8.39613 3.45135 9.05183 3.02497 8.97825 2.78327Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27.58%"
              bottom="0.99%"
              left="24.44%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512262")}
            ></Icon>
            <Icon
              width="3.39px"
              height="7.96px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.3864376544952393,
                height: 7.956695556640625,
              }}
              paths={[
                {
                  d: "M2.06107 0.755046C1.96211 0.731777 1.87779 0.975559 1.79193 0.949893C1.70638 0.924323 1.76034 0.673379 1.64081 0.379368C1.61925 0.326348 1.4834 -0.00777371 1.34497 0.000138245C1.08259 0.0151279 1.04174 1.24571 0.655 1.30322C0.570128 1.31585 0.459576 1.27331 0.194228 1.30302C0.0886656 1.31484 0.0326311 1.3298 0.00921255 1.37515C-0.0240154 1.43949 0.0374444 1.50881 0.116717 1.69291C0.2356 1.96903 0.180869 2.00706 0.291417 2.20929C0.373483 2.35942 0.44675 2.41731 0.422485 2.47291C0.388154 2.5516 0.219274 2.48649 0.163473 2.57389C0.106533 2.66309 0.205764 2.85092 0.297846 2.97111C0.470649 3.19664 0.66832 3.24925 0.842568 3.34323C1.03193 3.44535 1.28217 3.64407 1.50822 4.07284L3.38644 7.9567C3.01552 7.14308 2.03041 4.8763 1.69324 4.00071C1.5959 3.74794 1.50365 3.48411 1.59935 3.22802C1.69149 2.98147 1.94674 2.77181 2.15127 2.38341C2.17516 2.33805 2.24014 2.21087 2.19508 2.14152C2.15783 2.08419 2.07929 2.11861 2.04376 2.06563C1.99611 1.99458 2.09874 1.87499 2.15827 1.66131C2.20024 1.51063 2.19945 1.38977 2.19877 1.28583C2.19856 1.2545 2.1928 0.786018 2.06107 0.755046Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="49.91%"
              bottom="0%"
              left="0%"
              right="72.88%"
              {...getOverrideProps(overrides, "Vector38512263")}
            ></Icon>
            <Icon
              width="2.88px"
              height="2.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.8791632652282715,
                height: 2.209907293319702,
              }}
              paths={[
                {
                  d: "M0 2.2099L0.0590335 1.62478L0.0952461 1.58801C0.262772 1.41805 0.367569 1.23799 0.406882 1.05266C0.413138 1.0232 0.417982 0.993396 0.42294 0.963046C0.442545 0.842738 0.46689 0.69318 0.574639 0.537838C0.63494 0.451291 0.794451 0.255682 0.958966 0.324006C1.00337 0.341872 1.03333 0.372774 1.05415 0.405537C1.05938 0.399847 1.06474 0.394183 1.07046 0.38803C1.14153 0.313896 1.19124 0.286739 1.23913 0.260586C1.27593 0.24046 1.31392 0.219756 1.37822 0.164546C1.40643 0.14034 1.42902 0.118548 1.44805 0.100246C1.50578 0.0449128 1.57962 -0.0198777 1.68076 0.00578633C1.78797 0.0372449 1.82473 0.147031 1.84912 0.219713C1.89267 0.349355 1.90609 0.438508 1.91496 0.497635C1.91816 0.519235 1.92186 0.543558 1.92467 0.551465C1.94813 0.614955 2.24271 0.631377 2.35355 0.638239C2.6027 0.652751 2.81829 0.665309 2.87014 0.848444C2.90734 0.979459 2.82981 1.12236 2.63305 1.28446C2.57176 1.33489 2.51048 1.3697 2.4571 1.39569C2.48994 1.42902 2.5161 1.47434 2.5177 1.53607C2.5213 1.68219 2.3817 1.79431 2.10278 1.8699C2.03346 1.88889 1.94023 1.91402 1.81823 1.90767C1.76077 1.90462 1.71045 1.89518 1.66754 1.88635C1.66114 1.9126 1.64941 1.93988 1.62826 1.96578C1.56618 2.04206 1.46592 2.06146 1.32984 2.01846C1.1796 1.97352 1.0609 1.9124 0.956156 1.85868C0.864663 1.81189 0.785778 1.77187 0.719584 1.76094C0.596469 1.74246 0.481665 1.82406 0.344276 1.93266L0 2.2099Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="46.72%"
              bottom="39.37%"
              left="31.51%"
              right="45.44%"
              {...getOverrideProps(overrides, "Vector38512264")}
            ></Icon>
            <Icon
              width="2.41px"
              height="2.76px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.4124109745025635,
                height: 2.7553532123565674,
              }}
              paths={[
                {
                  d: "M2.41239 2.66824L1.87018 2.75535L1.82787 2.72708C1.63222 2.59623 1.44339 2.53308 1.26643 2.53927C1.23829 2.54025 1.21021 2.54278 1.1816 2.54533C1.06822 2.55548 0.92729 2.56815 0.759987 2.49567C0.666703 2.455 0.449983 2.33898 0.46982 2.15082C0.474656 2.10019 0.494896 2.06123 0.519139 2.0313C0.512681 2.02732 0.506226 2.02319 0.499232 2.01881C0.414407 1.96382 0.377322 1.91908 0.341609 1.87599C0.314141 1.84289 0.285846 1.80869 0.21979 1.75592C0.190822 1.73277 0.165456 1.71484 0.144136 1.69972C0.0796321 1.65382 0.00252803 1.59357 0 1.48204C0.00115166 1.36273 0.090756 1.29671 0.15006 1.25295C0.255832 1.17485 0.332756 1.1383 0.383784 1.11409C0.402436 1.10529 0.423422 1.09527 0.429836 1.09035C0.481092 1.04988 0.421163 0.739833 0.399233 0.622999C0.349114 0.360607 0.305749 0.133557 0.457619 0.0332694C0.566239 -0.0385915 0.714659 0.00567191 0.910628 0.168868C0.971616 0.219717 1.01852 0.274515 1.05549 0.323354C1.07719 0.280807 1.11139 0.242143 1.16661 0.22483C1.29736 0.184025 1.43381 0.300549 1.57266 0.571001C1.60736 0.638155 1.65365 0.728589 1.67887 0.856881C1.6907 0.917314 1.69495 0.97197 1.69788 1.01877C1.72316 1.01875 1.75072 1.02402 1.77942 1.03941C1.86391 1.08452 1.90682 1.18371 1.90259 1.33592C1.9002 1.50332 1.87524 1.64209 1.85339 1.76448C1.83444 1.87135 1.81839 1.96342 1.82533 2.03492C1.83991 2.16745 1.94256 2.26596 2.07527 2.38108L2.41239 2.66824Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="22.86%"
              bottom="59.8%"
              left="20.06%"
              right="60.62%"
              {...getOverrideProps(overrides, "Vector38512265")}
            ></Icon>
            <Icon
              width="2.88px"
              height="2.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.8791632652282715,
                height: 2.209907054901123,
              }}
              paths={[
                {
                  d: "M0 2.2099L0.0590335 1.62478L0.0952461 1.58802C0.262772 1.41805 0.367569 1.23799 0.406882 1.05266C0.413138 1.0232 0.417982 0.993395 0.42294 0.963046C0.442545 0.842738 0.46688 0.693179 0.574629 0.537838C0.63493 0.451291 0.794451 0.255682 0.958966 0.324006C1.00337 0.341872 1.03333 0.372774 1.05415 0.405537C1.05938 0.399846 1.06474 0.394183 1.07046 0.38803C1.14153 0.313896 1.19124 0.286739 1.23913 0.260586C1.27593 0.24046 1.31392 0.219755 1.37822 0.164546C1.40643 0.140339 1.42902 0.11855 1.44805 0.100249C1.50578 0.0449152 1.57962 -0.0198779 1.68076 0.00578616C1.78797 0.0372447 1.82473 0.147031 1.84912 0.219713C1.89267 0.349355 1.90609 0.438507 1.91496 0.497635C1.91816 0.519235 1.92186 0.543561 1.92467 0.551468C1.94813 0.614958 2.24271 0.631377 2.35355 0.638239C2.6027 0.652751 2.81829 0.665309 2.87014 0.848444C2.90734 0.979459 2.82981 1.12236 2.63305 1.28446C2.57176 1.33489 2.51048 1.3697 2.4571 1.39569C2.48994 1.42902 2.5161 1.47434 2.5177 1.53607C2.5213 1.68219 2.3817 1.79431 2.10278 1.8699C2.03346 1.88889 1.94023 1.91403 1.81823 1.90768C1.76077 1.90463 1.71045 1.89518 1.66754 1.88635C1.66114 1.9126 1.64941 1.93989 1.62826 1.96578C1.56618 2.04207 1.46592 2.06146 1.32984 2.01846C1.1796 1.97352 1.0609 1.9124 0.956156 1.85868C0.864663 1.81189 0.785778 1.77188 0.719584 1.76095C0.596469 1.74246 0.481665 1.82406 0.344276 1.93266L0 2.2099Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="14.74%"
              bottom="71.35%"
              left="39.96%"
              right="36.98%"
              {...getOverrideProps(overrides, "Vector38512266")}
            ></Icon>
            <Icon
              width="2.3px"
              height="13.82px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.3042490482330322,
                height: 13.818690299987793,
              }}
              paths={[
                {
                  d: "M0.234263 13.8187L0.138398 13.717L0.00514901 13.7019C0.0057857 13.6885 0.0049147 13.657 0.00393938 13.6079C-0.0011869 13.3387 -0.017099 12.5195 0.0891656 11.2607C0.163366 10.3821 0.28736 9.49015 0.457701 8.60933C0.628328 7.72713 0.805405 7.07072 0.947637 6.54313C1.05498 6.14521 1.16332 5.76779 1.26908 5.40016C1.55133 4.41794 1.81783 3.49012 1.98286 2.43181C2.01981 2.19557 2.09651 1.70379 1.93947 1.12336C1.84836 0.786718 1.69236 0.46985 1.47564 0.181844L1.68539 0C1.92453 0.318257 2.09705 0.66918 2.19824 1.04295C2.37235 1.68651 2.28878 2.22236 2.24863 2.47982C2.08066 3.55682 1.8115 4.49356 1.52648 5.48523C1.42126 5.85154 1.31327 6.22731 1.2064 6.62361C1.06545 7.1463 0.889958 7.79701 0.721552 8.66788C0.553132 9.53816 0.430728 10.4192 0.35735 11.2868C0.252493 12.5296 0.268252 13.3367 0.27341 13.6018C0.276075 13.7433 0.276642 13.773 0.234263 13.8187Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.24%"
              bottom="0.78%"
              left="24.01%"
              right="57.54%"
              {...getOverrideProps(overrides, "Vector38512267")}
            ></Icon>
            <Icon
              width="2.1px"
              height="2.47px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.104933500289917,
                height: 2.4731698036193848,
              }}
              paths={[
                {
                  d: "M0.674815 2.45851C0.66403 2.45593 0.653176 2.45304 0.642307 2.44957C0.421091 2.38301 0.243644 2.18947 0.114749 1.87446C0.0544195 1.72633 0.0401749 1.57043 0.0117783 1.25952C0.00731993 1.21157 -0.0123681 0.969006 0.0118355 0.647535C0.0275826 0.437467 0.0486191 0.353095 0.101872 0.28685C0.161009 0.213044 0.240686 0.170776 0.324881 0.149556C0.327157 0.121743 0.33563 0.0945489 0.352445 0.0687693C0.421707 -0.0382021 0.537646 0.00576204 0.600551 0.0286352C0.632245 0.0408541 0.671735 0.0563853 0.716161 0.0644162C0.785977 0.0773721 0.827672 0.0642013 0.890776 0.0445881C0.951156 0.0257689 1.02624 0.00236755 1.13001 0.00435433C1.33477 0.00737472 1.48635 0.106169 1.53633 0.13868C1.79958 0.308481 1.89047 0.579383 1.99565 0.893056C2.01655 0.955931 2.08592 1.18319 2.10207 1.47584C2.11373 1.68697 2.08795 1.77339 2.0584 1.83518C1.99804 1.96223 1.90562 2.02112 1.67623 2.14502C1.43658 2.27486 1.31634 2.33982 1.21776 2.37322C0.988346 2.45053 0.844285 2.49909 0.674815 2.45851Z",
                  fill: "rgba(242,242,242,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="84.43%"
              left="25.81%"
              right="57.33%"
              {...getOverrideProps(overrides, "Vector38512268")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="5.66px"
            height="8.1px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="33.47%"
            bottom="56.41%"
            left="24.93%"
            right="69.58%"
            {...getOverrideProps(overrides, "Group38512269")}
          >
            <Icon
              width="5.05px"
              height="6.9px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.050974369049072,
                height: 6.900698661804199,
              }}
              paths={[
                {
                  d: "M0.17623 6.3188L0.000160387 0.356292C-0.00269691 0.259511 0.0327359 0.165285 0.0974066 0.0977764C0.162113 0.0302341 0.25089 -0.00518159 0.340994 0.000614594L4.74852 0.284388C4.83757 0.29007 4.92112 0.335781 4.97774 0.409744C5.0344 0.483672 5.06004 0.580471 5.0481 0.675323L4.30249 6.60155C4.27993 6.78087 4.13056 6.91192 3.96241 6.89994L0.476567 6.65248C0.441203 6.64997 0.407525 6.64151 0.376337 6.62797C0.261213 6.57798 0.180382 6.45919 0.17623 6.3188Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="14.77%"
              bottom="0%"
              left="4.04%"
              right="6.66%"
              {...getOverrideProps(overrides, "Vector38512270")}
            ></Icon>
            <Icon
              width="5.66px"
              height="2.05px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.65586519241333,
                height: 2.0539820194244385,
              }}
              paths={[
                {
                  d: "M0.233961 0.99472C0.295624 0.987748 0.378224 0.979178 0.477388 0.970237C0.450878 0.917244 0.440028 0.85458 0.451362 0.790259L0.530074 0.343641C0.550502 0.227729 0.637496 0.138867 0.74642 0.123229C1.39539 0.0300732 3.62755 -0.222667 5.03309 0.461865C5.12103 0.504697 5.1776 0.59874 5.1804 0.702353L5.19326 1.17882C5.19484 1.23774 5.1789 1.29234 5.15095 1.33761C5.2678 1.37134 5.38427 1.40701 5.4998 1.4459C5.5722 1.47027 5.62402 1.53886 5.63272 1.61978L5.65456 1.82273C5.66841 1.95151 5.57006 2.06224 5.44957 2.0535L0.180299 1.67149C0.0603863 1.6628 -0.0231257 1.53996 0.00572974 1.41472L0.0664396 1.15124C0.0859975 1.06635 0.152953 1.00388 0.233961 0.99472Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="74.63%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512271")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="5.66px"
            height="8.1px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.32%"
            bottom="77.56%"
            left="12.05%"
            right="82.45%"
            {...getOverrideProps(overrides, "Group38512272")}
          >
            <Icon
              width="5.05px"
              height="6.9px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.050976276397705,
                height: 6.900698184967041,
              }}
              paths={[
                {
                  d: "M0.176231 6.31879L0.000160377 0.356292C-0.00269692 0.259511 0.0327383 0.165285 0.097409 0.0977764C0.162116 0.0302341 0.250891 -0.00518159 0.340995 0.000614594L4.74852 0.284388C4.83757 0.29007 4.92112 0.335779 4.97774 0.409743C5.0344 0.483671 5.06004 0.580471 5.04811 0.675323L4.30249 6.60156C4.27994 6.78087 4.13056 6.91192 3.96241 6.89994L0.476569 6.65249C0.441205 6.64997 0.407526 6.64152 0.376337 6.62797C0.261214 6.57798 0.180384 6.45919 0.176231 6.31879Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="14.77%"
              bottom="0%"
              left="4.04%"
              right="6.66%"
              {...getOverrideProps(overrides, "Vector38512273")}
            ></Icon>
            <Icon
              width="5.66px"
              height="2.05px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.6558637619018555,
                height: 2.053981304168701,
              }}
              paths={[
                {
                  d: "M0.233961 0.994719C0.295624 0.987747 0.378224 0.979176 0.477388 0.970235C0.450878 0.917242 0.440029 0.854578 0.451363 0.790258L0.530073 0.34364C0.550502 0.227728 0.637496 0.138867 0.74642 0.123229C1.39539 0.0300732 3.62755 -0.222667 5.03309 0.461865C5.12103 0.504697 5.1776 0.598739 5.1804 0.702352L5.19326 1.17882C5.19484 1.23774 5.1789 1.29234 5.15095 1.33761C5.2678 1.37134 5.38426 1.40701 5.4998 1.4459C5.5722 1.47027 5.62402 1.53886 5.63272 1.61978L5.65456 1.82273C5.66841 1.95151 5.57006 2.06224 5.44957 2.0535L0.180299 1.67149C0.0603863 1.6628 -0.0231257 1.53996 0.00572973 1.41472L0.0664396 1.15124C0.0859974 1.06635 0.152953 1.00388 0.233961 0.994719Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="74.63%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512274")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="5.66px"
            height="8.1px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="35.35%"
            bottom="54.53%"
            left="79.17%"
            right="15.34%"
            {...getOverrideProps(overrides, "Group38512275")}
          >
            <Icon
              width="5.05px"
              height="6.9px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.050976753234863,
                height: 6.900698661804199,
              }}
              paths={[
                {
                  d: "M0.176232 6.3188L0.000160387 0.356292C-0.00269691 0.259511 0.0327359 0.165285 0.0974066 0.0977764C0.162113 0.0302341 0.250894 -0.00518159 0.340998 0.000614594L4.74853 0.284388C4.83757 0.29007 4.92111 0.335781 4.97774 0.409744C5.0344 0.483672 5.06004 0.580471 5.04811 0.675323L4.30249 6.60155C4.27993 6.78087 4.13056 6.91192 3.96242 6.89994L0.476572 6.65248C0.441207 6.64997 0.407523 6.64151 0.376335 6.62797C0.261211 6.57798 0.180385 6.45919 0.176232 6.3188Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="14.77%"
              bottom="0%"
              left="4.04%"
              right="6.66%"
              {...getOverrideProps(overrides, "Vector38512276")}
            ></Icon>
            <Icon
              width="5.66px"
              height="2.05px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.6558685302734375,
                height: 2.0539820194244385,
              }}
              paths={[
                {
                  d: "M0.233958 0.99472C0.295622 0.987748 0.378224 0.979178 0.477388 0.970237C0.450878 0.917244 0.440033 0.85458 0.451367 0.790259L0.530078 0.343641C0.550507 0.227729 0.637497 0.138867 0.74642 0.123229C1.39539 0.0300732 3.62755 -0.222667 5.03309 0.461865C5.12103 0.504697 5.1776 0.59874 5.1804 0.702353L5.19326 1.17882C5.19484 1.23774 5.1789 1.29234 5.15095 1.33761C5.2678 1.37134 5.38427 1.40701 5.4998 1.4459C5.5722 1.47027 5.62402 1.53886 5.63272 1.61978L5.65456 1.82273C5.66842 1.95151 5.57006 2.06224 5.44958 2.0535L0.180297 1.67149C0.060384 1.6628 -0.0231256 1.53996 0.00572985 1.41472L0.0664397 1.15124C0.0859976 1.06635 0.152951 1.00388 0.233958 0.99472Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="74.63%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512277")}
            ></Icon>
          </View>
        </View>
        <SelectField
          width="387px"
          height="72px"
          label="Enfrenta dificuldades em algum dos seguintes aspectos? (Selecione todas que se aplicam)"
          placeholder="Sensorial"
          position="absolute"
          top="calc(50% - 36px - 203.46px)"
          left="17.87%"
          right="18.68%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField3857391")}
        >
          {aspectos.map((aspectos) => (
            <option key={aspectos} value={aspectos}>
              {aspectos}
            </option>
          ))}
        </SelectField>
        <SelectField
          width="387px"
          height="unset"
          label="Qual ambiente de trabalho você prefere?"
          placeholder="Presencial"
          position="absolute"
          top="calc(50% - 34.5px - 95.96px)"
          left="17.87%"
          right="18.68%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField3857392")}
        >
          {ambiente.map((ambiente) => (
            <option key={ambiente} value={ambiente}>
              {ambiente}
            </option>
          ))}
        </SelectField>
        <SelectField
          width="387px"
          height="unset"
          label="Já teve experiências de trabalho ou estágio?"
          placeholder="Sim"
          position="absolute"
          top="calc(50% - 34.5px - 3.96px)"
          left="17.87%"
          right="18.68%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField3857393")}
        >
          {negativa.map((negativa) => (
            <option key={negativa} value={negativa}>
              {negativa}
            </option>
          ))}
        </SelectField>
        <SelectField
          width="387px"
          height="unset"
          label="Se sim, quais foram as maiores dificuldades enfrentadas no seu ambiente de trabalho anterior?"
          placeholder="Falta de recursos"
          position="absolute"
          top="calc(50% - 45px - -105.54px)"
          left="17.87%"
          right="18.68%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField3857419")}
        >
          {dificuldades.map((dificuldades) => (
            <option key={dificuldades} value={dificuldades}>
              {dificuldades}
            </option>
          ))}
        </SelectField>
        <SelectField
          width="387px"
          height="unset"
          label="Quais são suas principais habilidades profissionais?"
          placeholder="Criatividade"
          position="absolute"
          top="calc(50% - 45px - -230.54px)"
          left="17.87%"
          right="18.68%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField3857428")}
        >
          {habilidades.map((habilidades) => (
            <option key={habilidades} value={habilidades}>
              {habilidades}
            </option>
          ))}
        </SelectField>
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
        top="calc(50% - 25.66px - 120.84px)"
        left="38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Questionário"
        {...getOverrideProps(overrides, "Question\u00E1rio")}
      ></Text>
      <Button
        width="102px"
        height="unset"
        position="absolute"
        top="1028px"
        left="595px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Voltar"
        onClick={() => navigate("/CadastroUsuario3")}
        {...getOverrideProps(overrides, "Button3857478")}
      ></Button>
      <Button
        width="100px"
        height="unset"
        position="absolute"
        top="1029px"
        left="823px"
        backgroundColor="rgba(234,191,62,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Continuar"
        onClick={() => navigate("/CadastroUsuario5")}
        {...getOverrideProps(overrides, "Button3857479")}
      ></Button>
    </View>
  );
}
