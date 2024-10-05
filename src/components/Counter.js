import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.FN_COUNTER); // gets the value from store(as a callback)
  const objOfFn = {
    incrementFn: () => {
      dispatch({ type: "increment", TYPE:'FN_COUNTER' });
    },
    decrementFn: () => {
      dispatch({ type: "decrement", TYPE:'FN_COUNTER' });
    },
    toggleCounterHandler: () => {
      dispatch({ type: "toggle", TYPE:'FN_COUNTER' });
    },
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Functional-Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <button onClick={objOfFn.incrementFn}>Increment</button>
      <button onClick={objOfFn.decrementFn}>Decrement</button>
      <button onClick={objOfFn.toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
