import "./Header.css"
import iconBurger from "../../assets/icon-hamburger.svg"
import iconCart from "../../assets/icon-cart.svg"
import iconLogo from "../../assets/logo.svg"
import {Link} from "react-router-dom"



const Header = (props) => {
    const headerBackground = () => {
        return props.color === "black" ? "background-black" : "background-transparent"
    }
    return (
        <nav className={`${headerBackground()} header`}> 
            <ul className="desktop-header">
                <Link to="/audiophile-ecommerce/" className="desktop-menu-items"> HOME </Link>
                <Link to="/audiophile-ecommerce/Category/:Headphones" className="desktop-menu-items"> HEADPHONES</Link>
                <Link to="/audiophile-ecommerce/Category/:Speakers" className="desktop-menu-items"> SPEAKERS </Link>
                <Link to="/audiophile-ecommerce/Category/:Earphones" className="desktop-menu-items"> EARPHONES</Link>
            </ul>
            <img className="iconBurger" src={iconBurger} alt="menu"/>
            <img className="iconCart" src={iconCart} alt="cart"/>
            <img className="iconLogo" src={iconLogo} alt="logo"/>
        </nav> 
    )
} 

export default Header