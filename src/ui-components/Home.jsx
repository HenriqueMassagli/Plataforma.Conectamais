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
  Flex,
  Icon,
  Image,
  Text,
  View,
  SelectField,
} from "@aws-amplify/ui-react";
export default function Home(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate();
  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const cargos = [
    "Administrador",
    "Engenheiro de Software",
    "Analista de Dados",
    "Médico Veterinário",
    "Designer Gráfico",
    "Arquiteto",
    "Consultor Financeiro",
    "Professor de Inglês",
    "Chefe de Cozinha",
    "Motorista de Caminhão",
    "Analista de Marketing Digital",
    "Enfermeiro",
    "Advogado",
    "Técnico em Informática",
    "Psicólogo",
    "Engenheiro Civil",
    "Gerente de Projetos",
    "Recepcionista",
    "Especialista em Recursos Humanos (RH)",
    "Fotógrafo Profissional",
    "Cientista de Dados",
    "Vendedor Externo",
    "Técnico em Eletrônica",
    "Barista",
    "Desenvolvedor de Jogos",
    "Auditor Contábil",
    "Personal Trainer",
    "Piloto de Avião",
    "Engenheiro Mecânico",
    "Instrutor de Yoga",
    "Tradutor e Intérprete",
    "Desenvolvedor Front-End",
    "Gestor de Mídias Sociais",
    "Técnico em Enfermagem",
    "Zelador",
    "Analista de Suporte Técnico",
    "Corretor de Imóveis",
    "Biólogo",
    "Esteticista",
    "Cabeleireiro",
    "Especialista em Segurança da Informação",
    "Atendente de Loja",
    "Consultor de Negócios",
    "Desenhista Industrial",
    "Nutricionista",
    "Engenheiro de Produção",
    "Chef Pâtissier",
    "Artesão",
    "Publicitário",
    "Jornalista",
  ];

  const categorias = [
    "Varejista",
    "Empresarial",
    "Tecnologia da Informação (TI)",
    "Educação",
    "Saúde",
    "Engenharia",
    "Construção Civil",
    "Marketing e Publicidade",
    "Recursos Humanos (RH)",
    "Turismo e Hospitalidade",
    "Financeiro",
    "Logística e Transporte",
    "Alimentação e Bebidas",
    "Arte e Entretenimento",
    "Jurídico",
    "Ciências e Pesquisa",
    "Agronegócio",
    "Mídias e Comunicações",
    "Segurança e Defesa",
    "Serviços Domésticos e Manutenção",
    "Energia e Meio Ambiente",
    "Comércio Exterior e Relações Internacionais",
    "Moda e Beleza",
    "Esportes e Atividades Físicas",
    "Indústria Automotiva",
    "Consultoria e Estratégia",
    "Desenvolvimento Imobiliário",
    "Setor Público e Governamental",
    "Tecnologias Limpas e Sustentáveis",
  ];
  return (
    <View
      width="100vw"
      height="2263px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Home")}
      {...rest}
    >
      <View
        width="1546px"
        height="1519px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="408px"
        left="1519px"
        transformOrigin="top left"
        transform="rotate(90deg)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Fundo Novo")}
      ></View>
      <Flex
        width="124.75px"
        height="unset"
        {...getOverrideProps(overrides, "Button38512593")}
      ></Flex>
      <Flex
        width="124.75px"
        height="unset"
        {...getOverrideProps(overrides, "Button38512594")}
      ></Flex>
      <Flex
        width="64.87px"
        height="unset"
        {...getOverrideProps(overrides, "Button38512596")}
      ></Flex>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/Frame%20436.jpg?raw=true"
        width="100vw"
        height="338px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="70px"
        left="-1px"
        padding="0px 0px 0px 0px"
        objectFit="unset"
        {...getOverrideProps(overrides, "BackgroundDaHome")}
      ></Image>
      <Text
        fontSize="32px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="48px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="864px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="123px"
        left="90px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Conecte-se com oportunidades que valorizam suas habilidades"
        {...getOverrideProps(
          overrides,
          "Conecte-se com oportunidades que valorizam suas habilidades"
        )}
      ></Text>
      <Text
        fontSize="34px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="41.44599914550781px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="297px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="481px"
        left="102px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sobre nós"
        {...getOverrideProps(overrides, "Sobre n\u00F3s n\u00F3s")}
      ></Text>
      <Text
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="36px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="825px"
        height="230px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="564px"
        left="102px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sabemos que pessoas com TEA possuem certas limitações, como a necessidade de interfaces mais simples e menos sobrecarregadas de informação.&#xA;Assim, criamos a Conecta+, uma plataforma que conecta empregadores e candidatos com TEA, promovendo a inclusão no mercado de trabalho. &#xA;"
        {...getOverrideProps(
          overrides,
          "Sabemos que pessoas com TEA possuem certas limita\u00E7\u00F5es, como a necessidade de interfaces mais simples e menos sobrecarregadas de informa\u00E7\u00E3o. Assim, criamos a Conecta+, uma plataforma que conecta empregadores e candidatos com TEA, promovendo a inclus\u00E3o no mercado de trabalho."
        )}
      ></Text>
      <Text
        fontSize="34px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="51px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="906px"
        left="102px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Categorias de vagas"
        {...getOverrideProps(overrides, "Categorias de vagas")}
      ></Text>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/SobreNosimg.png?raw=true"
        width="372px"
        height="266px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="523px"
        left="1035px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Frame 432 1")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="1089.33px"
        height="190.02px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1024px"
        left="215px"
        {...getOverrideProps(overrides, "Group 468")}
      >
        <View
          width="225px"
          height="190px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.02px"
          left="79px"
          transformOrigin="top left"
          transform="rotate(-0.01deg)"
          borderRadius="27px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(38,25,13,1)"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/Vagas")}
          {...getOverrideProps(overrides, "Rectangle 112")}
        ></View>
        <Icon
          width="225px"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/Vagas")}
          height="190px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 225.01085900225007,
            height: 190.02128842643287,
          }}
          paths={[
            {
              d: "M0 27C0 12.0883 12.0883 0 27 0L198 0C212.912 0 225 12.0883 225 27L225 163C225 177.912 212.912 190 198 190L27 190C12.0883 190 0 177.912 0 163L0 27Z",
              fill: "rgba(38,25,13,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.02px"
          left="432px"
          transformOrigin="top left"
          transform="rotate(-0.01deg)"
          {...getOverrideProps(overrides, "image")}
        ></Icon>
        <Text
          fontSize="20px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="68.34px"
          height="33.09px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="118.01px"
          left="calc(50% - 34.17px - -0.51px)"
          transformOrigin="top left"
          transform="rotate(-0.01deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Saúde"
          {...getOverrideProps(overrides, "Sa\u00FAde")}
        ></Text>
        <Text
          fontSize="20px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="122px"
          height="33.09px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="118.01px"
          left="131px"
          transformOrigin="top left"
          transform="rotate(-0.01deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tecnologia"
          {...getOverrideProps(overrides, "Tecnologia")}
        ></Text>
        <Icon
          width="30px"
          height="30px"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
          paths={[
            {
              d: "M7.5 30L7.5 22.5L0 22.5L0 7.5L7.5 7.5L7.5 0L22.5 0L22.5 7.5L30 7.5L30 22.5L22.5 22.5L22.5 30L7.5 30ZM3 13.5L10.5 13.5C10.75 13.5 10.9875 13.5625 11.2125 13.6875C11.4375 13.8125 11.6125 13.975 11.7375 14.175L13.05 16.125L15.075 10.05C15.175 9.75 15.3563 9.5 15.6188 9.3C15.8813 9.1 16.175 9 16.5 9C16.75 9 16.9875 9.0625 17.2125 9.1875C17.4375 9.3125 17.6125 9.475 17.7375 9.675L20.2875 13.5L27 13.5L27 10.5L19.5 10.5L19.5 3L10.5 3L10.5 10.5L3 10.5L3 13.5ZM10.5 27L19.5 27L19.5 19.5L27 19.5L27 16.5L19.5 16.5C19.25 16.5 19.0125 16.4375 18.7875 16.3125C18.5625 16.1875 18.375 16.025 18.225 15.825L16.95 13.875L14.925 19.95C14.825 20.25 14.6375 20.5 14.3625 20.7C14.0875 20.9 13.7875 21 13.4625 21C13.2125 21 12.975 20.9375 12.75 20.8125C12.525 20.6875 12.35 20.525 12.225 20.325L9.675 16.5L3 16.5L3 19.5L10.5 19.5L10.5 27Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="66px"
          left="529.66px"
          {...getOverrideProps(overrides, "Vector38512610")}
        ></Icon>
        <View
          width="225px"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/Vagas")}
          height="190px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.02px"
          left="785px"
          transformOrigin="top left"
          transform="rotate(-0.01deg)"
          borderRadius="27px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(38,25,13,1)"
          {...getOverrideProps(overrides, "Rectangle 94")}
        ></View>
        <Text
          fontSize="20px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="24.3799991607666px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="77px"
          height="46.43px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="112.01px"
          left="859px"
          transformOrigin="top left"
          transform="rotate(-0.01deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Design"
          {...getOverrideProps(overrides, "Design")}
        ></Text>
        <Icon
          width="30px"
          height="30px"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
          paths={[
            {
              d: "M16.6667 30L16.6667 26.6667L20 26.6667L20 30L16.6667 30ZM13.3333 26.6667L13.3333 18.3333L16.6667 18.3333L16.6667 26.6667L13.3333 26.6667ZM26.6667 21.6667L26.6667 15L30 15L30 21.6667L26.6667 21.6667ZM23.3333 15L23.3333 11.6667L26.6667 11.6667L26.6667 15L23.3333 15ZM3.33333 18.3333L3.33333 15L6.66667 15L6.66667 18.3333L3.33333 18.3333ZM0 15L0 11.6667L3.33333 11.6667L3.33333 15L0 15ZM15 3.33333L15 0L18.3333 0L18.3333 3.33333L15 3.33333ZM2.5 7.5L7.5 7.5L7.5 2.5L2.5 2.5L2.5 7.5ZM0 10L0 0L10 0L10 10L0 10ZM2.5 27.5L7.5 27.5L7.5 22.5L2.5 22.5L2.5 27.5ZM0 30L0 20L10 20L10 30L0 30ZM22.5 7.5L27.5 7.5L27.5 2.5L22.5 2.5L22.5 7.5ZM20 10L20 0L30 0L30 10L20 10ZM23.3333 30L23.3333 25L20 25L20 21.6667L26.6667 21.6667L26.6667 26.6667L30 26.6667L30 30L23.3333 30ZM16.6667 18.3333L16.6667 15L23.3333 15L23.3333 18.3333L16.6667 18.3333ZM10 18.3333L10 15L6.66667 15L6.66667 11.6667L16.6667 11.6667L16.6667 15L13.3333 15L13.3333 18.3333L10 18.3333ZM11.6667 10L11.6667 3.33333L15 3.33333L15 6.66667L18.3333 6.66667L18.3333 10L11.6667 10ZM3.75 6.25L3.75 3.75L6.25 3.75L6.25 6.25L3.75 6.25ZM3.75 26.25L3.75 23.75L6.25 23.75L6.25 26.25L3.75 26.25ZM23.75 6.25L23.75 3.75L26.25 3.75L26.25 6.25L23.75 6.25Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="66px"
          left="177px"
          {...getOverrideProps(overrides, "Vector38512613")}
        ></Icon>
        <Icon
          width="30px"
          height="27.45px"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 27.452486038208008 }}
          paths={[
            {
              d: "M1.57895 27.4525L1.57895 20.9706L22.3816 0.915083C22.6974 0.610055 23.0526 0.381285 23.4474 0.228771C23.8421 0.0762569 24.2368 0 24.6316 0C25.0526 0 25.4539 0.0762569 25.8355 0.228771C26.2171 0.381285 26.5526 0.610055 26.8421 0.915083L29.0526 3.05028C29.3684 3.32989 29.6053 3.65398 29.7632 4.02255C29.9211 4.39113 30 4.77877 30 5.18547C30 5.56675 29.9211 5.94804 29.7632 6.32932C29.6053 6.71061 29.3684 7.05376 29.0526 7.35879L8.28947 27.4525L1.57895 27.4525ZM4.73684 24.4022L6.94737 24.4022L22.4605 9.45586L21.3553 8.35013L20.2105 7.28253L4.73684 22.267L4.73684 24.4022ZM21.3553 8.35013L20.2105 7.28253L22.4605 9.45586L21.3553 8.35013ZM17.3684 27.4525C19.3158 27.4525 21.1184 26.9822 22.7763 26.0417C24.4342 25.1012 25.2632 23.7922 25.2632 22.1145C25.2632 21.1994 25.0132 20.4114 24.5132 19.7505C24.0132 19.0896 23.3421 18.5177 22.5 18.0348L20.1711 20.2843C20.7763 20.5385 21.25 20.8181 21.5921 21.1232C21.9342 21.4282 22.1053 21.7586 22.1053 22.1145C22.1053 22.6991 21.625 23.2266 20.6645 23.6968C19.7039 24.1671 18.6053 24.4022 17.3684 24.4022C16.9211 24.4022 16.5461 24.5484 16.2434 24.8407C15.9408 25.133 15.7895 25.4952 15.7895 25.9273C15.7895 26.3595 15.9408 26.7217 16.2434 27.014C16.5461 27.3063 16.9211 27.4525 17.3684 27.4525ZM2.48684 15.7852L4.85526 13.4975C4.32895 13.2941 3.91447 13.0844 3.61184 12.8684C3.30921 12.6523 3.15789 12.4299 3.15789 12.2011C3.15789 11.8961 3.39474 11.5911 3.86842 11.286C4.34211 10.981 5.3421 10.5107 6.86842 9.87527C9.18421 8.90935 10.7237 8.03239 11.4868 7.24441C12.25 6.45642 12.6316 5.56675 12.6316 4.57541C12.6316 3.17737 12.0526 2.06529 10.8947 1.23917C9.73684 0.413058 8.21053 0 6.31579 0C5.13158 0 4.07237 0.203352 3.13816 0.610055C2.20395 1.01676 1.48684 1.51243 0.986842 2.09706C0.697368 2.42751 0.578947 2.79609 0.631579 3.20279C0.684211 3.60949 0.881579 3.93994 1.22368 4.19413C1.56579 4.47374 1.94737 4.58812 2.36842 4.53729C2.78947 4.48645 3.14474 4.32122 3.43421 4.04162C3.80263 3.68575 4.21053 3.43156 4.65789 3.27905C5.10526 3.12653 5.65789 3.05028 6.31579 3.05028C7.39474 3.05028 8.19079 3.20279 8.70395 3.50782C9.2171 3.81285 9.47368 4.16871 9.47368 4.57541C9.47368 4.93128 9.24342 5.25537 8.7829 5.54769C8.32237 5.84001 7.26316 6.35474 5.60526 7.09189C3.5 7.98156 2.03947 8.78861 1.22368 9.51305C0.407895 10.2375 0 11.1335 0 12.2011C0 13.0145 0.223684 13.7072 0.671053 14.2791C1.11842 14.851 1.72368 15.3531 2.48684 15.7852Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="35.26%"
          bottom="50.29%"
          left="calc(50% - 15px - -353.33px)"
          {...getOverrideProps(overrides, "Vector38512614")}
        ></Icon>
        <Icon
          width="12.33px"
          height="19.32px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 12.333333969116211,
            height: 19.317113876342773,
          }}
          paths={[
            {
              d: "M7.66667 9.65856L0 2.25366L2.33333 0L12.3333 9.65856L2.33333 19.3171L0 17.0634L7.66667 9.65856Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="42.63%"
          bottom="47.21%"
          left="98.87%"
          right="0%"
          {...getOverrideProps(overrides, "Vector38512615")}
        ></Icon>
        <Icon
          width="12.33px"
          height="19.32px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 12.333333969116211,
            height: 19.317113876342773,
          }}
          paths={[
            {
              d: "M7.66667 9.65856L0 2.25366L2.33333 0L12.3333 9.65856L2.33333 19.3171L0 17.0634L7.66667 9.65856Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="52.79%"
          bottom="37.04%"
          left="1.13%"
          right="97.74%"
          transformOrigin="top left"
          transform="rotate(180deg)"
          {...getOverrideProps(overrides, "Vector38512616")}
        ></Icon>
      </View>
      <Text
        fontSize="34px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="51px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1410px"
        left="102px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Recomendação de vaga "
        {...getOverrideProps(overrides, "Recomenda\u00E7\u00E3o de vaga")}
      ></Text>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/RecomendacaoImg.png?raw=true"
        width="444px"
        height="309px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1460px"
        left="896px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "RecomendacaoImg 1")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="562px"
        height="237px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1504px"
        left="102px"
        {...getOverrideProps(overrides, "Group 467")}
      >
        <Icon
          width="562px"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/Vagas")}
          height="237px"
          viewBox={{ minX: 0, minY: 0, width: 562, height: 237 }}
          paths={[
            {
              d: "M0 15C0 6.71573 6.71573 0 15 0L547 0C555.284 0 562 6.71573 562 15L562 222C562 230.284 555.284 237 547 237L15 237C6.71571 237 0 230.284 0 222L0 15Z",
              fill: "rgba(47,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Rectangle 202")}
        ></Icon>
        <Text
          fontSize="22px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="33px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="264px"
          height="19px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="31px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ANALISTA DE DADOS"
          {...getOverrideProps(overrides, "ANALISTA DE DADOS")}
        ></Text>
        <Text
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24.3799991607666px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="36px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="66px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="4,5"
          {...getOverrideProps(overrides, "4,5")}
        ></Text>
        <Icon
          width="16px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
          paths={[
            {
              d: "M5.48 12.4842L8 10.8842L10.52 12.5053L9.86 9.47368L12.08 7.45263L9.16 7.17895L8 4.31579L6.84 7.1579L3.92 7.43158L6.14 9.47368L5.48 12.4842ZM3.06 16L4.36 10.0842L0 6.10526L5.76 5.57895L8 0L10.24 5.57895L16 6.10526L11.64 10.0842L12.94 16L8 12.8632L3.06 16Z",
              fill: "rgba(243,237,34,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="29.11%"
          bottom="64.14%"
          left="9.96%"
          right="87.19%"
          {...getOverrideProps(overrides, "Vector38512623")}
        ></Icon>
        <Text
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,148,255,1)"
          lineHeight="24.3799991607666px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="122px"
          height="21px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="66px"
          left="89px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="REKTR TEC"
          {...getOverrideProps(overrides, "REKTR TEC")}
        ></Text>
        <Icon
          width="16px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
          paths={[
            {
              d: "M5.52727 16L4.14545 13.5619L1.52727 12.9524L1.78182 10.1333L0 8L1.78182 5.86667L1.52727 3.04762L4.14545 2.4381L5.52727 0L8 1.10476L10.4727 0L11.8545 2.4381L14.4727 3.04762L14.2182 5.86667L16 8L14.2182 10.1333L14.4727 12.9524L11.8545 13.5619L10.4727 16L8 14.8952L5.52727 16ZM6.14545 14.0571L8 13.219L9.89091 14.0571L10.9091 12.2286L12.9091 11.7333L12.7273 9.6L14.0727 8L12.7273 6.36191L12.9091 4.22857L10.9091 3.77143L9.85455 1.94286L8 2.78095L6.10909 1.94286L5.09091 3.77143L3.09091 4.22857L3.27273 6.36191L1.92727 8L3.27273 9.6L3.09091 11.7714L5.09091 12.2286L6.14545 14.0571ZM7.23636 10.7048L11.3455 6.4L10.3273 5.29524L7.23636 8.53333L5.67273 6.93333L4.65455 8L7.23636 10.7048Z",
              fill: "rgba(75,119,209,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="29.11%"
          bottom="64.14%"
          left="37.54%"
          right="59.61%"
          {...getOverrideProps(overrides, "Vector38512625")}
        ></Icon>
        <Text
          fontSize="18px"
          fontWeight="300"
          color="rgba(255,255,255,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="138px"
          height="18px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="68px"
          left="248px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1.783 avaliações"
          {...getOverrideProps(overrides, "1.783 avalia\u00E7\u00F5es")}
        ></Text>
        <Text
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="149px"
          height="21px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="114px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="São Paulo - SP"
          {...getOverrideProps(overrides, "S\u00E3o Paulo - SP")}
        ></Text>
        <Text
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24.3799991607666px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="144px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="142px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="R$ 5.200,00"
          {...getOverrideProps(overrides, "R$ 5.200,00")}
        ></Text>
        <Text
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24.3799991607666px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="84px"
          height="21px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="172px"
          left="53px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Híbrido"
          {...getOverrideProps(overrides, "H\u00EDbrido")}
        ></Text>
        <Icon
          width="22px"
          height="22px"
          viewBox={{ minX: 0, minY: 0, width: 22, height: 22 }}
          paths={[
            {
              d: "M0 22L0 4.88889L4.88889 4.88889L4.88889 0L17.1111 0L17.1111 9.77778L22 9.77778L22 22L12.2222 22L12.2222 17.1111L9.77778 17.1111L9.77778 22L0 22ZM2.44444 19.5556L4.88889 19.5556L4.88889 17.1111L2.44444 17.1111L2.44444 19.5556ZM2.44444 14.6667L4.88889 14.6667L4.88889 12.2222L2.44444 12.2222L2.44444 14.6667ZM2.44444 9.77778L4.88889 9.77778L4.88889 7.33333L2.44444 7.33333L2.44444 9.77778ZM7.33333 14.6667L9.77778 14.6667L9.77778 12.2222L7.33333 12.2222L7.33333 14.6667ZM7.33333 9.77778L9.77778 9.77778L9.77778 7.33333L7.33333 7.33333L7.33333 9.77778ZM7.33333 4.88889L9.77778 4.88889L9.77778 2.44444L7.33333 2.44444L7.33333 4.88889ZM12.2222 14.6667L14.6667 14.6667L14.6667 12.2222L12.2222 12.2222L12.2222 14.6667ZM12.2222 9.77778L14.6667 9.77778L14.6667 7.33333L12.2222 7.33333L12.2222 9.77778ZM12.2222 4.88889L14.6667 4.88889L14.6667 2.44444L12.2222 2.44444L12.2222 4.88889ZM17.1111 19.5556L19.5556 19.5556L19.5556 17.1111L17.1111 17.1111L17.1111 19.5556ZM17.1111 14.6667L19.5556 14.6667L19.5556 12.2222L17.1111 12.2222L17.1111 14.6667Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="173px"
          left="20px"
          {...getOverrideProps(overrides, "Vector38512630")}
        ></Icon>
        <View
          width="123px"
          height="74px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="31px"
          left="405px"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(27,47,164,1)"
          {...getOverrideProps(overrides, "Rectangle 203")}
        ></View>
      </View>
      <Text
        fontSize="15px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="18.28499984741211px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1563px"
        left="543px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="REKTR"
        {...getOverrideProps(overrides, "REKTR")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="1519px"
        height="309px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1954px"
        left="0px"
        {...getOverrideProps(overrides, "HomeFooter")}
      >
        <View
          width="100vw"
          height="309px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(15,45,57,1)"
          {...getOverrideProps(overrides, "Rectangle 204")}
        ></View>
        <Text
          fontSize="15px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="22.5px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="301px"
          height="18px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="230px"
          left="622px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Copyright © 2024-2024 ConectaMais"
          {...getOverrideProps(
            overrides,
            "Copyright \u00A9 2024-2024 ConectaMais"
          )}
        ></Text>
        <Text
          fontSize="18px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="75px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="23px"
          left="710px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Suporte"
          {...getOverrideProps(overrides, "Suporte")}
        ></Text>
        <a
          href="https://linktr.ee/conectamaisproa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text
            fontSize="14px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="74px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="47px"
            left="718px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contato"
            style={{ cursor: "pointer" }}
            {...getOverrideProps(overrides, "Contato")}
          ></Text>
          <Text
            fontSize="18px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="27px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="120px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="23px"
            left="1209px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Mapa do site"
            {...getOverrideProps(overrides, "Mapa do site")}
          ></Text>
        </a>
        <Text
          fontSize="18px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="129px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="23px"
          left="176px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Redes Sociais"
          {...getOverrideProps(overrides, "Redes Sociais")}
        ></Text>
        <Icon
          width="13.54px"
          height="10.84px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.544973373413086,
            height: 10.835977554321289,
          }}
          paths={[
            {
              d: "M6.77249 0C3.06878 0 0 2.4127 0 5.41799C0 8.42328 3.01587 10.836 6.77249 10.836C10.5291 10.836 13.545 8.38095 13.545 5.41799C13.545 2.45503 10.4762 0 6.77249 0ZM6.77249 8.88889C4.39154 8.88889 2.43386 7.32275 2.43386 5.41799C2.43386 3.51323 4.39154 1.94709 6.77249 1.94709C9.15344 1.94709 11.1111 3.51323 11.1111 5.41799C11.1111 7.32275 9.15344 8.88889 6.77249 8.88889Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="19.76%"
          bottom="76.73%"
          left="13.31%"
          right="85.8%"
          {...getOverrideProps(overrides, "Vector38512640")}
        ></Icon>
        <Icon
          width="3.07px"
          height="2.46px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 3.068784713745117,
            height: 2.455026149749756,
          }}
          paths={[
            {
              d: "M1.53439 2.45503C2.38181 2.45503 3.06878 1.90545 3.06878 1.22751C3.06878 0.549576 2.38181 0 1.53439 0C0.686971 0 0 0.549576 0 1.22751C0 1.90545 0.686971 2.45503 1.53439 2.45503Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="19.32%"
          bottom="79.88%"
          left="14.12%"
          right="85.68%"
          {...getOverrideProps(overrides, "Vector38512641")}
        ></Icon>
        <a
          href="https://www.instagram.com/conectamais_proa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            style={{ cursor: "pointer" }}
            width="26.24px"
            height="20.99px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 26.243385314941406,
              height: 20.994709014892578,
            }}
            paths={[
              {
                d: "M24.127 1.73545C22.7513 0.592592 20.7936 0 18.5714 0L7.67196 0C3.06878 0 0 2.45503 0 6.13757L0 14.8148C0 16.6349 0.740741 18.2011 2.22222 19.3439C3.65079 20.4444 5.55556 20.9947 7.72487 20.9947L18.5185 20.9947C20.7937 20.9947 22.6984 20.4021 24.0741 19.3439C25.5026 18.2434 26.2434 16.6772 26.2434 14.8571L26.2434 6.13757C26.2434 4.35979 25.5026 2.83598 24.127 1.73545ZM23.9153 14.8571C23.9153 16.1693 23.3333 17.2275 22.381 17.9471C21.4286 18.6667 20.1058 19.0476 18.5185 19.0476L7.72487 19.0476C6.13757 19.0476 4.81481 18.6667 3.86243 17.9471C2.91005 17.1852 2.43386 16.127 2.43386 14.8148L2.43386 6.13757C2.43386 4.86772 2.91005 3.80952 3.86243 3.04762C4.7619 2.32804 6.13757 1.94709 7.72487 1.94709L18.6243 1.94709C20.2116 1.94709 21.5344 2.32804 22.4868 3.08995C23.3862 3.85185 23.9153 4.91005 23.9153 6.13757L23.9153 14.8571Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="18.13%"
            bottom="75.07%"
            left="12.89%"
            right="85.38%"
            {...getOverrideProps(overrides, "Vector38512642")}
          ></Icon>
        </a>
        <a
          href="https://www.linkedin.com/in/conecta-mais-a78065341/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            width="29.57px"
            height="21.69px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 29.571428298950195,
              height: 21.685712814331055,
            }}
            paths={[
              {
                d: "M21.5314 21.6857L8.04 21.6857C5.90836 21.684 3.86467 21.0623 2.35737 19.957C0.850067 18.8516 0.00226892 17.3529 0 15.7897L0 5.896C0.00226892 4.33279 0.850067 2.83409 2.35737 1.72874C3.86467 0.623382 5.90836 0.00166387 8.04 0L21.5314 0C23.6631 0.00166387 25.7068 0.623382 27.2141 1.72874C28.7214 2.83409 29.5692 4.33279 29.5714 5.896L29.5714 15.7897C29.5692 17.3529 28.7214 18.8516 27.2141 19.957C25.7068 21.0623 23.6631 21.684 21.5314 21.6857ZM8.04 1.57143C6.47668 1.57309 4.97803 2.02925 3.87259 2.8399C2.76716 3.65056 2.14512 4.74956 2.14286 5.896L2.14286 15.7897C2.14512 16.9362 2.76716 18.0352 3.87259 18.8458C4.97803 19.6565 6.47668 20.1126 8.04 20.1143L21.5314 20.1143C23.0948 20.1126 24.5934 19.6565 25.6988 18.8458C26.8043 18.0352 27.4263 16.9362 27.4286 15.7897L27.4286 5.896C27.4263 4.74956 26.8043 3.65056 25.6988 2.8399C24.5934 2.02925 23.0948 1.57309 21.5314 1.57143L8.04 1.57143Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="18.17%"
            bottom="74.81%"
            left="15.88%"
            right="82.17%"
            {...getOverrideProps(overrides, "Vector38512643")}
          ></Icon>
        </a>
        <Icon
          width="2.94px"
          height="6.89px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 2.940000295639038,
            height: 6.889143466949463,
          }}
          paths={[
            {
              d: "M1.47429 0L1.46571 0C0.656223 0 0 0.481231 0 1.07486L0 5.81429C0 6.40791 0.656223 6.88914 1.46571 6.88914L1.47429 6.88914C2.28378 6.88914 2.94 6.40791 2.94 5.81429L2.94 1.07486C2.94 0.481231 2.28378 0 1.47429 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="21.14%"
          bottom="76.63%"
          left="16.36%"
          right="83.45%"
          {...getOverrideProps(overrides, "Vector38512644")}
        ></Icon>
        <a
          href="https://www.linkedin.com/in/conecta-mais-a78065341/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            width="14.99px"
            height="10.41px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 14.991403579711914,
              height: 10.409161567687988,
            }}
            paths={[
              {
                d: "M1.48283 1.81752e-05C1.19052 -0.00122452 0.904309 0.0612841 0.660555 0.179602C0.416801 0.29792 0.226511 0.466706 0.113865 0.664514C0.00121894 0.862321 -0.0286987 1.08022 0.0279134 1.29053C0.0845255 1.50083 0.225112 1.69405 0.43181 1.84563C0.638507 1.9972 0.901984 2.1003 1.18876 2.14182C1.47554 2.18333 1.77268 2.16139 2.04242 2.07878C2.31215 1.99618 2.54232 1.85663 2.70366 1.67788C2.865 1.49913 2.95024 1.28924 2.94855 1.07488C2.9463 0.790314 2.79115 0.517877 2.51676 0.316659C2.24238 0.115441 1.87087 0.00166785 1.48283 1.81752e-05ZM9.65998 4.99087C9.94572 4.93194 10.2465 4.92401 10.5373 4.96775C10.8281 5.01149 11.1004 5.10563 11.3314 5.2423C11.6007 5.47395 11.8034 5.74317 11.9271 6.03376C12.0508 6.32434 12.0931 6.63028 12.0514 6.93316L12.0514 9.3343C12.0537 9.61995 12.21 9.89333 12.4862 10.0947C12.7625 10.2961 13.1362 10.4092 13.5257 10.4092C13.9144 10.4092 14.2872 10.2959 14.5621 10.0943C14.837 9.89277 14.9914 9.61937 14.9914 9.3343L14.9914 6.19145C14.9861 5.52692 14.7375 4.87564 14.2714 4.30573L14.2285 4.26802C13.9021 3.96699 13.4859 3.72489 13.0119 3.56034C12.5378 3.39579 12.0187 3.31319 11.4943 3.31888C10.9139 3.28832 10.333 3.37112 9.81049 3.55883C9.28801 3.74654 8.84272 4.03245 8.51998 4.38745L8.12569 4.80859L8.12569 4.55716C8.12569 4.27209 7.97127 3.9987 7.69639 3.79712C7.42152 3.59555 7.04871 3.4823 6.65998 3.4823C6.27124 3.4823 5.89844 3.59555 5.62356 3.79712C5.34869 3.9987 5.19426 4.27209 5.19426 4.55716L5.19426 9.29659C5.19426 9.58166 5.34869 9.85505 5.62356 10.0566C5.89844 10.2582 6.27124 10.3714 6.65998 10.3714C6.85277 10.3723 7.04388 10.345 7.22222 10.2913C7.40057 10.2376 7.5626 10.1585 7.69893 10.0585C7.83526 9.95851 7.94318 9.83969 8.01644 9.7089C8.08969 9.57812 8.12683 9.43797 8.12569 9.29659L8.12569 6.14745C8.69998 5.07887 9.65998 4.99716 9.65998 4.99087Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20%"
            bottom="76.63%"
            left="16.36%"
            right="82.65%"
            {...getOverrideProps(overrides, "Vector38512645")}
          ></Icon>
        </a>
        <Text
          fontSize="18px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="49px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="50px"
          left="1209px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Início"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/Home")}
          {...getOverrideProps(overrides, "In\u00EDcio")}
        ></Text>
        <Text
          fontSize="18px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="120px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="103px"
          left="1209px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Comunidade"
          onClick={() => navigate("/Comunidade")}
          {...getOverrideProps(overrides, "Comunidade")}
        ></Text>
        <Text
          fontSize="18px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="65px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="75px"
          left="1209px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Vagas"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/Vagas")}
          {...getOverrideProps(overrides, "Vagas")}
        ></Text>
        <Text
          fontSize="18px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="120px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="103px"
          left="1209px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Comunidade"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/Comunidade")}
          {...getOverrideProps(overrides, "Comunidade")}
        ></Text>
        <Text
          fontSize="18px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="39px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="131px"
          left="1209px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Plus"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/Premium")}
          {...getOverrideProps(overrides, "Plus")}
        ></Text>
      </View>
      <Flex
        width="504px"
        height="unset"
        {...getOverrideProps(overrides, "SearchField")}
      ></Flex>
      <View
        width="1063px"
        height="76px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="274px"
        left="90px"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 184")}
      ></View>
      <SelectField
        width="220px"
        height="unset"
        placeholder="Cargo"
        position="absolute"
        top="275px"
        left="160px"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField38531446")}
      >
        {cargos.map((cargo) => (
          <option key={cargo} value={cargo}>
            {cargo}
          </option>
        ))}
      </SelectField>
      <SelectField
        width="220px"
        placeholder="Estado"
        position="absolute"
        top="275px"
        left="435px"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField38531446")}
      >
        {estados.map((estado) => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </SelectField>
      <SelectField
        width="280px"
        height="unset"
        placeholder="Todas as categorias"
        position="absolute"
        top="275px"
        left="718px"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField38531446")}
      >
        {categorias.map((categorias) => (
          <option key={categorias} value={categorias}>
            {categorias}
          </option>
        ))}
      </SelectField>

      <Button
        width="100px"
        height="unset"
        position="absolute"
        top="289px"
        left="1030px"
        backgroundColor="rgba(22,70,89,100)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Buscar"
        onClick={() => navigate("/Vagas")}
        {...getOverrideProps(overrides, "Button39164195")}
      ></Button>

      <Icon
        width="20px"
        height="20px"
        viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
        paths={[
          {
            d: "M5.55556 15.5556C5.87037 15.5556 6.13426 15.4491 6.34722 15.2361C6.56019 15.0231 6.66667 14.7593 6.66667 14.4444C6.66667 14.1296 6.56019 13.8657 6.34722 13.6528C6.13426 13.4398 5.87037 13.3333 5.55556 13.3333C5.24074 13.3333 4.97685 13.4398 4.76389 13.6528C4.55093 13.8657 4.44444 14.1296 4.44444 14.4444C4.44444 14.7593 4.55093 15.0231 4.76389 15.2361C4.97685 15.4491 5.24074 15.5556 5.55556 15.5556ZM5.55556 11.1111C5.87037 11.1111 6.13426 11.0046 6.34722 10.7917C6.56019 10.5787 6.66667 10.3148 6.66667 10C6.66667 9.68519 6.56019 9.4213 6.34722 9.20833C6.13426 8.99537 5.87037 8.88889 5.55556 8.88889C5.24074 8.88889 4.97685 8.99537 4.76389 9.20833C4.55093 9.4213 4.44444 9.68519 4.44444 10C4.44444 10.3148 4.55093 10.5787 4.76389 10.7917C4.97685 11.0046 5.24074 11.1111 5.55556 11.1111ZM5.55556 6.66667C5.87037 6.66667 6.13426 6.56018 6.34722 6.34722C6.56019 6.13426 6.66667 5.87037 6.66667 5.55556C6.66667 5.24074 6.56019 4.97685 6.34722 4.76389C6.13426 4.55093 5.87037 4.44444 5.55556 4.44444C5.24074 4.44444 4.97685 4.55093 4.76389 4.76389C4.55093 4.97685 4.44444 5.24074 4.44444 5.55556C4.44444 5.87037 4.55093 6.13426 4.76389 6.34722C4.97685 6.56018 5.24074 6.66667 5.55556 6.66667ZM8.88889 15.5556L15.5556 15.5556L15.5556 13.3333L8.88889 13.3333L8.88889 15.5556ZM8.88889 11.1111L15.5556 11.1111L15.5556 8.88889L8.88889 8.88889L8.88889 11.1111ZM8.88889 6.66667L15.5556 6.66667L15.5556 4.44444L8.88889 4.44444L8.88889 6.66667ZM2.22222 20C1.61111 20 1.08796 19.7824 0.652778 19.3472C0.217593 18.912 0 18.3889 0 17.7778L0 2.22222C0 1.61111 0.217593 1.08796 0.652778 0.652778C1.08796 0.217593 1.61111 0 2.22222 0L17.7778 0C18.3889 0 18.912 0.217593 19.3472 0.652778C19.7824 1.08796 20 1.61111 20 2.22222L20 17.7778C20 18.3889 19.7824 18.912 19.3472 19.3472C18.912 19.7824 18.3889 20 17.7778 20L2.22222 20ZM2.22222 17.7778L17.7778 17.7778L17.7778 2.22222L2.22222 2.22222L2.22222 17.7778Z",
            fill: "rgba(22,70,89,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="13.21%"
        bottom="85.9%"
        left="44.63%"
        right="54.05%"
        {...getOverrideProps(overrides, "Vector38512655")}
      ></Icon>
      <Icon
        width="20px"
        height="20px"
        viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
        paths={[
          {
            d: "M10 10C10.6875 10 11.276 9.80417 11.7656 9.4125C12.2552 9.02083 12.5 8.55 12.5 8C12.5 7.45 12.2552 6.97917 11.7656 6.5875C11.276 6.19583 10.6875 6 10 6C9.3125 6 8.72396 6.19583 8.23438 6.5875C7.74479 6.97917 7.5 7.45 7.5 8C7.5 8.55 7.74479 9.02083 8.23438 9.4125C8.72396 9.80417 9.3125 10 10 10ZM10 17.35C12.5417 15.4833 14.4271 13.7875 15.6562 12.2625C16.8854 10.7375 17.5 9.38333 17.5 8.2C17.5 6.38333 16.776 4.89583 15.3281 3.7375C13.8802 2.57917 12.1042 2 10 2C7.89583 2 6.11979 2.57917 4.67188 3.7375C3.22396 4.89583 2.5 6.38333 2.5 8.2C2.5 9.38333 3.11458 10.7375 4.34375 12.2625C5.57292 13.7875 7.45833 15.4833 10 17.35ZM10 20C6.64583 17.7167 4.14062 15.5958 2.48438 13.6375C0.828125 11.6792 0 9.86667 0 8.2C0 5.7 1.00521 3.70833 3.01562 2.225C5.02604 0.741667 7.35417 0 10 0C12.6458 0 14.974 0.741667 16.9844 2.225C18.9948 3.70833 20 5.7 20 8.2C20 9.86667 19.1719 11.6792 17.5156 13.6375C15.8594 15.5958 13.3542 17.7167 10 20Z",
            fill: "rgba(22,70,89,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="13.21%"
        bottom="85.9%"
        left="26.27%"
        right="72.42%"
        {...getOverrideProps(overrides, "Vector38512656")}
      ></Icon>
      <View
        width="22px"
        height="22px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="298px"
        left="125px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "WokIconT 1")}
      >
        <Icon
          width="18.33px"
          height="17.42px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 18.333332061767578,
            height: 17.41666603088379,
          }}
          paths={[
            {
              d: "M1.83333 17.4167C1.32917 17.4167 0.897569 17.2372 0.538542 16.8781C0.179514 16.5191 0 16.0875 0 15.5833L0 5.5C0 4.99583 0.179514 4.56424 0.538542 4.20521C0.897569 3.84618 1.32917 3.66667 1.83333 3.66667L5.5 3.66667L5.5 1.83333C5.5 1.32917 5.67951 0.897569 6.03854 0.538542C6.39757 0.179514 6.82917 0 7.33333 0L11 0C11.5042 0 11.9358 0.179514 12.2948 0.538542C12.6538 0.897569 12.8333 1.32917 12.8333 1.83333L12.8333 3.66667L16.5 3.66667C17.0042 3.66667 17.4358 3.84618 17.7948 4.20521C18.1538 4.56424 18.3333 4.99583 18.3333 5.5L18.3333 15.5833C18.3333 16.0875 18.1538 16.5191 17.7948 16.8781C17.4358 17.2372 17.0042 17.4167 16.5 17.4167L1.83333 17.4167ZM1.83333 15.5833L16.5 15.5833L16.5 5.5L1.83333 5.5L1.83333 15.5833ZM7.33333 3.66667L11 3.66667L11 1.83333L7.33333 1.83333L7.33333 3.66667Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8.33%"
          bottom="12.5%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector38512658")}
        ></Icon>
      </View>
      <Flex
        width="227px"
        height="40px"
        {...getOverrideProps(overrides, "SelectField38512659")}
      ></Flex>
      <Flex
        width="212px"
        height="40px"
        {...getOverrideProps(overrides, "SelectField38512660")}
      ></Flex>
      <Flex
        width="212px"
        height="40px"
        {...getOverrideProps(overrides, "SelectField38512661")}
      ></Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "Button38512662")}
      ></Flex>
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
          onClick={() => navigate("/EscolhaDeConta")}
          {...getOverrideProps(overrides, "Button38604011")}
        ></Button>
        <Image
          src="https://raw.githubusercontent.com/Projeto-PROA-Conecta/imagens/9d4199ac05a2459b18928e253bab87cfaa3f1082/LogoBrancaConecta.svg"
          width="182.24px"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/Home")}
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
          children="Início"
          onClick={() => navigate("/Home")}
          {...getOverrideProps(overrides, "Button38573258")}
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
          onClick={() => navigate("/Comunidade")}
          {...getOverrideProps(overrides, "Button38573267")}
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
          children="Vagas"
          onClick={() => navigate("/Vagas")}
          {...getOverrideProps(overrides, "Button38573263")}
        ></Button>
        <Button
          width="125.16px"
          height="unset"
          position="absolute"
          top="22px"
          left="908.24px"
          backgroundColor="rgba(0,0,0,0)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Acessibilidade"
          onClick={() => navigate("/ConfigsAcessibilidade")}
          {...getOverrideProps(overrides, "Button38573263")}
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
          onClick={() => navigate("/TelaDeLogin")}
          {...getOverrideProps(overrides, "Button38573275")}
        ></Button>
      </View>
    </View>
  );
}
