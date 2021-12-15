import React from 'react';
import { appointment } from '../../utils/appointment';

import {
  Container,
  Header,
  Title,
  Card,
  SideText,
  Flag,
  FlagText,
  Info,
  FlagContent
 } from './styles';

export function Appointment() {
  return (
    <Container>

      <Header>
        <Title>Meus agendamentos</Title>
        <SideText>Total {appointment.length}</SideText>
      </Header>

      {
        appointment.map((appointment) => (
          <Card
            key={appointment.id}
          >
            <FlagContent>
              <Flag
                status={appointment.status}
              >
                <FlagText>{appointment.hour }</FlagText>
              </Flag>
              <Flag
                status={appointment.status}
              >
                <FlagText>{appointment.total}</FlagText>
              </Flag>
              <Flag
                status={appointment.status}
              >
                <FlagText>{appointment.status}</FlagText>
              </Flag>
            </FlagContent>
            <Info>{appointment.username }</Info>
            <Info>{appointment.address }</Info>
          </Card>
        ))
      }


    </Container>
  )
}
