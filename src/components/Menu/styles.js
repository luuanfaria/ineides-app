import styled from 'styled-components';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
  background: ${theme.colors.clear};
`;

export const Content = styled.View`
  width: 110px;
  height: 116px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
`;

export const Title = styled.Text`
  color: ${theme.colors.text};
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
`;

export const MenuIcon = styled.Image`
  margin: auto;
  width: 32px;
  height: 32px;
`;
