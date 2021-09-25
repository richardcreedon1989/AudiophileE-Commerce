import './App.css';
import React, {useEffect, useState} from "react"
import HomePage from './Components/Homepage/Homepage';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import ProductDetailsPage from "./Components/ProductDetailsPage/ProductDetailsPage"
import {Route, BrowserRouter as Router, Link} from "react-router-dom"
import axios from "axios"

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
        <Router > 
            <Route path="/" exact component={HomePage} />
            <Route path="/Category/:Product"  component={() => <CategoryPage data={data} />} />
            <Route path="/ProductDetails"  component={ProductDetailsPage} />


            {/* <HomePage /> */}
            {/* <CategoryPage /> */}
            {/* <ProductDetailsPage /> */}
        </Router>
    </>
  );
}

export default App;
