export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "FILTERTODO";

// action creater for add todo
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

// action creator for deleteTodo
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

// action creator for toggle todo
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

// action creator for fitler todo
export const filterTodo = (text) => {
  return { type: SET_FILTER, payload: text };
};
