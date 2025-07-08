import {useState} from 'react';

const StatePlayground = () => {

  let [count, setCount] = useState(0);
  console.log(count);

  return (
    < >
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default StatePlayground;