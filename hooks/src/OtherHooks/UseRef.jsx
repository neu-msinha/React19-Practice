import { useRef } from "react";

const UseRefComponent = () => {   

    const textInput = useRef();

    const triggerHandler = () => {  
        console.log(textInput.current.value);
    }

    return (
    <>
    <h1>Form:</h1>
    <InputComponent ref={textInput} />
    <button onClick={triggerHandler}>
        Trigger
    </button>
    </>
    )
 };

 const InputComponent = (props) => {
    return <input type="text" ref={props.ref} />
 }
 export default UseRefComponent;