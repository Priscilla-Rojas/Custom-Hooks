import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') ) || [];
}

export const useTodo = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, initialState, init );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [todos])

  const todosCount = () => {
    return todos.length
  }

  const pendingTodosCount = () => {
    return todos.filter( todo => !todo.done).length
  }

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    }
    dispatch( action );
  }

  const handleDeleteTodo = ( id ) => {
    // console.log( id )
    dispatch({
      type: '[TODO] Delete Todo',
      payload: id,
    })
  }

  const handleToggleTodo = ( id ) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    })
  }
  
  return {
    todos, 
    todosCount, 
    pendingTodosCount,
    handleNewTodo, 
    handleDeleteTodo, 
    handleToggleTodo,
  }
}
