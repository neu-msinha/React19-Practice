import { createContext, useState } from "react";

const MyContext = createContext();


const MyProvider = (props) => {

    const [stage, setStage] = useState(1);
    const [players, setPlayers] = useState([]);
    const [result, setResult]  = useState('');

    const addPlayerHandler = (name) => {
        setPlayers((prevPlayers) => {
            return [...prevPlayers, name];
        });
    }

    const removePlayerHandler = (name) => {
        setPlayers((prevPlayers) => {      
            return prevPlayers.filter(player => player !== name);
        });
    }

    return(
        <>
            <MyContext.Provider value={{
                //STATE
                stage,
                players,
                result,

                //METHODS
                addPlayer: addPlayerHandler,
                removePlayer: removePlayerHandler,
            }}>
                {props.children}
            </MyContext.Provider>
        </>
    )
}

export { MyContext, MyProvider };

