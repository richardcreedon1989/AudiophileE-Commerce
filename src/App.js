import './App.css';
import React, {useEffect, useState} from "react"
import HomePage from './Components/Homepage/Homepage';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import ProductDetailsPage from "./Components/ProductDetailsPage/ProductDetailsPage"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import axios from "axios"
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import {CartProvider} from "./Components/Contexts/CartContext"


function App() {

  const [data, setData] = useState()

  const getData =  async() => {
    let result = await axios.get(`${process.env.PUBLIC_URL}/data.json`)
    setData(result.data)
  }
  
  useEffect(()=>{
    getData()
  },[])
  

  return (
    <>
    <CartProvider> 
        <Router> 
            <Switch> 
                <Route path="/audiophile-ecommerce" exact component={() => <HomePage data={data} />} />
                <Route path="/audiophile-ecommerce/Category/:Product"  component={() => <CategoryPage data={data} />} />
                <Route path={`/audiophile-ecommerce/ProductDetails/:id`}  component={() => <ProductDetailsPage data={data} />}/>
                <Route path={`/audiophile-ecommerce/CheckoutPage`}  component={() => <CheckoutPage data={data} />}/>
            </Switch>
        </Router>
    </CartProvider>
      
    </>
  );
}

export default App;
