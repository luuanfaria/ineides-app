import styled from 'styled-components';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 18px 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const SideText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
`;

export const Card = styled.View`
  background: ${theme.colors.clear};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  margin-bottom: 22px;
  overflow: hidden;
`;

export const FlagContent = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const Flag = styled.View`
  display: flex;
  background: ${props => props.status === 'Confirmado' ? `${theme.colors.primary}` : `${theme.colors.text}`};
  color: #FFF;
  font-weight: bold;
  padding: 6px;
  border-radius: 4px;
  margin-right: 8px;
`;

export const FlagText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;

export const Info = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
