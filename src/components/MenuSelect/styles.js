import styled from 'styled-components';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  margin: 30px 0;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 0 0 18px 24px;
`;

export const Content = styled(ScrollView)`
  min-height: 120px;
  max-height: 120px;
  padding-left: 24px;
`;
