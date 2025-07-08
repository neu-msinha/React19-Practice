import {useState} from 'react';

//Complex State

const StatePlayground = () => {
    let initialCount = 0;
  let [state, setState] = useState({
    count: initialCount,
    user: "Mayukh",
  });

  return (
    < >
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={() => setState(prevState => {
        return {
          ...prevState,
          count: prevState.count + 1
        };
      })}>Increment</button>
      <button onClick={() => setState(prevState => {
        return {
          ...prevState,
          count: prevState.count > 0 ? prevState.count - 1 : 0
        };
        })}>Decrement</button>
      <button onClick={() => setState(prevState => {
        return {
          ...prevState,
          count: 0
        };
        })}>Reset</button>
    </>
  );
}

export default StatePlayground;