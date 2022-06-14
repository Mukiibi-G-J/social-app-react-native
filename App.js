import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();

export default function App() {
  // const [isFirstLaunch, setIsFirstLaunch] = useState();
  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if (value == null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   });
  // }, []);
  // if (isFirstLaunch === null) {
  //   return <></>;
  // } else if (isFirstLaunch === true) {
  //   return (
  //     <>
  //       <NavigationContainer>
  //         <AppStack.Navigator headerModel="none">
  //           <AppStack.Screen name="onboarding" component={OnboardingScreen} />
  //           <AppStack.Screen name="Login" component={LoginScreen} />
  //         </AppStack.Navigator>
  //       </NavigationContainer>
  //     </>
  //   );
  // } else {
  //   return <LoginScreen />;
  // }
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator headerModel="none">
          <AppStack.Screen name="onboarding" component={OnboardingScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}
