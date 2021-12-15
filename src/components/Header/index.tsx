import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  UserPhoto,
  UserInfo,
  Image,
  UserGreeting,
  UserAvaliation,
  UserPofile,
} from './styles';

export function Header() {
  const [user, setUser] = useState('Luan');

  return (
    <Container>
      <UserPofile>
        <UserPhoto>
          <Image
            source={{
              uri:
              'https://avatars.githubusercontent.com/u/15223018?v=4'
            }}
          />
        </UserPhoto>
        <UserInfo>
          <UserGreeting>Olá, {user}</UserGreeting>
          <UserAvaliation>Sua nota é de 4,98</UserAvaliation>
        </UserInfo>
      </UserPofile>
      <AntDesign name="questioncircleo" size={24} color="white" />
    </Container>
  )
}
