import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.secondary,
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${theme.colors.secondary};
`;
