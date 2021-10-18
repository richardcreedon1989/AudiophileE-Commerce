
import CategoryTitle from "../CategoryTitle/CategoryTitle"
import Header from "../Header/Header"
import IndividualItemList from "../ShopItemList/IndividualItem/IndividualItem"
import ModelImage from "../ModelImage/ModelImage"
import Footer from "../Footer/Footer"
import "../../App.css"
import CategoryProductList from "../CategoryProductList/CategoryProductList"
import CartIconSummary from "../../Components/CartIconSummary/CartIconSummary"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const CategoryPage = ({data}) => {

  let currentWindowWidth = window.innerWidth

  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)
  const [windowSize, setWindowSize] = useState(currentWindowWidth)
  const [isCartSummaryDisplayed, setIsCartSummaryDisplayed] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return windowSize > 1000 ? setIsMenuDisplayed(false) : ""
  },[windowSize])

  const displayMenu = () => {
    windowSize < 1000 && setIsMenuDisplayed(!isMenuDisplayed) 
  }

  const displayCartSummary = () => {    
    setIsCartSummaryDisplayed(!isCartSummaryDisplayed)
  }

  const params = useParams()
  return (
      <div> 
          <Header displayCartSummary={displayCartSummary} displayMenu={displayMenu} color="black"/>
          <div className="menu-display" style={{display: isMenuDisplayed ? "" : "none"}}> 
                <IndividualItemList />
          </div>
          <div className="cart-display" style={{display: isCartSummaryDisplayed ? "" : "none"}}> 
                <CartIconSummary data={data}/>
          </div>
          <div className={isMenuDisplayed ? "Menu-Displayed-Background" : ""}> 
              <hr className="hrDesktop" />
              <CategoryTitle category={params.Product}/>  
          </div>
          <div className={isMenuDisplayed ? "container-padding Menu-Displayed-Background" : "container-padding"}> 
            <CategoryProductList data={data} params={params.Product} category={params.Product} newProduct="NEW PRODUCT"/>
            <IndividualItemList />
            <ModelImage />
          </div>
          <div className={isMenuDisplayed ? "Menu-Displayed-Background-Footer" : ""}> 
              <Footer />
          </div>
      </div>
  )
}

export default CategoryPage