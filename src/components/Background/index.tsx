import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../global/styles/theme';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  const { primary, darkBlue } = theme.colors;

  return(
    <LinearGradient
      style={{ flex: 1}}
      colors={[darkBlue, primary]}
    >
      {children}
    </LinearGradient>
  )
}