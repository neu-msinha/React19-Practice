import { useEffect } from "react";
import { useState } from "react";
import Blocks from "./blocks";

const UseEffectComponent = () => {

  const [count, setCount] = useState(0);
  let [block, setBlock] = useState(false);

  useEffect(() => {

      if(count === 3) {
        alert("Count reached 3, resetting to 0");
        setCount(0);
      }
    // console.log("Component mounted or count changed");
    // return () => {
    //   console.log("Cleanup on unmount or before count change");
    // };
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <hr/>
      {block ? 
      <Blocks />
      :null
      }
      <button onClick={() => setBlock(prev => !prev)}>
        {block ? "Remove Block" : "Add Block"}
      </button>
    </div>
  );
}

export default UseEffectComponent;