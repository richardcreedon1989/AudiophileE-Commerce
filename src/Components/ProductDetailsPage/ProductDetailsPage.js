import "./ProductDetailsPage.css"
import Header from "../Header/Header"
import ProductDetailsInfo from "../ProductDetailsInfo/ProductDetailsInfo"
import IndividualItemList from "../ShopItemList/IndividualItem/IndividualItem"
import ModelImage from "../ModelImage/ModelImage"
import Footer from "../Footer/Footer"
import {useState, useEffect} from "react"
import axios from "axios"
import "../../App.css"

const ProductDetailsPage = () => {

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
            <Header color="black"/>
            <hr className="hrDesktop" />
            <div className="desktop-width"> 
            <div className="container-padding display-block"> 
                <ProductDetailsInfo data={data}/>      
                <div className="individual-item-container">
                    <IndividualItemList />
                </div>
                <ModelImage />
            </div>
            </div>
            <Footer />
          </>
    )
}

export default ProductDetailsPage