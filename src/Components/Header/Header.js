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
                <Link to="/audiophile-ecommerce/" className="desktop-menu-items"> HOME </Link>
                <Link to="/audiophile-ecommerce/Category/:Headphones" className="desktop-menu-items"> HEADPHONES</Link>
                <Link to="/audiophile-ecommerce/Category/:Speakers" className="desktop-menu-items"> SPEAKERS </Link>
                <Link to="/audiophile-ecommerce/Category/:Earphones" className="desktop-menu-items"> EARPHONES</Link>
            </ul>
            <div className="iconBurger" onClick={() => displayMenu()}>
                <img  src={iconBurger} alt="menu"/>
            </div>
            <div onClick={() => displayCartSummary()} className="iconCart"> 
                <img  src={iconCart} alt="cart"/>
            </div>
            <img className="iconLogo" src={iconLogo} alt="logo"/>
        </nav>  
    )
} 

export default Header