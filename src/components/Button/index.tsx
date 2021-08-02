import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
  children: any;
  loading: Boolean;
}

export default function Button({ children, loading, ...rest } : Props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
