import React, { useState } from "react";
import { TouchableOpacity } from 'react-native';

import { Background } from "../../components/Background";

import Logo from './../../assets/LogoHorizontalBranco.png';

import {
  Container,
  Image,
  Form,
  FormInput,
  SubmitButton,
  ForgotPassText,
  SignLink,
  SignLinkText
} from './styles';

export function SignIn({ navigation }: { navigation: any }) {
  const [loading, setLoading] = useState(false);
  return(
    <Background>
      <Container>
        <Image source={Logo} />

        <Form>
          <FormInput
            icon="mail"
            keyBoardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
          />
          <FormInput
            icon="ios-lock-closed"
            placeholder="Digite sua senha"
            type="password"
            secureTextEntry
          />

          <SubmitButton
            loading={loading}
            onPress={() => navigation.navigate('Home')}
          >
            Entrar
          </SubmitButton>
        </Form>

        <TouchableOpacity>
          <ForgotPassText>Esqueci minha senha</ForgotPassText>
        </TouchableOpacity>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}
