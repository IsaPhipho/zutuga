import React from 'react';

import { ViewProps } from 'react-native';

import { 
  Container,
  Icon,
  Message
} from './styles';


type Props = ViewProps;

export function SuccessMessage({...rest} : Props) {
  return (
    <Container {...rest}>  
      <Icon name="check-circle" /> 
      <Message>Publicação feita com sucesso!</Message>
    </Container>
  );
}