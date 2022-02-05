import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_900Black
} from '@expo-google-fonts/nunito';

import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';

import { Links } from './src/screens/Links';
// import { AppRoutes } from './src/routes/app.routes';

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
    <ThemeProvider theme={theme}>
      <Links />
      {/* <NavigationContainer> */}
        {/* <AppRoutes /> */}
      {/* </NavigationContainer> */}
    </ThemeProvider>
  )
}
