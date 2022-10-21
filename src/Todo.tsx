import React, {useContext} from 'react';
import {Pressable, Text, StyleSheet, Button} from 'react-native';
import {todoContext} from '../App';
import {Todo} from './types';

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#f4f1f1',
    marginTop: 2,
  },
  todoText: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  todoStatus: {
    flex: 1,
    textAlign: 'right',
    paddingRight: 10,
  },
  doneTask: {
    backgroundColor: '#BDB7AB',
  },
});

const TodoItem = ({item}: {item: Todo}) => {
  const {markAsComplete, markAsIncomplete, deleteTodo} =
    useContext(todoContext);
  let onPressAction = () => markAsComplete(item.id);
  let taskStyle = {...styles.item};
  if (item.isCompleted) {
    taskStyle = {...taskStyle, ...styles.doneTask};
    onPressAction = () => markAsIncomplete(item.id);
  }
  return (
    <Pressable style={taskStyle} onPress={onPressAction}>
      <Text style={styles.todoText}>{item.task}</Text>
      <Text style={styles.todoStatus}>{item.isCompleted ? '✔️' : '⏳'}</Text>
      <Button title="╳" onPress={() => deleteTodo(item.id)} />
    </Pressable>
  );
};

export default TodoItem;
