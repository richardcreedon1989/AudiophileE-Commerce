import '../../App.css';
import React, {useState, useEffect} from "react"
import Header from "../Header/Header"
import NewProductDisplay from "../NewProductDisplay/NewProductDisplay"
import IndividualItemList from "../ShopItemList/IndividualItem/IndividualItem"
import ProductTilesContainer from "../ProductTiles/ProductTilesContainer/ProductTilesContainer"
import ModelImage from "../ModelImage/ModelImage"
import Footer from "../Footer/Footer"

const HomePage = () => {

  let currentWindowWidth = window.innerWidth

  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)
  const [windowSize, setWindowSize] = useState(currentWindowWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return windowSize > 1000 ? setIsMenuDisplayed(false) : ""
  },[windowSize])

  const displayMenu = () => {
    console.log("here", windowSize)
    windowSize < 1000 && setIsMenuDisplayed(!isMenuDisplayed) 
  }

  return (
      <div>
        <div className="imageWrapper">
          <div className="imageContainer">
            <Header displayMenu={displayMenu} color="transparent" />
            <div className="menu-display" style={{display: isMenuDisplayed ? "" : "none"}}> 
                <IndividualItemList />
            </div>
            <div className={isMenuDisplayed ? "Menu-Displayed-Background" : ""}> 
                <hr className="hrDesktop" />
                <NewProductDisplay />
            </div>
          </div>
        </div>
        <div className={isMenuDisplayed ? "container-padding Menu-Displayed-Background" : "container-padding"}> 
            <IndividualItemList />
            <ProductTilesContainer />
            <ModelImage />
        </div>
        <div className={isMenuDisplayed ? "Menu-Displayed-Background-Footer" : ""}> 
            <Footer/>
        </div>
    </div>
  )
}

export default HomePage

