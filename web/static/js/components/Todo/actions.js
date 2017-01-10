/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

function addTodoRequest(text) {
  return { type: ADD_TODO_REQUEST, text };
}

function addTodoSuccess(text) {
  return { type: ADD_TODO_SUCCESS, text };
}

function addTodoFailure(text, error) {
  return { type: ADD_TODO_FAILURE, text, error };
}

export function addTodo(text) {
  return dispatch => {
    dispatch(addTodoRequest(text));
    dispatch(addTodoSuccess(text));

    // .. or on failure
    // dispatch(addTodoFailure(text, error));
  };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
