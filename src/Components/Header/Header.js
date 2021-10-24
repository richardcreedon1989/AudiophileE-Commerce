import "./Header.css"
import iconBurger from "../../assets/icon-hamburger.svg"
import iconCart from "../../assets/icon-cart.svg"
import iconLogo from "../../assets/logo.svg"
import {Link} from "react-router-dom"



const Header = (props) => {
    const headerBackground = () => {
        return props.color === "black" ? "background-black" : "'.l,background-transparent"
    }

    const displayMenu = () => {
        props.displayMenu()
    }

    const displayCartSummary = () => {
        props.displayCartSummary()
    }
    return (
        <nav className={`${headerBackground()} header`}> 
            <ul className="desktop-header">
                <Link to="/" className="desktop-menu-items"> HOME </Link>
                <Link to="/Category/:Headphones" className="desktop-menu-items"> HEADPHONES</Link>
                <Link to="/Category/:Speakers" className="desktop-menu-items"> SPEAKERS </Link>
                <Link to="/Category/:Earphones" className="desktop-menu-items"> EARPHONES</Link>
            </ul>
            <div className="iconBurger" onClick={() => displayMenu()}>
                <img  src={iconBurger} alt="menu"/>
            </div>
            <div onClick={() => displayCartSummary()} className="iconCart"> 
                <img  src={iconCart} alt="cart"/>
            </div>
            <Link className="iconLogo" to="/"> 
                <img  src={iconLogo} alt="logo"/>
            </Link> 
        </nav>  
    )
} 

export default Header