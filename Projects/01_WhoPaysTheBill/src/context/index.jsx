import { createContext, useState } from "react";

const MyContext = createContext();


const MyProvider = ({props}) => {

    const [stage, setStage] = useState(1);
    const [players, setPlayers] = useState([]);
    cosnt [result, setResult]  = useState('');

    return(
        <>
            <MyContext.Provider value={{
                //STATE
                stage,
                players,
                result,

                //METHODS
                setStage
            }}>
                {props.children}
            </MyContext.Provider>
        </>
    )
}

export { MyContext, MyProvider };

