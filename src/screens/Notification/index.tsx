import React from 'react';

import { Logo } from '../../components/Logo';

import { LinearGradient } from 'expo-linear-gradient';

import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

import { ButtonNotification } from '../../components/ButtonNotification';

import { 
  Container, 
  Title,
  Header,
  BorderLine,
  Body,
  Icon
} from './styles';

export function Notification() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  // function handleNavigateToLinks() {
  //   navigate('Links');
  // }

  function handleNavigateToEvaluateAnswer() {
    navigate('EvaluateAnswer');
  }

  // function handleNavigateToTipListp() {
  //   navigate('TipList');
  // }

  return (
    <Container>
      <Header>
        <Logo />
        <Title> 
          Notificações
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
        <Icon name="activity" />
          <ButtonNotification
            title="Foi adicionado o site do Sistema de Saúde na seção Links Úteis!"
            // onPress={handleNavigateToLinks}
          />
        <Icon name="flag" />  
          <ButtonNotification
            title="Sua dúvida foi respondida! Veja e avalie a resposta."
            onPress={handleNavigateToEvaluateAnswer}
          />
        <Icon name="coffee" />  
          <ButtonNotification
            title="Uma nova dica foi enviada para a seção    Dicas!"
            // onPress={handleNavigateToTipListp}
          />
      </Body>  
    </Container>  
  )
}