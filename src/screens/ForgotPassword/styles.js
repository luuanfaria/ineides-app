import styled from "styled-components";

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  align-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
  margin: 28px 40px;
`;

export const Text = styled.Text`
  text-align: center;
  color: #FFF;
  font-size: 16px;
  margin: 0 32px 22px 32px;
`;

export const Image = styled.Image`
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin: 22px 22px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 8px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
