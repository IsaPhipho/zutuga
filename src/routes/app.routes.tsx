import React from 'react';
import { View } from 'react-native';
import { useTheme} from 'styled-components/native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// const { Navigator, Screen } = createBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { Home } from '../screens/Home';
import { DoubtList } from '../screens/DoubtList';
import { TipList } from '../screens/TipList';
import { SendDoubt } from '../screens/SendDoubt';
import { SendTip } from '../screens/SendTip';

import { Links } from '../screens/Links';
import { Profile } from '../screens/Profile';
import { FavoriteList } from '../screens/FavoriteList';
import { Notification } from '../screens/Notification';
import { EvaluateAnswer } from '../screens/EvaluateAnswer';

function HomeNav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
        <Stack.Screen
          name="DoubtList"
          component={DoubtList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendDoubt"
          component={SendDoubt}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TipList"
          component={TipList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendTip"
          component={SendTip}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function NotificationNav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
        <Stack.Screen
          name="Links"
          component={Links}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EvaluateAnswer"
          component={EvaluateAnswer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TipList"
          component={TipList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.shape,
        tabBarInactiveTintColor: theme.colors.primary.light,
        tabBarLabel: '',
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.colors.primary.dark,
          borderTopColor: theme.colors.primary.dark,
          paddingTop: 16,
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
      <Tab.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          tabBarIcon: (({ color }) => 
            <MaterialCommunityIcons
              name="home-circle"
              size={32}
              color={color}
            /> 
          )
        }}  
      />
      <Tab.Screen
        name="Link"
        component={Links}
        options={{
          tabBarIcon: (({ color }) => 
            <MaterialCommunityIcons
              name="share-circle"
              size={32}
              color={color}
            /> 
          )
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteList}
        options={{
          tabBarIcon: (({ color }) => 
            <MaterialCommunityIcons
              name="heart-circle"
              size={32}
              color={color}
            /> 
          )
        }}  
      />
      <Tab.Screen
        name="NotificationNav"
        component={NotificationNav}
        options={{
          tabBarIcon: (({ color }) => 
            <MaterialCommunityIcons
              name="bell-circle"
              size={32}
              color={color}
            /> 
          )
        }}  
      />
      <Tab.Screen
        name="Profile"
        component={Profile} 
        options={{
          tabBarIcon: (({ color }) => 
            <Ionicons
              name="person-circle-sharp"
              size={32}
              color={color}
            /> 
          )
        }}
      />
    </Tab.Navigator>
  );
}