import './App.css';
import React from "react"
import Header from "./Components/Header/Header"
import NewProductDisplay from "./Components/NewProductDisplay/NewProductDisplay"
import IndividualItemList from "./Components/ShopItemList/IndividualItem/IndividualItem"
import ProductTilesContainer from "./Components/ProductTiles/ProductTilesContainer/ProductTilesContainer"
import ModelImage from "./Components/ModelImage/ModelImage"

// const imageDisplay = () => {
//   return window.innerWidth < 400 ? "mobileBackgroundImage" : "tabletBackgroundImage"
// }

function App() {

  return (
    <>
      <div className="imageWrapper">
        <div className="imageContainer">
          <Header />
          <hr className="hrDesktop" />
          <NewProductDisplay />
        </div>
      </div>
      <div className="container-padding"> 
          <IndividualItemList />
          <ProductTilesContainer />
          <ModelImage />
      </div>
    </>
  );
}

export default App;
