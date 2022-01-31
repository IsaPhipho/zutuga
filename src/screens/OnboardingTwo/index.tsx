import React from 'react';

import { ImageBackground, Image } from 'react-native';

import tileWallpaper from '../../assets/images/tileWallpaper.png';
import communityOrange from '../../assets/images/communityOrange.png';

import { 
  Container, 
  Logo,
  Header,
  Body, 
  IconCommunity,
  ObOneText,
  Footer,
  IconNext
} from './styles';

export function OnboardingTwo() {
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
      <IconCommunity>
        <Image 
          source={communityOrange} 
          style={communityOrange}
        />
      </IconCommunity>
      <Body>
        <ObOneText> 
        Ajude a comunidade, faça conexões e ganhe reconhecimento!
        </ObOneText>
      </Body>

      <Footer>
        <IconNext name="arrow-right" />
      </Footer>  

    </Container>  
  )
}