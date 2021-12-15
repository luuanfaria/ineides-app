import React, { useState } from 'react';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Background } from '../../components/Background';
import Button from '../../components/Button';

import {
  Container,
  Header,
  Content,
  Title,
  BackText,
  BackButton,
  Form,
  FormInput,
  FormBox,
  FormTitle,
  ButtonBox,
} from './styles';

export function SignUp({ navigation }: { navigation: any }) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <Background>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <BackButton>
            <AntDesign name="arrowleft" size={24} color="#FFF" />
            <BackText>Voltar</BackText>
          </BackButton>
        </TouchableOpacity>

        <Header>
          <Ionicons name="md-person-circle" size={30} color="#333" />
          <Entypo name="home" size={30} color="#DCDCE5" />
          <Ionicons name="attach" size={28} color="#DCDCE5" />
        </Header>

        <ScrollView>

          <Content>
            <Title>Informações Pessoais</Title>
            <Form>
              <FormBox>
                <FormTitle>Nome</FormTitle>
                <FormInput
                  name="name"
                  placeholder="Digite seu nome"
                />
              </FormBox>

              <FormBox>
                <FormTitle>Sobrenome</FormTitle>
                <FormInput
                  name="sobrenome"
                  placeholder="Digite seu sobrenome"
                />
              </FormBox>

              <FormBox>
                <FormTitle>CPF</FormTitle>
                <FormInput
                  name="cpf"
                  placeholder="Digite seu CPF"
                />
              </FormBox>

              <FormBox>
                <FormTitle>CNPJ</FormTitle>
                <FormInput
                  name="cnpj"
                  placeholder="Digite seu CNPJ"
                />
              </FormBox>
            </Form>

          </Content>

          <ButtonBox>
            <Button loading={loading}>
              Próximo
            </Button>
          </ButtonBox>

        </ScrollView>

      </Container>


    </Background>
  );
}
