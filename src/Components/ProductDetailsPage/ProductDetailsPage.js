import "./ProductDetailsPage.css"
import Header from "../Header/Header"
import ProductDetailsInfo from "../ProductDetailsInfo/ProductDetailsInfo"
import IndividualItemList from "../ShopItemList/IndividualItem/IndividualItem"
import ModelImage from "../ModelImage/ModelImage"
import Footer from "../Footer/Footer"
import "../../App.css"
import {useParams} from "react-router-dom"

const ProductDetailsPage = ({data}) => {

  const params = useParams()

    return (
          <> 
            <Header color="black"/>
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
            <Footer />
          </>
    )
}

export default ProductDetailsPage