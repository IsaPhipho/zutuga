import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import communityOrange from '../../assets/images/communityOrange.png';

import { 
  Container, 
  Logo,
  Header,
  Body, 
  IconCommunity,
  ObOneText,
  Footer,
  View,
  FirstCircle,
  SecondCircle,
  NextButton,
  IconNext
} from './styles';

export function OnboardingTwo() {
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
      <IconCommunity>
        <Image 
          source={communityOrange} 
          style={communityOrange}
        />
      </IconCommunity>
      <Body>
        <ObOneText> 
        Compartilhe informações, conecte-se e ganhe reconhecimento!
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