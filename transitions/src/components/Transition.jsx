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
      timeout={2000}
      nodeRef={nodeRef}
      >
        {(state)=> 
          <div
          style={{
            background: 'red',
            height: '100px',
            transition: 'all 2s ease',
            opacity: state === 'exiting' || state === 'exited' ? 0 : 1,
          }}>
            {state}
          </div>
        
        }
      </Transition>

      <button className="btn btn-primary" onClick={toggleShow}>Show</button>
    </>
  )
};

export default TransitionComp;