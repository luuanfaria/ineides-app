import { Dimensions } from 'react-native';

export const theme = {
  colors: {
    primary: '#0B4EE3',
    secondary: '#10014C',
    disabledBlue: '#34BBDA',
    highlight: '#2EF0DF',
    disabled: '#DCDCE5',
    clear: '#EDF4F5',

    text: '#333333',
    white: '#FFFFFF',
  },

  dimensions: {
    heightFull: Dimensions.get('window').height,
    widthFull: Dimensions.get('window').width
  }
}
