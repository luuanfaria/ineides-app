import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  height: 46px;
  background: ${theme.colors.darkBlue};
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
