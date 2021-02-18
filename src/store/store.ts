import { createStore } from 'redux';

import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  SET_NEW_TODO,
  SET_TODOS,
} from './constants';
import { ActionTypes, Store, Todo } from './types';

// ADD TODOS
const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    completed: false,
  },
];

// REMOVE TODOS
const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

// UPDATE TODOS
const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

// TOGGLE TODOS (COMPLETED?)
const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.completed : todo.completed,
  }));

// Reducer Implementation
const todoReducer = (
  state: Store = { todos: [], newTodo: '' },
  action: ActionTypes
) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case SET_NEW_TODO:
      return {
        ...state,
        newTodo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        newTodo: '',
        todos: addTodo(state.todos, state.newTodo),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: updateTodo(state.todos, action.payload.id, action.payload.text),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: toggleTodo(state.todos, action.payload),
      };

    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
