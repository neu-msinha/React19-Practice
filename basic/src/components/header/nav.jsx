import { navItems } from "../../utils/data";

const Nav = () => {
   
    return (
         <nav className="mainNav">
            <ul>
                {navItems.map(item => (
                    <li key={item.id} className="navItem">
                        <a href={item.link}>{item.name}</a></li>))}
            </ul>
        </nav>
    )
}

export default Nav;