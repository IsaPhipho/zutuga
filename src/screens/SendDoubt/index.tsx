import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { 
  Container, 
  Logo,
  Title,
  Header,
  BorderLine
} from './styles';

export function SendDoubt() {
  return (
    <Container>
      <Header>
        <Logo>zutuga</Logo>
        <Title> 
          Envie sua dúvida
        </Title>
      </Header>
      <BorderLine>
        <LinearGradient
          start={{x:0, y:1}}
          end={{x:1, y:0}}
          locations={[0.25, 0.45, 0.75]}
          colors={['#F5EA4E', '#65FC8E', '#F5785A']}
          style={{
            flex: 1
          }}>
        </LinearGradient>
      </BorderLine>
    </Container> 
  )
}   