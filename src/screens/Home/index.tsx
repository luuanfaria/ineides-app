import React from 'react';
import { ScrollView } from 'react-native';

import { Header } from '../../components/Header';
import { Appointment } from '../../components/Appointment';
import { MenuSelect } from '../../components/MenuSelect';

import {
  Container,
  Content,
} from './styles';

export function Home() {
  return (
    <Container>
        <Header />

        <Content>
          <ScrollView>
            <MenuSelect />

            <Appointment />

          </ScrollView>
        </Content>
    </Container>
  )
}
