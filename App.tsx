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

// import { OnboardingOne } from './src/screens/OnboardingOne';
// import { OnboardingTwo } from './src/screens/OnboardingTwo';
// import { Login } from './src/screens/Login';
// import { SignUp } from './src/screens/SignUp';

// import { Profile } from './src/screens/Profile';
// import { Home} from './src/screens/Home';

// import { DoubtList} from './src/screens/DoubtList';
// import { SendDoubt } from './src/screens/SendDoubt';

// import { SendTip } from './src/screens/SendTip';

// import { Links } from './src/screens/Links';

// import { AppRoutes } from './src/routes/app.routes';

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
        {/* <DoubtList /> */}
        <NavigationContainer>
          {/* <AppRoutes /> */}
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
