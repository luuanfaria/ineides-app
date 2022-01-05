import React, { useState } from 'react';
import { Ionicons, Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
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
  FormDocuments,
  TextInfo,
  FormDocumentsImage,
  FormDocumentsTitle,
  FormDocumentsText,
} from './styles';

const steps = [
  {
    id: 'personal',
    title: 'Informações Pessoais'
  },
  {
    id: 'street',
    title: 'Informações Residêncial'
  },
  {
    id: 'documents',
    title: 'Envio de Documentos'
  }
]

export function SignUp({ navigation }: { navigation: any }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    cpf: '',
    cnpj: '',
    cep: '',
    street: '',
    streetNumber: '',
    streetAddress2: ''
  });

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePrev() {
    setCurrentStep((prevState) => prevState -1);
  }

  return (
    <Background>
      <Container>
        {currentStep === 0 &&(
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <BackButton>
              <AntDesign name="arrowleft" size={24} color="#FFF" />
              <BackText>Voltar</BackText>
            </BackButton>
          </TouchableOpacity>
        )}

        {currentStep > 0 && (
          <TouchableOpacity onPress={handlePrev}>
            <BackButton>
              <AntDesign name="arrowleft" size={24} color="#FFF" />
              <BackText>Voltar</BackText>
            </BackButton>
          </TouchableOpacity>
        )}

        <Header>
          <Ionicons
            name="md-person-circle"
            size={30}
            color={
              currentStep >= 0 ? '#333' : '#DCDCE5'
            }
          />
          <Entypo
            name="home"
            size={30}
            color={
              currentStep >= 1 ? '#333' : '#DCDCE5'
            }
          />
          <Ionicons
            name="attach"
            size={28}
            color={
              currentStep >= 2 ? '#333' : '#DCDCE5'
            }
          />
        </Header>

        <ScrollView>

          <Content>
            <Title>{steps[currentStep].title}</Title>
            <Form>
              {steps[currentStep].id === 'personal' && (
                <>
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
                      name="lastName"
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
                </>
              )}

              {steps[currentStep].id === 'street' && (
                <>
                  <FormBox>
                    <FormTitle>CEP</FormTitle>
                    <FormInput
                      name="cep"
                      placeholder="Digite seu CEP"
                    />
                  </FormBox>

                  <FormBox>
                    <FormTitle>Endereço</FormTitle>
                    <FormInput
                      name="street"
                      placeholder="Digite seu endereço"
                    />
                  </FormBox>

                  <FormBox>
                    <FormTitle>Número</FormTitle>
                    <FormInput
                      name="streetNumber"
                      placeholder="Digite o número do endereço"
                    />
                  </FormBox>

                  <FormBox>
                    <FormTitle>Complemento</FormTitle>
                    <FormInput
                      name="streetAddress2"
                      placeholder="Digite o complemento"
                    />
                  </FormBox>
                </>
              )}

              {steps[currentStep].id === 'documents' && (
                <>
                  <FormBox>
                    <FormDocuments>
                      <FormDocumentsImage>
                        <Entypo name="v-card" size={32} color="white" />
                      </FormDocumentsImage>
                      <FormDocumentsTitle>Documento</FormDocumentsTitle>
                      <FormDocumentsText>
                        Clique aqui e tire uma foto do seu documento com RG e CPF
                      </FormDocumentsText>
                    </FormDocuments>

                    <FormDocuments>
                      <FormDocumentsImage>
                        <FontAwesome5 name="file-invoice" size={32} color="white" />
                      </FormDocumentsImage>
                      <FormDocumentsTitle>
                        Comprovante de residência
                      </FormDocumentsTitle>
                      <FormDocumentsText>
                        Clique aqui e tire uma foto do seu comprovante de residência
                      </FormDocumentsText>
                    </FormDocuments>
                  </FormBox>

                  <TextInfo>
                    Lembre-se que as fotos precisam estar com as informações legíveis
                  </TextInfo>
                </>
              )}
            </Form>

          </Content>

          <ButtonBox>
            {
              currentStep < 2 && (
                <Button loading={loading} onPress={handleNext}>
                  Próximo
                </Button>
              )
            }
            {
              currentStep > 1 && (
                <Button loading={loading} onPress={() => navigation.navigate('SignUpSuccess')}>
                  Enviar
                </Button>
              )
            }

          </ButtonBox>

        </ScrollView>

      </Container>


    </Background>
  );
}
