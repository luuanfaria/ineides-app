import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const BackButton = styled.View`
  flex-direction: row;
  margin: ${getStatusBarHeight(true)}px 24px 11px 24px;
  align-items: center;
`;

export const Header = styled.View`
  padding: 12px 50px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 24px 33px 24px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Content = styled.View`
  padding: 24px 24px;
  margin: 0 24px;
  background-color: #FFF;
  border-radius: 8px;
`;

export const ButtonBox = styled.View`
  padding: 34px 24px;
  margin: 0 24px;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const BackText = styled.Text`
  color: #FFF;
  padding-left: 8px;
  font-size: 16px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 22px;
`;

export const FormBox = styled.View`
  margin-bottom: 8px;
`;

export const FormTitle = styled.Text`
  font-size: 16px;
  padding-bottom: 8px;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#DCDCE5',
})`
  background: ${theme.colors.clear};
  font-size: 15px;
  padding: 16px 25px;
  border-radius: 8px;
  color: #333;
`;

export const FormDocuments = styled.View`
  background: ${theme.colors.primary};
  color: #FFF;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
`;

export const FormDocumentsImage = styled.View`
  padding: 12px;
`;

export const FormDocumentsTitle = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;

export const FormDocumentsText = styled.Text`
  color: #FFF;
  padding: 12px 22px 22px;
  text-align: center;
  line-height: 18px;
`;

export const TextInfo = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  color: #333;
`;
