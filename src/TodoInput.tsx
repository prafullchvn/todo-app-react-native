import React, {useContext, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {todoContext} from '../App';

export type TodoInputProps = {
  addTask: (task: string) => void;
};

// const TodoInput = ({ addTask }: TodoInputProps) => {
const TodoInput = () => {
  const {addTask} = useContext(todoContext);
  const [value, setValue] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        maxLength={50}
        placeholder={'Add Todo'}
        onSubmitEditing={({nativeEvent: {text}}) => {
          addTask(text);
          setValue('');
        }}
        autoFocus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: '4% 2%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '70%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 16,
    padding: 2,
    textAlign: 'center',
  },
});

export default TodoInput;
