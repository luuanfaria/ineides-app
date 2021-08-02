import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 220px;
`

export const Form = styled.View`
  align-self: stretch;
  margin-top: 48px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 8px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const ForgotPassText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14;
  margin-top: 32px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15;
`;