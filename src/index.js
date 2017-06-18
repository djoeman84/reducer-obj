const identity = state => state;

export default function makeReducer(reducerObj) {
  return (state, action) => {
    // get function to handle action if defined, otherwise just replay state
    const handler = reducerObj[action.type] || identity;
    // get state if it exists, otherwise grab default state
    const exitingState = state || reducerObj.defaultState;
    // run reducer function
    return handler(exitingState, action);
  }
}
