import "./Header.css"
import iconBurger from "../../assets/icon-hamburger.svg"
import iconCart from "../../assets/icon-cart.svg"
import iconLogo from "../../assets/logo.svg"


const Header = () => {
    return (
        <nav className="header"> 
            <img className="iconBurger" src={iconBurger} alt="menu"/>
            <img className="iconCart" src={iconCart} alt="cart"/>
            <img className="iconLogo" src={iconLogo} alt="logo"/>
        </nav> 
    )
} 

export default Header