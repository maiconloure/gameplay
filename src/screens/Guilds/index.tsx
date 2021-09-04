import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image',
      owner: true
    },
    {
      id: '2',
      name: 'Galerinha do Mal',
      icon: 'image',
      owner: true
    }
  ]
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider  />}
        ListHeaderComponent={() => <ListDivider  />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        style={styles.guilds}
      />
    </View>
  );
}
