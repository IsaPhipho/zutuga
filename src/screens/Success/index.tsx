import React from 'react';

import { Logo } from '../../components/Logo';
import { LinearGradient } from 'expo-linear-gradient';

import { SuccessMessage } from '../../components/SuccessMessage';
import { ButtonPush } from '../../components/ButtonPush';

import {
  Container,
  Header,
  BorderLine,
  Footer
} from './styles';

interface Props {
  closeSuccessMessage: () => void;
}

export function Success({
  closeSuccessMessage
}: Props) {

  return (
    <Container>
      <Header>
        <Logo />
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
      <SuccessMessage />
      <Footer>
        <ButtonPush 
          title="Voltar" 
          onPress={closeSuccessMessage}
        /> 
      </Footer>
    </Container>
  )
}    