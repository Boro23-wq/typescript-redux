import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  SET_NEW_TODO,
  SET_TODOS,
} from './constants';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Store {
  todos: Todo[];
  newTodo: string;
}

export type ActionTypes =
  | { type: typeof ADD_TODO }
  | { type: typeof DELETE_TODO; payload: number }
  | {
      type: typeof UPDATE_TODO;
      payload: {
        id: number;
        text: string;
      };
    }
  | { type: typeof TOGGLE_TODO; payload: number }
  | { type: typeof SET_NEW_TODO; payload: string }
  | { type: typeof SET_TODOS; payload: Todo[] };
