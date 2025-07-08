import Navigation from './nav.jsx';
import { useState } from 'react';

const Header = () => {

    const [keywords, setKeywords] = useState('');

    // synthetic events in react (onChange, onClick, etc.)

   const handleChange = (event) => {
         setKeywords(event.target.value);
   }

   return (
    <header>
        <div className="logo">
        Awesome News
        </div>
        <input onChange={handleChange}/>
        The keywords are: {keywords}
        <Navigation />
    </header>
   )
}

export default Header;