import Navigation from './nav.jsx';

const Header = () => {

    // synthetic events in react (onChange, onClick, etc.)

   const handleChange = (event) => {
    console.log(event.target.value);
   }

   return (
    <header>
        <div className="logo">
        Awesome News
        </div>
        <input onChange={handleChange}/>
        <Navigation />
    </header>
   )
}

export default Header;