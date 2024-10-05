import { createStore } from "redux";
// store
// dispatch and subcscribe
// reducer
const defaultReduxState = {
  counter: {
    FN_COUNTER: 0,
    CL_COUNTER: 0,
  },
}; 
const objOfFn = {
  incrementCounter: (state, type) => {
    return {
      ...state,
      counter: {
        ...state.counter,
        [type]: state.counter[type] + 1,
      },
    };
  },
  decrementCounter: (state, type) => {
    return {
      ...state,
      counter: {
        ...state.counter,
        [type]: state.counter[type] - 1,
      },
    };
  },
  toggleCounter: (state) => {
    alert("Counter was toggled");
    return state;
  },
};

export const counterReduce = (state = defaultReduxState, actions) => {
  const {incrementCounter,decrementCounter,toggleCounter} = objOfFn
  switch (actions.type) {
    case "increment":
      return incrementCounter(state, actions.TYPE );
    case "decrement":
      return decrementCounter(state, actions.TYPE);
    case "toggle":
      return toggleCounter(state);
    default:
      return state;
  }
};
const storchik = createStore(counterReduce);
export default storchik;
