import {useState} from 'react';

//Complex State

const StatePlayground = () => {
    let initialCount = 0;
  let [state, setState] = useState({
    count: initialCount
  });

  return (
    < >
      <h3>Count: {state.count}</h3>
      <button onClick={() => setState({count:state.count + 1})}>Increment</button>
      <button onClick={() => setState(prevState => ({count: prevState.count > 0 ? prevState.count - 1 : 0}))}>Decrement</button>
      <button onClick={() => setState({count: 0})}>Reset</button>
    </>
  );
}

export default StatePlayground;