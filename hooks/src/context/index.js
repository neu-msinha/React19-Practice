import { createContext } from "react";

const MyContext = createContext();

// this component will wrap the whole application (those components that need access to the context)
// this is a centralized store and will have data that will be shared across components
// it can also have functions that can be used to update the data in the context
const MyProvider = (props) => {

    return(
        <MyContext.Provider>
            {props.children}
        </MyContext.Provider>
    )
}

export { MyContext, MyProvider };