import '../../App.css';
import React, {useState, useEffect} from "react"
import Header from "../Header/Header"
import NewProductDisplay from "../NewProductDisplay/NewProductDisplay"
import IndividualItemList from "../ShopItemList/IndividualItem/IndividualItem"
import ProductTilesContainer from "../ProductTiles/ProductTilesContainer/ProductTilesContainer"
import ModelImage from "../ModelImage/ModelImage"
import Footer from "../Footer/Footer"
import CartIconSummary from "../../Components/CartIconSummary/CartIconSummary"
import {useCart} from "../Contexts/CartContext"

const HomePage = ({data}) => {

  let currentWindowWidth = window.innerWidth

  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)
  const [isCartSummaryDisplayed, setIsCartSummaryDisplayed] = useState(false)
  const [windowSize, setWindowSize] = useState(currentWindowWidth)
  const cart = useCart()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return windowSize > 1000 ? setIsMenuDisplayed(false) : ""
  },[windowSize])

  // useEffect (() => {
  //     return cart.length === 0 ? setIsCartSummaryDisplayed(false) : ""
  // }, [cart])

  const displayMenu = () => {
    windowSize < 1000 && setIsMenuDisplayed(!isMenuDisplayed) 
  }

  const displayCartSummary = () => {    
    setIsCartSummaryDisplayed(!isCartSummaryDisplayed)
  }


  return (
      <div>
        <div className="imageWrapper">
          <div className="imageContainer">
            <Header displayCartSummary={displayCartSummary} displayMenu={displayMenu} color="transparent" />
            <div className="menu-display" style={{display: isMenuDisplayed ? "" : "none"}}> 
                <IndividualItemList />
            </div>
            <div className="cart-display" style={{display: isCartSummaryDisplayed ? "" : "none"}}> 
                <CartIconSummary data={data}/>
            </div>
            <div className={isMenuDisplayed  ? "Menu-Displayed-Background" : ""}> 
                <hr className="hrDesktop" />
                <NewProductDisplay />
            </div>
          </div>
        </div>
        <div  className={isMenuDisplayed ? "Menu-Displayed-Background" : ""}> 
            <div className="container-padding"> 
                <IndividualItemList />
                <ProductTilesContainer />
                <ModelImage />
            </div>
            <Footer/>
        </div>
    </div>
  )
}



export default HomePage

