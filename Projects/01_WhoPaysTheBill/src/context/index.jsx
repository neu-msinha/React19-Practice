import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

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

    const nextHandler = () => {
       if(players.length < 2) {
            toast.error('Please add at least 2 players to proceed.', {
                position: "top-left",
                autoClose: 2000,
                // hideProgressBar: true,
                // closeOnClick: true,
                // pauseOnHover: true,
                // draggable: true,
                // progress: undefined,
            });
       } else {
            //NEXT STAGE
            setStage(2);
            generateLoser();
        }       
    }

    const generateLoser = () => {
       let result = players[Math.floor(Math.random() * players.length)];
       setResult(result);
    }

    const resetGame = () => {
        setStage(1);
        setPlayers([]);
        setResult('');
        toast.success('Game reset successfully!', {
            position: "top-left",
            autoClose: 2000    
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
                next: nextHandler,
                generateLoser: generateLoser,
                resetGame:resetGame
            }}>
                {props.children}
            </MyContext.Provider>
            <ToastContainer/>
        </>
    )
}

export { MyContext, MyProvider };

