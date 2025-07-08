
const getTheYear = () => {
    const newDate = new Date(); 
    return newDate.getFullYear()
}

// Can use inline return statement or call a function in line 10.

const Header = () => (
    <div>
        The date is {getTheYear()}.
    </div>
)

export default Header;