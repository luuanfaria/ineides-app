import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  margin: ${getStatusBarHeight(true)}px 24px 11px 24px;
  padding: 12px;
  flex-direction: row;
  color: #FFF;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserPofile = styled.View`
  flex-direction: row;
`;

export const UserPhoto = styled.View`
  color: #FFF;
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;
`;

export const UserInfo = styled.View`
  display: flex;
  padding: 5px 10px;
`;

export const UserGreeting = styled.Text`
  color: #FFF;
  font-size: 21px;
  font-weight: bold;
`;

export const UserAvaliation = styled.Text`
  color: #FFF;
  padding-top: 2px;
`;
