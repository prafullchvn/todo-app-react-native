import React, {useContext} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {todoContext} from '../App';
import TodoItem from './Todo';
import {Todo} from './types';

const Todos = () => {
  const {tasks} = useContext(todoContext);
  const uncompleted = tasks.filter(({isCompleted}) => !isCompleted);
  const completed = tasks.filter(({isCompleted}) => isCompleted);

  const renderItem = ({item}: {item: Todo}) => <TodoItem item={item} />;

  return (
    <View style={styles.todos}>
      <FlatList data={[...uncompleted, ...completed]} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  todos: {
    flex: 1,
    marginTop: 2,
  },
});

export default Todos;
