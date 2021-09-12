import './App.css';
import React, {useEffect} from "react"
import Header from "./Components/Header/Header"
import NewProductDisplay from "./Components/NewProductDisplay/NewProductDisplay"
// import ShopItemList from './Components/ShopItemList/ShopItemListContainer/ShopItemListContainer';
import IndividualItemList from "./Components/ShopItemList/IndividualItem/IndividualItem"
import ProductTilesContainer from "./Components/ProductTiles/ProductTilesContainer/ProductTilesContainer"
import Button from '@material-ui/core/Button';
import image from "./assets/image-header.jpg"
import Container from '@material-ui/core/Container'

const imageDisplay = () => {
  return window.innerWidth < 400 ? "mobileBackgroundImage" : "tabletBackgroundImage"
}



console.log("display", imageDisplay())

function App() {
  
  return (

    <>   
      <div className="imageContainer"> 
        <Header /> 
        <hr className="hrDesktop"  />    
        <NewProductDisplay /> 
        <div className="divtest">  <ProductTilesContainer /> 
        <IndividualItemList /></div>
        
      </div>
    </>
    
    /* <div className="product-row">
      <div className="new-product-container">
        <div className="test-six">
          <div className="product-box">
            <div className="product-image-box"><img className="productImage" src={productImage} alt="headphones" /></div>
            <div className="product-box-text">HEADPHONES</div></div>
        </div>
        <div className="test-seven">
          <div className="product-box">
            <div className="product-image-box"><img className="productImage" src={speaker} alt="speakers" /></div>
            <div className="product-box-text">SPEAKERS</div></div>
        </div>
        <div className="test-eight">
          <div className="product-box">
            <div className="product-image-box"><img className="productImage" src={earphones} alt="earphones" /></div>
            <div className="product-box-text">EARPHONES</div></div>
        </div>
      </div>
    </div> */
  // </div>
  );
}

export default App;
