import React from "react";
import { View, Text, Image } from "react-native";
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { styles } from './styles';

import illustrationImg from '../../assets/illustration.png';
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home' as any);
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={illustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatina
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
            title="Entrar com Discord" 
            activeOpacity={0.7}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}
