import { useState } from "react";
// import {Transition} from "react-transition-group";

const TransitionComp = () => {
  let [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      {show && 
      <div style={{
        background: 'red',
        height: '100px',
      }}>
        </div>
      }

      <button className="btn btn-primary" onClick={toggleShow}>Show</button>
    </>
  )
};

export default TransitionComp;