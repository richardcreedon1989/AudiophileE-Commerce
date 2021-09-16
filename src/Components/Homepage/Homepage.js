import '../../App.css';
import React from "react"
import Header from "../Header/Header"
import NewProductDisplay from "../NewProductDisplay/NewProductDisplay"
import IndividualItemList from "../ShopItemList/IndividualItem/IndividualItem"
import ProductTilesContainer from "../ProductTiles/ProductTilesContainer/ProductTilesContainer"
import ModelImage from "../ModelImage/ModelImage"
import Footer from "../Footer/Footer"

const HomePage = () => {
  return (
      <>
        <div className="imageWrapper">
          <div className="imageContainer">
            <Header color="transparent" />
            <hr className="hrDesktop" />
            <NewProductDisplay />
          </div>
        </div>
        <div className="container-padding"> 
            <IndividualItemList />
            <ProductTilesContainer />
            <ModelImage />
        </div>
        <Footer />
    </>
  )
}

export default HomePage

