import "./ProductDetailsPage.css"
import Header from "../Header/Header"
import ProductDetailsInfo from "../ProductDetailsInfo/ProductDetailsInfo"
import IndividualItemList from "../ShopItemList/IndividualItem/IndividualItem"
import ModelImage from "../ModelImage/ModelImage"
import Footer from "../Footer/Footer"
import "../../App.css"

const ProductDetailsPage = () => {
    return (
          <> 
            <Header color="black"/>
            <hr className="hrDesktop" />
            <div className="container-padding"> 
              <ProductDetailsInfo />
            </div>
            <div className="container-padding"> 
                <div className="individual-item-container">
                    <IndividualItemList />
                </div>
                <ModelImage />
            </div>
            <Footer />
          </>
    )
}

export default ProductDetailsPage