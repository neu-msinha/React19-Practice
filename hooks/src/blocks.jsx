import { useEffect } from "react";

const Blocks = () => {

  useEffect(() => {
    console.log("Component mounted");


    // this callback function (after return) will be called when the component is unmounted that means 
    // when the component is removed from the DOM
    // when I click removeblock button in App.jsx
    // it will remove the block component from the DOM
    // and this cleanup function will be called
    return () => {
      console.log("Block removed");
    };
  }, []);

  return (
      <div
      style={{
        backgroundColor: "red",
        color: "white",
        margin: "10px"
      }}
      >I am a block</div>
  );
}

export default Blocks;