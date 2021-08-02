import React, { forwardRef } from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

type Props = {
  icon: string;
  style: any;
}

function Input({ style, icon, ...rest } : Props) {
  return (
    <Container>
      {/* {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.7)" />} */}
      <TInput {...rest} />
    </Container>
  );
}

// Input.propTypes = {
//   icon: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

// Input.defaultProps = {
//   icon: null,
//   style: {},
// };

export default forwardRef(Input);
