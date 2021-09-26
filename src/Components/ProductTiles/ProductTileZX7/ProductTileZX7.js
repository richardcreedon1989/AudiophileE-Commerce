import "./ProductTileZX7.css"
import Button from "../../Button/Button"
import {Link} from "react-router-dom"
const className = "ProductTilesZX7"

const ProductTileZX7 = () => {
    return(
            <div className={`${className}BackgroundImage`}>
                  <div className={`${className}InnerContainerTextButtonGroup`}>
                    <div className={`${className}ImageTextHeading`}> 
                        ZX7 SPEAKER 
                    </div>
                    <Link to="/audiophile-ecommerce/ProductDetails/:5"> 
                        <Button theme="transparent" />                        
                    </Link>
                  </div>
            </div>
              
    )
}

export default ProductTileZX7