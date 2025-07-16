import { createContext, useState } from "react";

const MyContext = createContext();

// this component will wrap the whole application (those components that need access to the context)
// this is a centralized store and will have data that will be shared across components
// it can also have functions that can be used to update the data in the context
const MyProvider = (props) => {

    const [active, setActive] = useState(true);
     const [users, setUsers] = useState([
        {id: 1, name: "Mayukh", age: 21},
        {id: 2, name: "John", age: 22},
        {id: 3, name: "Doe", age: 23},
    ]);

    return(
        <MyContext.Provider value={{
            users: users,
            activeState: active,
            setActive: () => setActive(!active),

        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export { MyContext, MyProvider };