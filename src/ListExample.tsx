import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

type ListItem = {
  id: number;
  task: string;
};

const ListExample = () => {
  const todos = [
    {
      id: 1,
      task: 'buy milk',
    },
    {
      id: 2,
      task: 'buy cake',
    },
  ];

  const renderItem = ({item}: {item: ListItem}) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listText}>{item.task}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList data={todos} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    display: 'flex',
    height: '50%',
    width: '100%',
  },
  listItem: {
    padding: 10,
    textAlign: 'center',
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  listText: {
    fontSize: 18,
  },
});

export default ListExample;
