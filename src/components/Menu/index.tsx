import React from 'react';

import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Content,
  Title,
  MenuIcon
 } from './styles';


 type Props = RectButtonProps & {
   title: string;
   icon: React.FC<SvgProps>;
   onClick: any;
 }

 export function Menu({ title, icon: Icon, ...rest}: Props) {
   return (
     <RectButton {...rest}>
       <Container>
         <Content>
          <MenuIcon
            source={Icon}
            width={42}
            height={42}
          />
          <Title>
            { title }
          </Title>
         </Content>
       </Container>
     </RectButton>
   )
 }
