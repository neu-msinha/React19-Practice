import {useState, useContext, useRef} from 'react';
import {Button, Form, Alert} from 'react-bootstrap';

import { MyContext } from '../context/index.jsx';

const Stage1 = () => {

    const textInput = useRef();
    const context = useContext(MyContext); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;

        //Validation
        context.addPlayer(value);
        textInput.current.value = '';

        console.log(value);
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

                    {/* ERRORS */}

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
                                    </li>
                                ))}
                            </ul>
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