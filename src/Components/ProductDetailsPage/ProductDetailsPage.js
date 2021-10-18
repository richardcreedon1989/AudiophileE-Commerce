import "./ProductDetailsPage.css"
import Header from "../Header/Header"
import ProductDetailsInfo from "../ProductDetailsInfo/ProductDetailsInfo"
import IndividualItemList from "../ShopItemList/IndividualItem/IndividualItem"
import ModelImage from "../ModelImage/ModelImage"
import Footer from "../Footer/Footer"
import "../../App.css"
import CartIconSummary from "../../Components/CartIconSummary/CartIconSummary"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const ProductDetailsPage = ({data}) => {

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
        <> 
          <Header displayCartSummary={displayCartSummary} displayMenu={displayMenu} color="black"/>
          <div className="menu-display" style={{display: isMenuDisplayed ? "" : "none"}}> 
              <IndividualItemList />
          </div>
          <div className="cart-display" style={{display: isCartSummaryDisplayed ? "" : "none"}}> 
                <CartIconSummary data={data}/>
          </div>
          {/* <div className={isMenuDisplayed ? "Menu-Displayed-Background" : ""}>  */}
          <div className={isMenuDisplayed ? "Menu-Displayed-Background" : ""}>
              <hr className="hrDesktop"/>
              <div className="desktop-width"> 
                  <div className="container-padding container-padding-product-details display-block"> 
                      <ProductDetailsInfo params={params.id} data={data}/>      
                      <div className="individual-item-container">
                          <IndividualItemList />
                      </div>
                      <ModelImage />
                  </div>
              </div>
          <div className={isMenuDisplayed ? "Menu-Displayed-Background" : ""}>

              <Footer />
              </div>

          </div>
        </>
  )
}

export default ProductDetailsPage