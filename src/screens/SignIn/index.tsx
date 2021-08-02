import React, { useState } from "react";
import { Button, Text, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

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

export function SignIn() {
  const [loading, setLoading] = useState(false);
  return(
    <Background>
      <Container>
        <Image source={Logo} />

        <Form>
          <FormInput />
          <FormInput />

          <SubmitButton loading={loading}>
            Entrar
          </SubmitButton>  
        </Form>

        <TouchableOpacity>
          <ForgotPassText>Esqueci minha senha</ForgotPassText>
        </TouchableOpacity>

        <SignLink>
          <SignLinkText>Criar conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}