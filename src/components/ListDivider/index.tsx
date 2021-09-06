import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  subtitle: string;
}

export function ListDivider({ isCentered }: any) {
  return (
    <View 
    style={[
      styles.container,
      isCentered ? {
        marginVertical: 12,
      } : {
        marginTop: 2,
        marginBottom: 31
      }
    ]} 
    />
  );
} 