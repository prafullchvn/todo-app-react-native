import React, {createContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {TodoActions, useTodos} from './src/TodoStore';
import Banner from './src/Banner';
import TodoInput from './src/TodoInput';
import Todos from './src/Todos';

const todoContext = createContext<TodoActions>(undefined!);

const App = () => {
  return (
    <todoContext.Provider value={useTodos()}>
      <View style={[styles.container]}>
        <Banner />
        <TodoInput />
        <Todos />
      </View>
    </todoContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default App;
export {todoContext};
