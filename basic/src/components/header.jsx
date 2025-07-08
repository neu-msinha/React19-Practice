
let styles = {
    header: {
        background: '#03a9f4',

    },
    logo: {
        color: '#fff',
        fontFamily: 'Anton',
        textAlign: 'center'
    }
}

const Header = () => {
   return (
    <header style={styles.header}>
        <h1 style={styles.logo}>My React App</h1>
        <p style={{ color: '#fff', textAlign: 'center' }}>Welcome to my React application!</p>
    </header>
   )
}

export default Header;