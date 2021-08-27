import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'row1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'row2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'row3',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ww',
    title: 'row4',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fzz',
    title: 'row5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dyy',
    title: 'row6',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ListDemo = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListDemo;