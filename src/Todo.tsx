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

const TodoItem = ({todo}: {todo: Todo}) => {
  const {markAsComplete, markAsIncomplete, deleteTodo} =
    useContext(todoContext);

  let onPressAction = () => markAsComplete(todo.id);
  let taskStyle = {...styles.item};
  if (todo.isCompleted) {
    taskStyle = {...taskStyle, ...styles.doneTask};
    onPressAction = () => markAsIncomplete(todo.id);
  }

  return (
    <Pressable style={taskStyle} onPress={onPressAction}>
      <Text style={styles.todoText}>{todo.task}</Text>
      <Text style={styles.todoStatus}>{todo.isCompleted ? '✔️' : '⏳'}</Text>
      <Button title="╳" onPress={() => deleteTodo(todo.id)} />
    </Pressable>
  );
};

export default TodoItem;
