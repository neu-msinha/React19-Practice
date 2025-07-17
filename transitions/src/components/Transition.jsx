import { useState, useRef } from "react";
import { Transition } from 'react-transition-group';


const TransitionComp = () => {
  const nodeRef = useRef(null);
  let [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Transition
      in={show}
      timeout={1000}
      nodeRef={nodeRef}
      onEnter={(node) => console.log(`Entering: ${node}`)}
      >
        {(state)=> 
          <div ref={nodeRef} className={`square square-${state}`}>
            {state}
          </div>
        
        }
      </Transition>

      <button className="btn btn-primary" onClick={toggleShow}>Show</button>
    </>
  )
};

export default TransitionComp;