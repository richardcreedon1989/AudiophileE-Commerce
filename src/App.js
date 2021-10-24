import './App.css';
import React, {useEffect, useState} from "react"
import HomePage from './Components/Homepage/Homepage';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import ProductDetailsPage from "./Components/ProductDetailsPage/ProductDetailsPage"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import axios from "axios"
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import {CartProvider} from "./Components/Contexts/CartContext"

// ---------------------          TODO     -----------------------------

//  2) Grey out background of menu/cart when clicked 

//  3) See Product still isnt fixed so following link doesnt work 

//  4) Images arent working on earphones 

//  5) scroll to top on new page

//   6) purchase success page 
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
