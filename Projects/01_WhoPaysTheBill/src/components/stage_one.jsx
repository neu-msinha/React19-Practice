import {useState, useContext, useRef} from 'react';
import {Button, Form, Alert} from 'react-bootstrap';

import { MyContext } from '../context/index.jsx';

const Stage1 = () => {

    const textInput = useRef();
    const context = useContext(MyContext); 

    const handleSubmit = (e) => {

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
                </Form.Group>
            </Form>
        </>
    )
}

export default Stage1;