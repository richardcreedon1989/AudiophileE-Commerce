import './App.css';
import Header from "./Components/Header/Header"
import NewProductDisplay from "./Components/NewProductDisplay/NewProductDisplay"
// import ShopItemList from './Components/ShopItemList/ShopItemListContainer/ShopItemListContainer';
import IndividualItemList from "./Components/ShopItemList/IndividualItem/IndividualItem"
import ProductTilesContainer from "./Components/ProductTiles/ProductTilesContainer/ProductTilesContainer"

function App() {
  return (
    <div className="App">
      <Header />
      <NewProductDisplay />
      {/* <ShopItemList /> */}
      <IndividualItemList />
      <ProductTilesContainer />
    </div>
  );
}

export default App;
