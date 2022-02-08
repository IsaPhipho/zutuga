import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import questionOrange from '../../assets/images/questionOrange.png';

import { 
  Container, 
  Logo,
  Header,
  Body, 
  IconQuestion,
  ObOneText,
  Footer,
  View,
  FirstCircle,
  SecondCircle,
  NextButton,
  IconNext
} from './styles';

export function OnboardingOne() {

  return (
    <Container>
        <Header>
          <LinearGradient
            start={{x:0, y:1}}
            end={{x:1, y:0}}
            locations={[0.25, 0.45, 0.75]}
            colors={['#F5EA4E', '#65FC8E', '#F5785A']}
            style={{
              flex: 1
            }}
          >
          <Logo>zutuga</Logo>
          </LinearGradient>
        </Header>
      <IconQuestion>
        <Image 
          source={questionOrange} 
          style={questionOrange}
        />
      </IconQuestion>
      <Body>
        <ObOneText> 
          Tire todas as suas dúvidas sobre imigração, veja dicas da comunidade...
        </ObOneText>
      </Body>
      <Footer>
        <View>
        <FirstCircle />
        <SecondCircle />
        </View>
        <NextButton onPress={() => {}}>
          <IconNext name="arrow-right" />
        </NextButton>
      </Footer>  
    </Container>  
  )
}