import React, { useState } from 'react';

import { Background } from '../../components/Background';

import ForgotImage from '../../assets/forgotpassword.png';
import PasswordSuccess from '../../assets/passwordSuccess.png';

import {
  Container,
  Title,
  Text,
  Image,
  Form,
  FormInput,
  SubmitButton
} from './styles';

export function ForgotPassword({ navigation }: { navigation: any }) {
  const [mailSend, setMailSend] = useState(false);
  const [loading, setLoading] = useState(false);

  function sendMail() {
    setMailSend(true);
  }

  return (
    <Background>
      <Container>

        {
          !mailSend && (
            <>
              <Title>
                Esqueceu sua senha?
              </Title>

              <Text>
                Digite seu e-mail cadastrado no campo abaixop e enviaremos as
                instruções para redefinição da sua senha
              </Text>

              <Image source={ForgotImage} />

              <Form>
                <FormInput
                  icon="mail"
                  keyBoardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Digite seu email"
                  returnKeyType="next"
                />

                <SubmitButton
                  loading={loading}
                  onPress={sendMail}
                >
                  Enviar
                </SubmitButton>
              </Form>
            </>
          )
        }

        {
          mailSend && (
            <>
              <Title>
                Enviamos as instruções para seu e-mail
              </Title>

              <Text>
                Por favor, verifique nossas instruções para redefinir sua senha
              </Text>

              <Image source={PasswordSuccess} />


              <Form>
                <SubmitButton
                  loading={loading}
                  onPress={() => navigation.navigate('SignIn')}
                >
                  Ir para tela de login
                </SubmitButton>
              </Form>
            </>
          )
        }


      </Container>
    </Background>
  )
}
