import { GestureHandlerRootView } from 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';

import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_900Black
} from '@expo-google-fonts/nunito';

import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_900Black
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <ThemeProvider theme={theme}>
        <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
        <NavigationContainer>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
