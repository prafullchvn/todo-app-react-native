// import React, {createContext, ReactNode} from 'react';
import {useState} from 'react';
import {Todo} from './types';

type Todos = {
  tasks: Todo[];
  newTodoId: number;
};

// Change this to some model
const todos: Todos = {
  tasks: [
    {id: 1, task: 'Buy milk', isCompleted: false},
    {id: 2, task: 'Buy groceries', isCompleted: false},
  ],
  newTodoId: 3,
};

type TodoActions = {
  tasks: Todo[];
  addTask: (task: string) => void;
  markAsComplete: (taskId: number) => void;
  markAsIncomplete: (taskId: number) => void;
  deleteTodo: (taskId: number) => void;
};

const useTodos = (): TodoActions => {
  const [tasks, setTodos] = useState(todos.tasks);
  const [newId, setNewId] = useState(3);

  const addTask = (task: string): void => {
    const newTodo: Todo = {id: newId, task, isCompleted: false};
    tasks.push(newTodo);

    setTodos(tasks.slice());
    setNewId(newId + 1);
  };

  const markAsComplete = (taskId: number) => {
    const task = tasks.filter(({id}) => taskId === id)[0];
    task.isCompleted = true;
    setTodos(tasks.slice());
  };

  const markAsIncomplete = (taskId: number) => {
    const task = tasks.filter(({id}) => taskId === id)[0];
    task.isCompleted = false;
    setTodos(tasks.slice());
  };

  const deleteTodo = (taskId: number) => {
    const todoIndex = tasks.findIndex(({id}) => taskId === id);
    tasks.splice(todoIndex, 1);
    setTodos(tasks.slice());
  };

  return {tasks, addTask, markAsComplete, markAsIncomplete, deleteTodo};
};

export {useTodos, type TodoActions};
