import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';

import { Menu } from '../Menu';
import { menu } from '../../utils/menu';

import { Container, Title, Content } from './styles';

export function MenuSelect() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Container>
      <Title>Meus atalhos</Title>
      <Content
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}
      >
        {
          menu.map(menu => (
            <Menu
              key={menu.id}
              title={menu.title}
              icon={menu.icon}
              onClick={() =>{
                setIsSelected(true)
              }}
            />
          ))
        }
      </Content>
    </Container>
  )
}
