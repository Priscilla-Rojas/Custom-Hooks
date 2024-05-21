
export const todoReducer = ( inicitialState = [], action ) =>{
  switch (action.type) {
    case '[TODO] Add Todo':
      return [ ...inicitialState, action.payload];

    case '[TODO] Delete Todo':
      return inicitialState.filter( todo => todo.id !== action.payload);

    case '[TODO] Toggle Todo':
      return inicitialState.map( todo => {
        if( todo.id === action.payload ){
          return{
            ...todo,
            done: !todo.done
          }
        }
        return  todo
      })
  
    default:
      return inicitialState;
  }
}