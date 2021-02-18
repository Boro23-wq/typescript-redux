import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Todo, ActionTypes, Store } from './types';

// Action Creators
export const addTodo = (): ActionTypes => ({ type: 'ADD_TODO' });

export const deleteTodo = (id: number): ActionTypes => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const updateTodo = (id: number, text: string): ActionTypes => ({
  type: 'UPDATE_TODO',
  payload: { id, text },
});

export const toggleTodo = (id: number): ActionTypes => ({
  type: 'TOGGLE_TODO',
  payload: id,
});

export const setNewTodo = (text: string): ActionTypes => ({
  type: 'SET_NEW_TODO',
  payload: text,
});

export const setTodos = (todos: Todo[]): ActionTypes => ({
  type: 'SET_TODOS',
  payload: todos,
});

export const getTodos = (
  url: string
): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const res = await fetch(url);
  const todos: Todo[] = await res.json();
  dispatch(setTodos(todos));
};
