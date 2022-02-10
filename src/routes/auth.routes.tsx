import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { OnboardingOne } from "../screens/OnboardingOne";
import { OnboardingTwo } from "../screens/OnboardingTwo";
import { SignUp } from "../screens/SignUp";
import { Login } from "../screens/Login";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OnboardingOne" component={OnboardingOne} />
      <Screen name="OnboardingTwo" component={OnboardingTwo} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Login" component={Login} />
    </Navigator>
  )
}