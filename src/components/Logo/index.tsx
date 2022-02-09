import React from 'react';
import { ViewProps } from 'react-native';
 ;

import { 
  Container,
  LogoY,
  LogoG,
  LogoR
} from './styles';


type Props = ViewProps;

export function Logo({...rest} : Props) {
  return (
    <Container {...rest}>  
      <LogoY>zu</LogoY>
      <LogoG>tu</LogoG>
      <LogoR>ga</LogoR>
      </Container>
  );
}