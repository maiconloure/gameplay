import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from "react-native";
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import { SignIn } from './src/screens/SignIn';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';

export default function App() {
  const [ loaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!loaded) {
    return <AppLoading />
  };

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Background>
  );
}