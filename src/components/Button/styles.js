import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  height: 50px;
  background: ${theme.colors.primary};
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
