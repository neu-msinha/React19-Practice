import {useState, useContext, useRef} from 'react';
import {Button, Form, Alert} from 'react-bootstrap';

import { MyContext } from '../context/index.jsx';

const Stage1 = () => {

    const textInput = useRef();
    const context = useContext(MyContext); 
    const [error, setError] = useState([false, '']);

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;

        const validate = validateInput(value);
        
        //Validation
        if(validate){
            setError([false, '']);
            context.addPlayer(value);
            textInput.current.value = '';
        }  
    }

    const validateInput = (value) => {
        if(value.trim() === '') {
            setError([true, 'Please enter a valid name.']);
            return false;
        }
        if(context.players.includes(value)) {
            setError([true, 'Player already exists.']);
            return false;
        }
        return true;
    }

    return(
        <>
            <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Enter player name'
                        ref={textInput}
                        name='player'
                    />

                    {error[0] ? <Alert>{error[1]}</Alert>  : null}

                    <Button className='miami' variant='primary' type='submit'>
                        Add Player
                    </Button>

                    {context.players.length > 0 ?
                        <>
                        <hr/>
                        <div>
                            <ul className='list-group'> 
                                {context.players.map((player, index) => (
                                    <li key={index} className='list-group-item
                                    d-flex justify-content-between align-items-center list-group-item-action'>
                                        {player}
                                        <span className='badge badge-danger'
                                            onClick={() => context.removePlayer(player)}>
                                            X
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='action_button'>
                            NEXT
                        </div>
                        </>
                        :
                        null
                    }
                </Form.Group>
            </Form>
        </>
    )
}

export default Stage1;