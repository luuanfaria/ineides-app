import React, { forwardRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container>
      {icon && <Ionicons name={icon} size={20} color="#10014C" />}
      <TInput {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
