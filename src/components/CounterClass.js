import { Component } from "react";
import classes from "./Counter.module.css";
import { connect } from "react-redux";
import { counterReduce } from "../store/хранилище";
class Counter extends Component {
  render() {
    const counterValue = this.props.counter.CL_COUNTER;
    return (
      <main className={classes.counter}>
        <h1>Redux Class-Counter</h1>
        <div className={classes.value}>-- {counterValue} --</div>
        <button onClick={this.props.incrementFn}>Increment</button>
        <button onClick={this.props.decrementFn}>Decrement</button>
        <button onClick={this.props.toggleCounterHandler}>
          Toggle Counter
        </button>
      </main>
    );
  }
}
// const mapStateToProps /**Reduce function*/ = (state = defaultReduxState, actions) => {
//   const {incrementCounter, decrementCounter, toggleCounter} = objOfFn
//   switch (actions.type) {
//     case "increment":
//       return incrementCounter(state, 'CL_COUNTER');
//     case "decrement":
//       return decrementCounter(state, 'CL_COUNTER');
//     case "toggle":
//       return toggleCounter(state);
//     default:
//       return state;
//   }
// };
const mapDispatchToProps = (dispatch) => {
  return {
    incrementFn: () => {
      dispatch({ type: "increment", TYPE:'CL_COUNTER' });
    },
    decrementFn: () => {
      dispatch({ type: "decrement", TYPE:'CL_COUNTER' });
    },
    toggleCounterHandler: () => {
      dispatch({ type: "toggle", TYPE:'CL_COUNTER' });
    },
  };
};
export default connect(counterReduce /**We can replace this function just with CounterReduce */, mapDispatchToProps)(Counter);
