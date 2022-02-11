import React from 'react';

import LottieView from 'lottie-react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';

import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

import community from '../../assets/animations/community.json';

import { 
  Container, 
  Logo,
  Header,
  Body, 
  ObOneText,
  Footer,
  View,
  FirstCircle,
  SecondCircle,
  IconNext
} from './styles';

export function OnboardingTwo() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  function handleNavigateToSignUp() {
    navigate('SignUp');
  }

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
      <LottieView 
        source={community}
        style={{ height: 200 }}
        resizeMode="contain"
        autoPlay
        loop
      /> 
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
        <TouchableOpacity onPress={handleNavigateToSignUp}>
          <IconNext name="arrow-right" />
        </TouchableOpacity>
      </Footer>   
    </Container>  
  )
}