import React from 'react';
import { Linking } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { ButtonLink } from '../../components/Forms/ButtonLink';

import { 
  Container, 
  Logo,
  Title,
  Header,
  BorderLine,
  Body,
} from './styles';

export function Links() {
  return (
    <Container>
      <Header>
        <Logo>zutuga</Logo>
        <Title> 
          Links úteis
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
      <Body>
 
        <ButtonLink 
          title="Atualizar"
          onPress={() => { 
            Linking.openURL('https://reactnative.dev'); 
          }}
        />
        <ButtonLink 
          title="Atualizar"
          onPress={() => { 
            Linking.openURL('https://reactnative.dev'); 
          }}
        />
      </Body>  
    </Container>  
  )
}