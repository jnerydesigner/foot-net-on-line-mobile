import React from 'react';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';

import { Text } from 'react-native';
import { COLORS, FONTS, IMAGESAPP } from '../../constants';

import { BtnLoginText, BtnLogin, Container, Title, SubTitle, InputViewApp, InputViewAppDigit, ImgApp } from './styles';

export function Login() {
  return (
    <Container
      themeColorBG={COLORS.light.secondary}
    >
      <ImgApp source={IMAGESAPP.logo} />
      <Title
        font={FONTS.poppins_bold}
        color={COLORS.light.primary}
        isLight={COLORS.light.isLight}
      >Bem vindo ao Foot Net</Title>
      <SubTitle
        font={FONTS.poppins_light}
        color={COLORS.light.primary}
        isLight={COLORS.light.isLight}
      >Faça o login para continuar</SubTitle>

      <InputViewApp colorBorder={COLORS.borderApp}>
        <IconFontisto name="email" size={30} color={COLORS.light.primary} />
        <InputViewAppDigit />
      </InputViewApp>
      <InputViewApp colorBorder={COLORS.borderApp}>
        <IconFeather name="lock" size={30} color={COLORS.light.primary} />
        <InputViewAppDigit />
      </InputViewApp>


      <BtnLogin isLight={COLORS.light.isLight} color={COLORS.light.primary}>
        <BtnLoginText isLight={COLORS.light.isLight} color={COLORS.light.secondary}>Login</BtnLoginText>
      </BtnLogin>

    </Container>
  );
};
