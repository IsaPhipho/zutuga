import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import {  
  Title,
} from './styles';

export function Loading() {
  return (
    <LinearGradient
      start={{x:0, y:1}}
      end={{x:1, y:0}}
      locations={[0.25, 0.45, 0.75]}
      colors={['#F5EA4E', '#65FC8E', '#F5785A']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Title>zutuga</Title>
    </LinearGradient>
  )
}