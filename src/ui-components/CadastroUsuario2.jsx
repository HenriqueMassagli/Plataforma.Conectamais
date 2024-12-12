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
  CheckboxField,
  Icon,
  Image,
  PasswordField,
  PhoneNumberField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function CadastroUsuario2(props) {
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
      {...getOverrideProps(overrides, "CadastroUsuario2")}
      {...rest}
    >
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/BackgroundConecta.jpg?raw=true"
        width="100%"
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
      <View
        padding="0px 0px 0px 0px"
        width="691.45px"
        height="844.44px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="12%"
        bottom="12.41%"
        left="44.04%"
        right="10.44%"
        {...getOverrideProps(overrides, "Group 486")}
      >
        <Icon
          width="672.44px"
          height="842.83px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 674.4487534020664,
            height: 844.4354007705206,
          }}
          paths={[
            {
              d: "M0 12C0 5.3726 5.37258 0 12 0L660.44 0C667.068 0 672.44 5.37258 672.44 12L672.44 830.834C672.44 837.461 667.068 842.834 660.44 842.834L12 842.834C5.37258 842.834 0 837.461 0 830.834L0 12Z",
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
          bottom="0.19%"
          left="2.75%"
          right="0%"
          transformOrigin="top left"
          transform="rotate(0.14deg)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></Icon>
        <Text
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="151.29px"
          height="24.46px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="9.24%"
          bottom="87.87%"
          left="40.35%"
          right="37.77%"
          transformOrigin="top left"
          transform="rotate(0.14deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Crie sua conta "
          {...getOverrideProps(overrides, "Crie sua conta")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="298.94px"
          height="257.08px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="69.46%"
          bottom="0.09%"
          left="29.59%"
          right="27.17%"
          transformOrigin="top left"
          transform="rotate(0.14deg)"
          {...getOverrideProps(overrides, "Group 459")}
        >
          <Text
            fontSize="12px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="14.628000259399414px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="38.69px"
            height="12.72px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12.48%"
            bottom="82.57%"
            left="44.03%"
            right="43.02%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pronto"
            {...getOverrideProps(overrides, "Pronto")}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="37.56px"
            height="37.86px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.64%"
            bottom="80.63%"
            left="50.41%"
            right="37.03%"
            {...getOverrideProps(overrides, "Group38512311")}
          >
            <Icon
              width="37.56px"
              height="37.86px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 37.6515278406232,
                height: 37.951640176878755,
              }}
              paths={[
                {
                  d: "M23.8752 37.8621C23.8206 37.8621 23.766 37.86 23.7112 37.8563C20.0972 37.6062 7.73112 35.7219 0.345791 21.967C-0.199759 20.9518 -0.0920302 19.6599 0.614131 18.7532C6.78169 13.3502 11.5995 7.50264 14.4432 1.00511C14.9568 0.34593 15.7274 -0.0143994 16.5074 0.000440862C17.3082 0.0208429 18.0461 0.427 18.5322 1.1148C22.0384 6.07775 28.9608 14.8633 35.926 17.9436C36.7089 18.2901 37.2756 18.9933 37.481 19.874C37.6849 20.7472 37.4963 21.6475 36.9637 22.3438L25.8853 36.8342C25.3872 37.4859 24.6453 37.8621 23.8752 37.8621Z",
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
              left="0%"
              right="0%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector38512312")}
            ></Icon>
            <Icon
              width="32.8px"
              height="32.74px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 32.87760222492943,
                height: 32.817561490864136,
              }}
              paths={[
                {
                  d: "M0.192836 17.5108C0.00418226 17.7535 -0.030254 18.0995 0.10724 18.3729C6.78837 31.6249 18.7331 32.6646 21.0597 32.7382C21.2838 32.752 21.4938 32.6434 21.636 32.4574L32.635 18.0714C32.7907 17.8674 32.8387 17.6072 32.7671 17.3561C32.6948 17.1038 32.5172 16.9157 32.2796 16.8415C24.8094 14.4899 16.9715 3.59747 14.7473 0.314799C14.6172 0.122977 14.4162 0.00799263 14.1963 4.34289e-05C13.9703 -0.00233862 13.7644 0.0933072 13.6205 0.277707C10.4379 6.96194 5.98181 12.7207 0.192836 17.5108Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.58%"
              bottom="7.95%"
              left="7.2%"
              right="5.48%"
              {...getOverrideProps(overrides, "Vector38512313")}
            ></Icon>
            <Icon
              width="11.48px"
              height="12.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 11.506080173666305,
                height: 12.615369554565348,
              }}
              paths={[
                {
                  d: "M1.28727 12.3446L11.2574 1.39447C11.9389 0.645944 10.8712 -0.506045 10.1888 0.24342L0.218686 11.1936C-0.462853 11.9421 0.604881 13.0941 1.28727 12.3446Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27.43%"
              bottom="39.32%"
              left="19.04%"
              right="50.41%"
              {...getOverrideProps(overrides, "Vector38512314")}
            ></Icon>
            <Icon
              width="8.53px"
              height="10.53px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.55487839496891,
                height: 10.54903888216694,
              }}
              paths={[
                {
                  d: "M1.3103 10.3118C4.06192 7.65519 6.45307 4.57919 8.41105 1.20395C8.9279 0.312992 7.62096 -0.505065 7.10617 0.382353C5.21323 3.64551 2.9016 6.59272 0.241716 9.16076C-0.484015 9.86144 0.587622 11.0095 1.3103 10.3118Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="40.94%"
              bottom="31.25%"
              left="35%"
              right="42.29%"
              {...getOverrideProps(overrides, "Vector38512315")}
            ></Icon>
            <Icon
              width="7.68px"
              height="11.42px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.703064950756016,
                height: 11.436215659565164,
              }}
              paths={[
                {
                  d: "M1.27129 11.1588C3.77656 8.16945 5.90909 4.83318 7.58801 1.23438C8.02355 0.300782 6.72036 -0.524427 6.28313 0.412781C4.661 3.88986 2.62376 7.11889 0.202703 10.0077C-0.447548 10.7836 0.617913 11.9384 1.27129 11.1588Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="48.47%"
              bottom="21.37%"
              left="49.55%"
              right="30.02%"
              {...getOverrideProps(overrides, "Vector38512316")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="37.56px"
            height="37.86px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="6.33%"
            bottom="78.94%"
            left="53.44%"
            right="33.99%"
            {...getOverrideProps(overrides, "Group38512317")}
          >
            <Icon
              width="37.56px"
              height="37.86px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 37.6515278406232,
                height: 37.951640176878755,
              }}
              paths={[
                {
                  d: "M23.8752 37.8621C23.8206 37.8621 23.766 37.86 23.7112 37.8563C20.0972 37.6062 7.73112 35.7219 0.345791 21.967C-0.199759 20.9518 -0.0920302 19.6599 0.614131 18.7532C6.47363 13.279 10.8852 7.29283 14.4432 1.00511C14.9568 0.34593 15.7274 -0.0143994 16.5074 0.000440862C17.3082 0.0208429 18.0461 0.427 18.5322 1.1148C22.0384 6.07775 28.9608 14.8633 35.926 17.9436C36.7089 18.2901 37.2756 18.9933 37.481 19.874C37.6849 20.7472 37.4963 21.6475 36.9637 22.3438L25.8853 36.8342C25.3872 37.4859 24.6453 37.8621 23.8752 37.8621Z",
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
              left="0%"
              right="0%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector38512318")}
            ></Icon>
            <Icon
              width="32.8px"
              height="32.74px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 32.87760222492943,
                height: 32.817561490864136,
              }}
              paths={[
                {
                  d: "M0.192836 17.5108C0.00418226 17.7535 -0.030254 18.0995 0.10724 18.3729C6.78837 31.6249 18.7331 32.6646 21.0597 32.7382C21.2838 32.752 21.4938 32.6434 21.636 32.4574L32.635 18.0714C32.7907 17.8674 32.8387 17.6072 32.7671 17.3561C32.6948 17.1038 32.5172 16.9157 32.2796 16.8415C24.8094 14.4899 16.9715 3.59747 14.7473 0.314799C14.6172 0.122977 14.4162 0.00799263 14.1963 4.34289e-05C13.9703 -0.00233862 13.7644 0.0933072 13.6205 0.277707C9.80794 7.10168 5.51919 13.1507 0.192836 17.5108Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.58%"
              bottom="7.95%"
              left="7.2%"
              right="5.48%"
              {...getOverrideProps(overrides, "Vector38512319")}
            ></Icon>
            <Icon
              width="11.48px"
              height="12.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 11.506080173666305,
                height: 12.615369554565348,
              }}
              paths={[
                {
                  d: "M1.28727 12.3446L11.2574 1.39447C11.9389 0.645944 10.8712 -0.506045 10.1888 0.24342L0.218686 11.1936C-0.462853 11.9421 0.604881 13.0941 1.28727 12.3446Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27.43%"
              bottom="39.32%"
              left="19.04%"
              right="50.4%"
              {...getOverrideProps(overrides, "Vector38512320")}
            ></Icon>
            <Icon
              width="8.53px"
              height="10.53px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.55487839496891,
                height: 10.54903888216694,
              }}
              paths={[
                {
                  d: "M1.3103 10.3118C4.06192 7.65519 6.45307 4.57919 8.41105 1.20395C8.9279 0.312992 7.62095 -0.505065 7.10617 0.382353C5.21323 3.64551 2.9016 6.59272 0.241716 9.16076C-0.484015 9.86144 0.587622 11.0095 1.3103 10.3118Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="40.94%"
              bottom="31.25%"
              left="35%"
              right="42.29%"
              {...getOverrideProps(overrides, "Vector38512321")}
            ></Icon>
            <Icon
              width="7.68px"
              height="11.42px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.7030668580991914,
                height: 11.436215664115196,
              }}
              paths={[
                {
                  d: "M1.27128 11.1588C3.77655 8.16945 5.90909 4.83318 7.58801 1.23438C8.02355 0.300782 6.72035 -0.524427 6.28313 0.412781C4.661 3.88986 2.62376 7.11889 0.202704 10.0077C-0.447548 10.7836 0.617906 11.9384 1.27128 11.1588Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="48.47%"
              bottom="21.37%"
              left="49.54%"
              right="30.02%"
              {...getOverrideProps(overrides, "Vector38512322")}
            ></Icon>
          </View>
          <Icon
            width="8.82px"
            height="24.82px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.876024644712743,
              height: 24.842006832173354,
            }}
            paths={[
              {
                d: "M8.81564 24.821L2.8418 24.8204L0 0L8.81684 0.000662363L8.81564 24.821Z",
                fill: "rgba(255,182,182,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="87.46%"
            bottom="2.88%"
            left="77.82%"
            right="19.23%"
            {...getOverrideProps(overrides, "Vector38512323")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="72.94px"
            height="38.74px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="83.95%"
            bottom="0.98%"
            left="75.6%"
            right="0%"
            {...getOverrideProps(overrides, "Group38512324")}
          >
            <Icon
              width="19.58px"
              height="24.51px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 19.640965013574714,
                height: 24.558828968315566,
              }}
              paths={[
                {
                  d: "M19.5825 21.141L14.4941 24.5122L0 4.97578L7.50992 0L19.5825 21.141Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="36.73%"
              left="69.94%"
              right="3.21%"
              {...getOverrideProps(overrides, "Vector38512325")}
            ></Icon>
            <Icon
              width="19.85px"
              height="17.72px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 19.890409659903526,
                height: 17.764329477188284,
              }}
              paths={[
                {
                  d: "M0.000124799 14.9674C0.00584219 15.3598 0.452042 16.3429 0.642922 16.6771C1.22965 17.7044 2.47846 18.0249 3.43225 17.3929L19.1896 6.95108C19.8402 6.51993 20.0432 5.60223 19.6429 4.90135L19.2393 4.19469C19.2393 4.19469 18.8059 1.55428 15.706 0C15.706 0 14.882 3.37151 10.068 2.1361L8.20955 1.00346L4.70987 10.2314L1.45047 13.0358C0.737372 13.6494 -0.0142014 13.9845 0.000124799 14.9674Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="45.43%"
              bottom="8.84%"
              left="72.79%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512326")}
            ></Icon>
            <Icon
              width="18.87px"
              height="8.95px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.888016902269555,
                height: 8.995820752803553,
              }}
              paths={[
                {
                  d: "M0.000118628 7.56172C0.0055533 7.75996 0.429688 8.25659 0.61113 8.42544C1.16885 8.94447 2.3559 9.1064 3.26253 8.78708L18.2407 3.51176C18.8591 3.29394 19.0521 2.83031 18.6716 2.47622L18.288 2.1192C18.288 2.1192 17.8759 0.785241 14.9293 0C14.9293 0 14.1461 1.70332 9.57013 1.07918L7.8036 0.50696L4.47696 5.16902L1.37874 6.58584C0.700909 6.89581 -0.0134992 7.06512 0.000118628 7.56172Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="76.9%"
              bottom="0%"
              left="0%"
              right="74.13%"
              {...getOverrideProps(overrides, "Vector38545689")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="40.4px"
            height="93.34px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="17.58%"
            bottom="46.12%"
            left="75.5%"
            right="10.98%"
            {...getOverrideProps(overrides, "Group38512327")}
          >
            <Icon
              width="10.65px"
              height="23.55px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.710835882684478,
                height: 23.575333787339275,
              }}
              paths={[
                {
                  d: "M3.59531 18.605C3.29961 17.2156 3.32215 15.8668 3.59947 14.7492L0 1.71157L5.86053 0L8.88083 13.4096C9.58114 14.2793 10.146 15.4791 10.4417 16.8685C11.1173 20.0426 10.1323 23.0045 8.24165 23.484C6.35105 23.9635 4.27084 21.7791 3.59531 18.605Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="74.77%"
              bottom="0%"
              left="73.63%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512328")}
            ></Icon>
            <Icon
              width="37.85px"
              height="79.71px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 38.04502347477228,
                height: 79.79523099320778,
              }}
              paths={[
                {
                  d: "M1.53728e-05 1.4924C1.53728e-05 1.4924 9.4447 -2.93575 14.7183 3.46326C19.5183 9.28767 29.2626 26.8142 28.262 28.5194L37.855 77.3456L30.7443 79.7052L11.882 23.5438L1.53728e-05 1.4924Z",
                  fill: "rgba(211,152,74,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="14.61%"
              left="0%"
              right="6.3%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector38512329")}
            ></Icon>
          </View>
          <Icon
            width="29.2px"
            height="118.46px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 29.479816589366237,
              height: 118.53070769516185,
            }}
            paths={[
              {
                d: "M0 0.522364L4.86622 61.6759L16.6263 118.461L29.1973 117.151L23.1145 55.1238L26.8377 0L0 0.522364Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="46.1%"
            bottom="7.82%"
            left="72.03%"
            right="18.21%"
            {...getOverrideProps(overrides, "Vector38512330")}
          ></Icon>
          <Icon
            width="75.51px"
            height="110.36px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 75.77569686973857,
              height: 110.54098299046468,
            }}
            paths={[
              {
                d: "M1.53728e-05 13.6948L30.3093 65.6691L64.8921 110.361L75.5126 102.999L43.7505 50.8474C38.8893 27.8752 33.5059 6.61029 23.6401 0L1.53728e-05 13.6948Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="46.14%"
            bottom="10.94%"
            left="72.36%"
            right="2.38%"
            {...getOverrideProps(overrides, "Vector38512331")}
          ></Icon>
          <Icon
            width="39.73px"
            height="101.59px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 39.97487389315938,
              height: 101.68819735978059,
            }}
            paths={[
              {
                d: "M6.08934 101.594C4.66767 101.594 3.29076 101.054 2.16867 100.029C0.662385 98.6533 -0.122229 96.6474 0.0155119 94.5258L2.65961 67.2009L1.6497 37.3625L1.65609 37.3302L4.79509 21.1156C4.82608 20.6003 4.92644 20.0547 5.08828 19.531L9.72471 4.51546C10.5585 1.81461 12.8937 0 15.5364 0L19.6361 0C21.6889 0 23.5941 1.0982 24.7325 2.93798L28.3216 8.73709C28.5602 9.12232 28.7614 9.5359 28.9198 9.96643L36.8433 31.5073C37.0946 32.1911 37.2378 32.9104 37.2683 33.6451L39.7265 93.427C39.8086 95.4117 39.0673 97.3111 37.6933 98.638C36.3277 99.9574 34.5056 100.541 32.6988 100.24C22.352 98.5193 13.2966 99.9267 7.52136 101.411C7.04419 101.533 6.56405 101.594 6.08934 101.594Z",
                fill: "rgba(211,152,74,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.04%"
            bottom="48.44%"
            left="70.91%"
            right="15.79%"
            {...getOverrideProps(overrides, "Vector38512332")}
          ></Icon>
          <Icon
            width="48.14px"
            height="54.38px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 48.26868277394078,
              height: 54.497673938242144,
            }}
            paths={[
              {
                d: "M6.89381 41.9339L0 36.2553C0 36.2553 3.24415 5.24173 11.76 5.24173C20.2759 5.24173 24.7366 0 24.7366 0C24.7366 0 55.1505 45.8652 46.6346 51.1069C38.1187 56.3486 26.3587 53.7278 26.3587 53.7278L22.2166 14.5467C21.7077 12.4756 19.0614 12.2513 18.258 14.2112L6.89381 41.9339Z",
                fill: "rgba(63,61,86,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.15%"
            bottom="66.7%"
            left="70.26%"
            right="13.64%"
            {...getOverrideProps(overrides, "Vector38512333")}
          ></Icon>
          <Icon
            width="23.6px"
            height="25.37px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 26.311832482102545,
              height: 28.326636620543923,
            }}
            paths={[
              {
                d: "M11.8016 25.3677C18.3195 25.3677 23.6033 19.689 23.6033 12.6839C23.6033 5.67876 18.3195 0 11.8016 0C5.28377 0 0 5.67876 0 12.6839C0 19.689 5.28377 25.3677 11.8016 25.3677Z",
                fill: "rgba(255,182,182,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="2.25%"
            bottom="87.88%"
            left="72%"
            right="20.11%"
            transformOrigin="top left"
            transform="rotate(-7.75deg)"
            {...getOverrideProps(overrides, "Vector38512334")}
          ></Icon>
          <Icon
            width="28.49px"
            height="26.21px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 31.252618760293444,
              height: 29.809489822386467,
            }}
            paths={[
              {
                d: "M24.4414 24.6901C23.3769 25.1172 21.7447 25.7815 20.6802 26.2087C19.6874 24.0815 20.9037 22.9777 21.03 20.6018C21.0721 19.8089 21.1785 19.0152 21.1174 18.2237C21.0563 17.4322 20.8033 16.6198 20.2478 16.0961C19.398 15.295 17.9828 15.4253 17.1601 16.2584C16.3375 17.0916 16.103 18.4684 16.4392 19.6282C13.2033 18.1249 11.1127 14.1808 11.5597 10.4226C10.5933 10.0154 9.60269 9.60278 8.56513 9.57163C7.52756 9.54048 6.4159 9.96602 5.86298 10.9102C5.47528 11.5722 5.39789 12.4126 4.9628 13.0396C4.25583 14.0586 2.72796 14.1375 1.78911 13.3646C0.850255 12.5917 0.491046 11.1871 0.691284 9.93443C0.891522 8.68174 -0.565397 6.12535 0.250171 5.2049C0.806533 4.577 3.56792 5.4667 4.18862 4.91279C4.75489 4.40745 5.32332 3.90042 5.94749 3.48119C6.73979 2.94903 7.61718 2.56366 8.52948 2.34711C9.39244 2.14228 10.2794 2.08848 11.1617 2.03533C12.0576 1.98137 13.2968 0.0643016 14.1927 0.0103414C16.8301 -0.14852 19.1872 1.56316 21.7177 2.37809C24.2481 3.19301 25.84 5.53315 27.2408 7.94031C29.236 11.3691 28.5578 15.1261 27.1839 18.4046C26.8443 19.2151 27.9839 20.0667 27.8151 20.9368C27.6583 21.7456 26.9533 22.3314 26.7885 23.1383C26.6475 23.8283 25.8143 23.0289 25.6155 23.7023C25.444 24.2834 24.9385 24.6936 24.3981 24.8791C23.8578 25.0646 23.2792 25.0608 22.712 25.0553",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1.49%"
            bottom="88.31%"
            left="70.81%"
            right="19.66%"
            transformOrigin="top left"
            transform="rotate(-7.75deg)"
            {...getOverrideProps(overrides, "Vector38512335")}
          ></Icon>
          <Icon
            width="7px"
            height="10.81px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 7.025904759456353,
              height: 10.82597051816964,
            }}
            paths={[
              {
                d: "M3.34385 0L3.75933 0.325837L4.8067 1.1472C7.95564 3.61671 7.66287 8.7717 4.25794 10.8093L0 3.48326",
                fill: "rgba(63,61,86,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.02%"
            bottom="83.77%"
            left="77.52%"
            right="20.14%"
            {...getOverrideProps(overrides, "Vector38512336")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="66.07px"
            height="36.6px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="14.81%"
            bottom="70.96%"
            left="56.54%"
            right="21.36%"
            {...getOverrideProps(overrides, "Group38512337")}
          >
            <Icon
              width="19.54px"
              height="15.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 19.579342943447955,
                height: 15.878269521032564,
              }}
              paths={[
                {
                  d: "M6.61686 1.32806C7.67989 2.08369 8.49632 3.03529 8.9929 4.00609L19.5416 10.5155L16.5193 15.8317L6.14404 8.65621C5.12012 8.54619 3.9868 8.11183 2.92378 7.3562C0.495317 5.62996 -0.646584 2.88115 0.373227 1.21652C1.39304 -0.448106 4.18841 -0.398161 6.61686 1.32806Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="18.11%"
              bottom="38.64%"
              left="0%"
              right="70.42%"
              {...getOverrideProps(overrides, "Vector38512338")}
            ></Icon>
            <Icon
              width="54.83px"
              height="36.6px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 54.91668291350652,
                height: 36.73237408433593,
              }}
              paths={[
                {
                  d: "M45.0141 1.0934C51.7409 -3.35043 58.5009 6.82619 52.5198 12.3709L52.4994 12.3897L28.6008 36.6017L0 21.3883L2.82807 13.1741L24.9867 22.6291L41.6088 4.04166C42.7658 2.79376 43.9043 1.8266 45.0141 1.0934Z",
                  fill: "rgba(211,152,74,1)",
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
              left="17.01%"
              right="0%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector38512339")}
            ></Icon>
          </View>
          <Icon
            width="12.56px"
            height="13.24px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 12.587938333795137,
              height: 13.27027138356516,
            }}
            paths={[
              {
                d: "M6.27819 13.2404C9.74554 13.2404 12.5564 10.2764 12.5564 6.62018C12.5564 2.96395 9.74554 0 6.27819 0C2.81085 0 0 2.96395 0 6.62018C0 10.2764 2.81085 13.2404 6.27819 13.2404Z",
                fill: "rgba(211,152,74,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="6.33%"
            bottom="88.52%"
            left="56.86%"
            right="38.94%"
            {...getOverrideProps(overrides, "Vector38512340")}
          ></Icon>
          <Icon
            width="12.46px"
            height="27.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 19.558379429921843,
              height: 29.90627100103177,
            }}
            paths={[
              {
                d: "M0 0.00138991C2.08396 -0.0524122 3.98332 1.46261 4.94486 3.35523C5.90641 5.24785 6.08085 7.45461 6.03251 9.58713C5.98416 11.7197 5.7322 13.8555 5.91584 15.9803C6.30651 20.5006 8.7791 24.7866 12.458 27.3207C11.0715 27.4307 9.71064 26.7735 8.66305 25.8374C7.61547 24.9014 6.83132 23.7022 6.05995 22.5181C5.40719 21.516 4.75083 20.5072 4.2822 19.4025C3.59567 17.7842 3.33475 16.0158 3.088 14.2697C2.48048 9.97061 1.92029 5.66448 1.40756 1.35245",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="7.38%"
            bottom="81.99%"
            left="17.77%"
            right="78.06%"
            transformOrigin="top left"
            transform="rotate(16.98deg)"
            {...getOverrideProps(overrides, "Vector38512341")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="26px"
            height="32.14px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="85.98%"
            bottom="1.52%"
            left="3.31%"
            right="88%"
            {...getOverrideProps(overrides, "Group38512342")}
          >
            <Icon
              width="10.36px"
              height="27.82px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.422139116827566,
                height: 27.842425133456032,
              }}
              paths={[
                {
                  d: "M0.00140995 27.8178L7.01799 27.8171L10.3558 0L0 0.000746994L0.00140995 27.8178Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="13.45%"
              left="6.24%"
              right="53.92%"
              {...getOverrideProps(overrides, "Vector38512343")}
            ></Icon>
            <Icon
              width="26px"
              height="12.62px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 26.026631581925358,
                height: 12.684898892170438,
              }}
              paths={[
                {
                  d: "M25.6629 8.13664C25.8813 8.51482 25.9966 9.73542 25.9966 10.1752C25.9966 11.527 24.9304 12.6229 23.6152 12.6229L1.88564 12.6229C0.988401 12.6229 0.261005 11.8753 0.261005 10.9531L0.261005 10.0232C0.261005 10.0232 -0.813939 7.22861 1.39917 3.78407C1.39917 3.78407 4.14976 6.4812 8.25986 2.25677L9.47189 0L18.2453 6.59494L23.1083 7.21017C24.1722 7.34476 25.1156 7.1893 25.6629 8.13664Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="60.73%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512344")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="29.43px"
            height="39.32px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="84.74%"
            bottom="-0.03%"
            left="13.69%"
            right="76.46%"
            transformOrigin="top left"
            transform="rotate(-4.2deg)"
            {...getOverrideProps(overrides, "Group38512345")}
          >
            <Icon
              width="16.6px"
              height="28.52px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.72994165791897,
                height: 32.25927414606781,
              }}
              paths={[
                {
                  d: "M0 26.8458L6.89862 28.5249L16.6025 2.47852L6.42081 0L0 26.8458Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.76%"
              bottom="18.7%"
              left="0%"
              right="43.59%"
              transformOrigin="top left"
              transform="rotate(-11.98deg)"
              {...getOverrideProps(overrides, "Vector38512346")}
            ></Icon>
            <Icon
              width="25.59px"
              height="15.57px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 28.109278058317614,
                height: 21.515604981758543,
              }}
              paths={[
                {
                  d: "M25.5459 11.6772C25.6727 12.0926 25.5051 13.2929 25.4041 13.7155C25.0935 15.0143 23.7986 15.8132 22.5117 15.4997L1.2519 10.3203C0.374055 10.1064 -0.165869 9.21474 0.0460199 8.32862L0.259657 7.43521C0.259657 7.43521 -0.149978 4.49381 2.80667 1.71168C2.80667 1.71168 4.87815 4.95879 9.86996 1.87948L11.5743 0L18.6429 8.42784L23.2594 10.1781C24.2694 10.561 25.2281 10.6365 25.5459 11.6772Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="60.85%"
              bottom="-0.44%"
              left="6.54%"
              right="6.51%"
              transformOrigin="top left"
              transform="rotate(-10.22deg)"
              {...getOverrideProps(overrides, "Vector38512347")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="53.31px"
            height="46.54px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="35.78%"
            bottom="46.12%"
            left="14.71%"
            right="67.46%"
            transformOrigin="top left"
            transform="rotate(-84.98deg)"
            {...getOverrideProps(overrides, "Group38512348")}
          >
            <Icon
              width="25.34px"
              height="21.24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 23.324016571035827,
                height: 27.357695891548047,
              }}
              paths={[
                {
                  d: "M16.256 19.0917C14.919 18.0259 13.9378 16.7515 13.3892 15.4953L0 6.13207L4.71908 0L17.793 10.1582C19.1568 10.4266 20.6278 11.1073 21.9648 12.1731C25.0192 14.6082 26.2172 18.1309 24.6408 20.0414C23.0643 21.9519 19.3104 21.5267 16.256 19.0917Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="54.37%"
              bottom="0%"
              left="52.47%"
              right="0%"
              transformOrigin="top left"
              transform="rotate(-0.19deg)"
              {...getOverrideProps(overrides, "Vector38512349")}
            ></Icon>
            <Icon
              width="41.5px"
              height="40.24px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 43.6346996293787,
                height: 45.35660134412569,
              }}
              paths={[
                {
                  d: "M41.5002 30.5622L40.8751 31.8189L37.6336 38.3229L36.6749 40.2424L27.2454 31.919L19.6632 25.2285L1.84027 9.49994C0.604068 8.40903 0 6.92799 0 5.45388C0 3.68978 0.863945 1.93948 2.5321 0.876172C3.5646 0.216779 4.79025 -0.0835665 6.0159 0.0200183C8.90973 0.265115 14.7395 0.789867 20.9239 1.51484L23.0522 7.57013L22.0091 13.0109L19.1715 12.1858L21.7563 14.3159L41.5002 30.5622Z",
                  fill: "rgba(211,152,74,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0.3%"
              bottom="13.23%"
              left="0.37%"
              right="21.78%"
              transformOrigin="top left"
              transform="rotate(-0.19deg)"
              {...getOverrideProps(overrides, "Vector38512350")}
            ></Icon>
          </View>
          <Icon
            width="33.5px"
            height="28.58px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 33.573042675603574,
              height: 28.6553347498986,
            }}
            paths={[
              {
                d: "M1.45355e-05 6.00415C1.34449 6.01233 4.16428 24.7316 2.06175 27.5485C0.336961 29.8592 31.9465 27.5485 31.9465 27.5485C28.9749 26.9273 30.3118 6.92869 33.505 6.00415L14.4323 0L1.45355e-05 6.00415Z",
                fill: "rgba(255,182,182,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="32.41%"
            bottom="56.47%"
            left="8.33%"
            right="80.46%"
            {...getOverrideProps(overrides, "Vector38512351")}
          ></Icon>
          <Icon
            width="60.14px"
            height="117.79px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 60.418467833655995,
              height: 117.93689359095814,
            }}
            paths={[
              {
                d: "M44.6313 7.46994e-06L16.5295 7.46994e-06C16.5295 7.46994e-06 4.81078 19.1252 4.81078 56.2097L0 115.898L12.0269 116.604L31.4053 35.6928L42.0548 75.4157L34.7063 117.794L46.3517 117.794L60.1376 70.0082L57.3857 44.9078C57.3857 44.9078 54.5153 10.4156 44.6313 7.46994e-06Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="42.15%"
            bottom="12.03%"
            left="3.62%"
            right="76.27%"
            {...getOverrideProps(overrides, "Vector38512352")}
          ></Icon>
          <Icon
            width="42.61px"
            height="50.22px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 42.729424255775484,
              height: 50.32440776642011,
            }}
            paths={[
              {
                d: "M42.6097 26.4889L41.5892 32.0551L41.3417 33.3902L39.2937 44.5544L36.5161 48.7543C36.5161 48.7543 16.7397 42.4528 7.4618 50.2229L0 25.4294L7.90342 7.77009L14.0887 4.23823L15.1196 0L28.2221 0L30.2392 4.23823L36.0808 7.06371L40.5273 20.294L42.6097 26.4889Z",
                fill: "rgba(211,152,74,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="17.85%"
            bottom="62.61%"
            left="6.49%"
            right="79.26%"
            {...getOverrideProps(overrides, "Vector38512353")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="46.61px"
            height="53.03px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.76%"
            bottom="62.61%"
            left="4.55%"
            right="79.86%"
            {...getOverrideProps(overrides, "Group38512354")}
          >
            <Icon
              width="21.26px"
              height="25.37px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 21.319121838734645,
                height: 25.41594007675414,
              }}
              paths={[
                {
                  d: "M19.0821 9.13399C18.0113 10.469 16.736 11.4447 15.482 11.9858L6.0631 25.3653L0 20.5725L10.2073 7.51631C10.4849 6.14789 11.1736 4.67504 12.2443 3.34008C14.6905 0.290348 18.2042 -0.884903 20.0924 0.715044C21.9806 2.31499 21.5282 6.08427 19.0821 9.13399Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="52.17%"
              left="54.4%"
              right="0%"
              {...getOverrideProps(overrides, "Vector38512355")}
            ></Icon>
            <Icon
              width="40.3px"
              height="44.74px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 40.40486249863261,
                height: 44.83458390672155,
              }}
              paths={[
                {
                  d: "M19.0478 2.50513C19.0478 2.50513 9.07301 -3.13141 5.83444 2.50513C3.07126 7.31427 0.669563 31.6137 0.0240146 38.6439C-0.0892972 39.8779 0.200531 41.1116 0.847961 42.1573C2.76532 45.2541 7.02123 45.6331 9.42816 42.9213L40.2983 8.14166L30.7013 3.20969L14.2493 20.8239L19.0478 2.50513Z",
                  fill: "rgba(211,152,74,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="15.64%"
              bottom="0%"
              left="0%"
              right="13.55%"
              {...getOverrideProps(overrides, "Vector38512356")}
            ></Icon>
          </View>
          <Icon
            width="25.14px"
            height="25.73px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 31.230990853740877,
              height: 32.09749031142678,
            }}
            paths={[
              {
                d: "M12.571 25.7267C19.5138 25.7267 25.1421 19.9676 25.1421 12.8633C25.1421 5.75911 19.5138 0 12.571 0C5.62825 0 0 5.75911 0 12.8633C0 19.9676 5.62825 25.7267 12.571 25.7267Z",
                fill: "rgba(255,182,182,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="5.47%"
            bottom="84.52%"
            left="11.34%"
            right="80.25%"
            transformOrigin="top left"
            transform="rotate(16.98deg)"
            {...getOverrideProps(overrides, "Vector38512357")}
          ></Icon>
          <Icon
            width="46.75px"
            height="54.59px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 59.96435662023305,
              height: 66.16257946191752,
            }}
            paths={[
              {
                d: "M43.5569 11.784C41.5968 13.1381 40.3428 15.4073 40.0242 18.7889C38.793 17.7885 38.6106 15.9686 39.079 13.6402C38.2228 16.0235 31.2737 28.1532 30.8154 31.9879C30.5242 34.4303 31.479 36.8923 32.9446 38.8413C34.3147 40.6585 36.1001 42.0849 37.9285 43.4234C34.4913 42.1386 31.627 39.3103 30.2664 35.8323C28.2996 30.8106 29.4692 25.2223 31.0159 19.9613C30.6531 20.6598 30.1328 21.9348 29.5312 22.433C28.7579 23.073 27.8413 22.8727 27.2207 23.6689C26.4664 24.6361 26.3232 25.9892 26.5571 27.2055C26.7958 28.4219 27.3686 29.5356 27.932 30.6298C19.9616 29.0964 17.5919 19.7754 21.2343 13.4253C18.9045 17.7045 18.3985 26.3214 21.3631 30.1609C23.0244 32.3151 25.4305 33.9955 26.2611 36.6041C26.8435 38.4359 26.5237 40.4778 25.7217 42.2217C24.9197 43.9656 23.6641 45.4506 22.337 46.8184C21.7928 47.3801 21.2342 47.9224 20.6518 48.4499C20.0083 47.7792 18.916 48.0965 18.6784 49.0045C18.5463 49.5089 18.3378 50.0289 18.0739 50.5602C15.7154 51.108 12.5304 50.3476 12.0445 53.7403C11.9149 54.6451 10.3164 54.2434 9.42843 54.3899C9.66758 53.7088 8.8951 53.1059 8.3303 53.5416C7.59227 54.111 6.80636 54.4447 5.98166 54.5854C3.88117 54.4681 1.82363 53.921 0 52.8561C5.81459 49.1485 10.9159 50.2184 13.1882 43.6042C13.5442 42.5696 13.6587 40.4115 13.6524 37.9838C13.6381 32.4796 12.3729 27.0766 10.1943 22.0441C9.92851 21.4301 9.72599 20.8369 9.63847 20.3179C9.00354 16.5712 9.99173 11.4225 11.5958 8.9996C13.1998 6.58157 15.9734 5.01841 18.833 4.94026C20.2604 4.89628 21.1101 5.5362 22.3704 4.84745C23.7167 4.10982 24.0317 5.07702 24.9435 3.82649C26.5714 1.59409 29.3451 0.441268 32.0662 0.343566C34.7873 0.245863 36.3101 -0.531043 38.783 0.636454C40.3441 1.37408 42.142 5.50619 43.8625 5.53136C47.424 5.58348 48.1072 8.64046 43.5569 11.784Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0.86%"
            bottom="77.91%"
            left="5.07%"
            right="79.29%"
            transformOrigin="top left"
            transform="rotate(16.98deg)"
            {...getOverrideProps(overrides, "Vector38512358")}
          ></Icon>
          <Icon
            width="0.4px"
            height="0.29px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 0.39599617899057193,
              height: 0.2898007004167198,
            }}
            paths={[
              {
                d: "M0.395308 0.288859C0.261958 0.190941 0.13335 0.0979222 0 0C0.104772 0.0440753 0.209574 0.0832452 0.314345 0.11749L0.395308 0.288859Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="21.41%"
            bottom="78.48%"
            left="14.56%"
            right="85.31%"
            {...getOverrideProps(overrides, "Vector38512359")}
          ></Icon>
          <Icon
            width="32.84px"
            height="45.89px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 32.94605174055232,
              height: 45.964794812385605,
            }}
            paths={[]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="40.44%"
            bottom="41.71%"
            left="24.99%"
            right="64.02%"
            {...getOverrideProps(overrides, "Vector38512360")}
          ></Icon>
          <Icon
            width="3.6px"
            height="9.19px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 6.018183818100624,
              height: 9.883855438375747,
            }}
            paths={[
              {
                d: "M0.911886 9.19041L0 8.90132C0.136118 5.6277 1.00099 2.64739 2.693 0L3.60489 0.289088L0.911886 9.19041Z",
                fill: "rgba(211,152,74,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="2.33%"
            bottom="94.09%"
            left="12.6%"
            right="86.19%"
            transformOrigin="top left"
            transform="rotate(16.98deg)"
            {...getOverrideProps(overrides, "Vector38512361")}
          ></Icon>
          <Icon
            width="7.78px"
            height="6.49px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.248857351994957,
              height: 8.517651735958452,
            }}
            paths={[
              {
                d: "M7.77682 5.71706L7.19094 6.48831L0 0.77125L0.585882 0C3.76041 1.14681 6.07716 3.1308 7.77682 5.71706Z",
                fill: "rgba(211,152,74,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="2.43%"
            bottom="95.05%"
            left="10.19%"
            right="87.21%"
            transformOrigin="top left"
            transform="rotate(16.98deg)"
            {...getOverrideProps(overrides, "Vector38512362")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="28.42px"
            height="33.8px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="26.87%"
            bottom="59.98%"
            left="28.75%"
            right="61.74%"
            transformOrigin="top left"
            transform="rotate(-127.74deg)"
            {...getOverrideProps(overrides, "Group38512363")}
          >
            <Icon
              width="28.39px"
              height="33.78px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 43.50138786523621,
                height: 43.84866945644126,
              }}
              paths={[
                {
                  d: "M18.0479 33.7844C18.0066 33.7844 17.9653 33.7825 17.9239 33.7792C15.192 33.556 5.84415 31.8747 0.26139 19.6012C-0.151005 18.6953 -0.0695644 17.5425 0.46424 16.7335L10.918 0.896862C11.3062 0.308674 11.8888 -0.0128486 12.4783 0.000393381C13.0837 0.0185981 13.8607 0.246821 14.0089 0.994736C15.2131 7.07232 20.3999 14.9642 27.1574 16.0111C27.7925 16.1095 28.1776 16.9477 28.3328 17.7335C28.487 18.5128 28.3444 19.3161 27.9418 19.9374L19.5673 32.8671C19.1908 33.4487 18.63 33.7844 18.0479 33.7844Z",
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
              bottom="0.06%"
              left="0%"
              right="0.08%"
              transformOrigin="top left"
              transform="rotate(0.04deg)"
              {...getOverrideProps(overrides, "Vector38512364")}
            ></Icon>
            <Icon
              width="24.79px"
              height="29.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 37.764410756427424,
                height: 38.109224365804835,
              }}
              paths={[
                {
                  d: "M0.145762 15.6253C0.00314995 15.8419 -0.0228705 16.1507 0.0810682 16.3947C5.13165 28.2198 14.1613 29.1475 15.9201 29.2132C16.0894 29.2255 16.2482 29.1286 16.3557 28.9626L24.6704 16.1256C24.7881 15.9436 24.8244 15.7114 24.7703 15.4873C24.7156 15.2622 24.5885 15.0393 24.4017 15.0282C17.2137 14.5994 11.4401 4.71574 11.1482 0.280903C11.1343 0.0696634 10.8979 0.00713204 10.7317 3.87532e-05C10.5608 -0.00208681 10.4052 0.0832596 10.2964 0.247804L0.145762 15.6253Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.58%"
              bottom="7.99%"
              left="7.22%"
              right="5.53%"
              transformOrigin="top left"
              transform="rotate(0.04deg)"
              {...getOverrideProps(overrides, "Vector38512365")}
            ></Icon>
            <Icon
              width="8.67px"
              height="11.23px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.993021752283312,
                height: 13.968352121980217,
              }}
              paths={[
                {
                  d: "M0.972821 11.0123L8.50752 1.24396C9.02258 0.576228 8.21567 -0.451428 7.69997 0.217148L0.165267 9.98545C-0.34979 10.6532 0.457124 11.6808 0.972821 11.0123Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27.48%"
              bottom="39.3%"
              left="18.95%"
              right="50.53%"
              transformOrigin="top left"
              transform="rotate(0.04deg)"
              {...getOverrideProps(overrides, "Vector38512366")}
            ></Icon>
            <Icon
              width="6.44px"
              height="9.39px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 11.207546450836162,
                height: 11.038839900793448,
              }}
              paths={[
                {
                  d: "M0.989882 9.1956C3.06861 6.82654 4.87503 4.08352 6.35419 1.07363C6.74464 0.279116 5.7573 -0.450395 5.3684 0.340965C3.93837 3.2509 2.19203 5.87909 0.182607 8.16917C-0.365652 8.79401 0.443933 9.81781 0.989882 9.1956Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="40.92%"
              bottom="31.3%"
              left="34.99%"
              right="42.33%"
              transformOrigin="top left"
              transform="rotate(0.04deg)"
              {...getOverrideProps(overrides, "Vector38512367")}
            ></Icon>
            <Icon
              width="5.8px"
              height="10.18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 11.423048541688331,
                height: 11.022009123020098,
              }}
              paths={[
                {
                  d: "M0.959864 9.94551C2.85144 7.28122 4.46159 4.30768 5.72924 1.10017C6.05809 0.268079 5.07413 -0.467408 4.744 0.367901C3.51923 3.46693 1.98104 6.34487 0.153048 8.91962C-0.337917 9.61115 0.466553 10.6403 0.959864 9.94551Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="48.4%"
              bottom="21.5%"
              left="49.61%"
              right="30%"
              transformOrigin="top left"
              transform="rotate(0.04deg)"
              {...getOverrideProps(overrides, "Vector38512368")}
            ></Icon>
          </View>
        </View>
        <Icon
          width="13.96px"
          height="14.28px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.960917474869348,
            height: 14.278229715425027,
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
          top="4.26%"
          bottom="94.05%"
          left="48.74%"
          right="49.24%"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "Ellipse 101")}
        ></Icon>
        <Icon
          width="13.96px"
          height="14.28px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.960917474869348,
            height: 14.278229715425027,
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
          top="4.26%"
          bottom="94.05%"
          left="52.06%"
          right="45.92%"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "Ellipse 102")}
        ></Icon>
        <PhoneNumberField
          width="416px"
          height="72px"
          label="Telefone"
          placeholder="Insira seu número"
          position="absolute"
          top="33.16%"
          bottom="58.32%"
          left="20.1%"
          right="19.73%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "PhoneNumberField")}
        ></PhoneNumberField>
        <CheckboxField
          width="672px"
          height="21px"
          label="Li e aceito as Condições Legais e a Política de Privacidade "
          position="absolute"
          top="47.49%"
          bottom="50.03%"
          left="-5%"
          right="2.81%"
          size="large"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "CheckboxField")}
        ></CheckboxField>
        <PasswordField
          width="416px"
          height="72px"
          label="Endereço"
          placeholder="CEP"
          position="absolute"
          top="19.54%"
          bottom="71.93%"
          left="20.1%"
          right="19.73%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={true}
          {...getOverrideProps(overrides, "PasswordField")}
        ></PasswordField>
        <Button
          width="102px"
          height="42px"
          position="absolute"
          top="59.92%"
          bottom="35.1%"
          left="28.06%"
          right="57.19%"
          size="default"
          isDisabled={false}
          variation="default"
          children="Voltar"
          onClick={() => navigate("/CadastroUsuario1")}
          {...getOverrideProps(overrides, "Button38545630")}
        ></Button>
        <Button
          width="100px"
          height="40px"
          position="absolute"
          top="60.04%"
          bottom="35.22%"
          left="56.55%"
          right="28.99%"
          backgroundColor="rgba(0,0,0,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Continuar"
          onClick={() => navigate("/CadastroUsuario3")}
          {...getOverrideProps(overrides, "Button38545631")}
        ></Button>
      </View>
      <Text
        fontSize="44px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="66px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="384px"
        height="117px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="43.51%"
        bottom="46.02%"
        left="16.39%"
        right="58.33%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Já estamos&#xA;quase lá"
        {...getOverrideProps(overrides, "J\u00E1 estamos quase l\u00E1")}
      ></Text>
      <Image
        src="https://github.com/Projeto-PROA-Conecta/imagens/blob/main/LogoPretaConecta.png?raw=true"
        width="20.41%"
        height="13.43%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="27.84%"
        bottom="58.73%"
        left="18.83%"
        right="60.76%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"
        )}
      ></Image>
    </View>
  );
}
