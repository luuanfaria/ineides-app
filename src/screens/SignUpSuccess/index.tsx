import React from 'react';

import { Background } from '../../components/Background';

import SuccessImage from '../../assets/success.png';

import {
  Container,
  Title,
  Text,
  Image
} from './styles';

export function SignUpSuccess() {
  return (
    <Background>
      <Container>
        <Title>
          Recebemos seu cadastro
        </Title>

        <Text>
          Você está há alguns passos de se tornar uma Ineide!
        </Text>

        <Text>
          Vamos analisar seu cadastro e avisaremos por e-mail
        </Text>

        <Image source={SuccessImage} />

      </Container>
    </Background>
  )
}
