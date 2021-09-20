import "./ProductDetailsPage.css"
import Header from "../Header/Header"
import ProductDetailsInfo from "../ProductDetailsInfo/ProductDetailsInfo"
import "../../App.css"

const ProductDetailsPage = () => {
    return (
          <> 
            <Header color="black"/>
            <hr className="hrDesktop" />
            <div className="container-padding"> 
              <ProductDetailsInfo />
            </div>
          </>
    )
}

export default ProductDetailsPage