const Header = () => {

    // synthetic events in react (onChange, onClick, etc.)

   const handleChange = (event) => {
    console.log(event.target.value);
   }

   return (
    <header>
        <div className="logo"
            onClick={()=>console.log('I was clicked!')}
            onPointerEnter={()=>console.log('Pointer entered!')}
            >
        LOGO
        </div>

        <input onChange={handleChange}
               onFocus={e => console.log('onFocus')}
               onBlur={e => console.log('onBlur')}
        ></input>
    </header>
   )
}

export default Header;