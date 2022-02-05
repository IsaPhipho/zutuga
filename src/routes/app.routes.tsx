import React from 'react';
import { View } from 'react-native';
import { useTheme} from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../screens/Home';
import { OnboardingOne } from '../screens/OnboardingOne';
import { Profile } from '../screens/Profile';
import { Links } from '../screens/Links';
// import { Notifications } from '../screens/Notifications';

export function AppRoutes(){
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.shape,
        tabBarInactiveTintColor: theme.colors.primary.light,
        tabBarLabel: '',
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.colors.primary.dark,
          borderTopColor: theme.colors.primary.dark,
          paddingTop: 4,
        },
        headerTitleStyle: { color: "white" },
        tabBarBackground: () => (
          <View style={{ flex: 1 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#F5EA4E', '#65FC8E', '#F5785A']}
              style={{ height: 2 }}
            />
          </View>
          ),
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => 
            <Feather
              name="home"
              size={size}
              color={color}
            /> 
          )
        }}  
      />
      <Screen
        name="Link"
        component={Links}
        options={{
          tabBarIcon: (({ size, color }) => 
            <Feather
              name="link"
              size={size}
              color={color}
            /> 
          )
        }}
      />
    <Screen
      name="Notification"
      component={OnboardingOne}  // alterar Home para Notifications
      options={{
        tabBarIcon: (({ size, color }) => 
          <Feather
            name="bell"
            size={size}
            color={color}
          /> 
        )
      }}  
    />
    <Screen
      name="Profile"
      component={Profile} 
      options={{
        tabBarIcon: (({ size, color }) => 
          <Feather
            name="user"
            size={size}
            color={color}
          /> 
        )
      }}
    />
  </Navigator>
  )
}