// import React, {createContext, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {Todo} from './types';

// type Todos = {
//   tasks: Todo[];
//   newTodoId: number;
// };

// Change this to some model
// const todos: Todos = {
//   tasks: [
//     {id: 1, task: 'Buy milk', isCompleted: false},
//     {id: 2, task: 'Buy groceries', isCompleted: false},
//   ],
//   newTodoId: 3,
// };

type TodoActions = {
  tasks: Todo[];
  addTask: (task: string) => void;
  markAsComplete: (taskId: number) => void;
  markAsIncomplete: (taskId: number) => void;
  deleteTodo: (taskId: number) => void;
};

const todoListKey: string = 'tasks';
const newIdKey: string = 'newId';

const useTodos = (): TodoActions => {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [newId, setNewId] = useState(0);

  const saveTodos = () => {
    AsyncStorage.setItem(todoListKey, JSON.stringify(tasks));
    AsyncStorage.setItem(newIdKey, JSON.stringify(newId));
  };

  const updateState = () => {
    setTasks(tasks.slice());
    setNewId(newId + 1);
    saveTodos();
  };

  const addTask = (task: string): void => {
    const newTodo: Todo = {id: newId, task, isCompleted: false};
    tasks.push(newTodo);
    updateState();
  };

  const markAsComplete = (taskId: number) => {
    const task = tasks.filter(({id}) => taskId === id)[0];
    task.isCompleted = true;
    updateState();
  };

  const markAsIncomplete = (taskId: number) => {
    const task = tasks.filter(({id}) => taskId === id)[0];
    task.isCompleted = false;
    updateState();
  };

  const deleteTodo = (taskId: number) => {
    const todoIndex = tasks.findIndex(({id}) => taskId === id);
    tasks.splice(todoIndex, 1);
    updateState();
  };

  useEffect(() => {
    Promise.all([
      AsyncStorage.getItem(todoListKey),
      AsyncStorage.getItem(newIdKey),
    ])
      .then(([data, id]) => {
        const nextTodoId = +id! || 0;
        setNewId(nextTodoId);
        return JSON.parse(data!);
      })
      .then(allTasks => {
        const fetchedTasks = allTasks || [];
        setTasks(fetchedTasks);
      });
  }, []);

  return {tasks, addTask, markAsComplete, markAsIncomplete, deleteTodo};
};

export {useTodos, type TodoActions};
