import styled from 'styled-components';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  background-color: #FFF;
  height: ${theme.dimensions.heightFull};
  padding-bottom: 120px;
`;
