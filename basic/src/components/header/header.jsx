import Navigation from './nav.jsx';
import { useState } from 'react';

const Header = (props) => {

    const[active, setActive] = useState('active');
    
    const [keywords, setKeywords] = useState('');

    // synthetic events in react (onChange, onClick, etc.)

   const handleChange = (event) => {
        const value = event.target.value === '' ? 'active' : 'not-active';
        setActive(value);
        setKeywords(event.target.value);
   }

   return (
    <header>
        <div className="logo">
        Awesome News
        </div>
        <input onChange={props.getKeywords}/>
        The keywords are: {keywords}
        <Navigation />
    </header>
   )
}

export default Header;