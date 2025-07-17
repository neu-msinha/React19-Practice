import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";


// classes that it will add EXITING example: (same for entering)

// cssSq-exit cssSq-exit-active
// cssSq-exit-done

const CssTr = () => {

  let [show, setShow] = useState(false);
  const nodeRef = useRef(null);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={500}
      classNames="cssSq"
    >
      <div ref={nodeRef} className="cssSq">
        Hello
      </div>
    </CSSTransition>
      <button className="btn btn-primary" onClick={toggleShow}>Show</button>
    </>
    )
};

export default CssTr;