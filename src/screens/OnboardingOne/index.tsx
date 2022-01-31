import React from 'react';

import { ImageBackground, Image } from 'react-native';

import tileWallpaper from '../../assets/images/tileWallpaper.png';
import questionOrange from '../../assets/images/questionOrange.png';

// import OnboardingSvg from '../../assets/images/azulejo.svg';

import { 
  Container, 
  Logo,
  Header,
  Body, 
  IconQuestion,
  ObOneText,
  Footer,
  IconNext
} from './styles';

export function OnboardingOne() {
  return (
    <Container>
      <ImageBackground 
        source={tileWallpaper} 
        resizeMode="cover" 
        style={tileWallpaper}
      >
        <Header>
          <Logo>zutuga</Logo>
        </Header>
      </ImageBackground>
      <IconQuestion>
        <Image 
          source={questionOrange} 
          style={questionOrange}
        />
      </IconQuestion>
      <Body>
        <ObOneText> 
          Tire todas as suas dúvidas sobre imigração, veja dicas e indicações...
        </ObOneText>
      </Body>

      <Footer>
        <IconNext name="arrow-right" />
      </Footer>  

    </Container>  
  )
}