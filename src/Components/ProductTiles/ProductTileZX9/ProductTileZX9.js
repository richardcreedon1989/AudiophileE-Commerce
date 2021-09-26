import "./ProductTileZX9.css"
import Button from "../../Button/Button"
import {Link} from "react-router-dom"
const className = "ProductTilesZX9"

const ProductTileZX9 = () => {
    return (
        <> 
          <div className={`${className}Container`}> 
            <div className={`${className}TextContainer`}>
                  <div className={`${className}TextHeading`}>
                      ZX9 SPEAKER 
                  </div>
                  <p className={`${className}TextParagraph`}>
                      Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                  </p>
                  <Link to="/audiophile-ecommerce/ProductDetails/:6"> 
                      <Button theme="black" /> 
                  </Link>
            </div>
          </div>
        </>
    )
}

export default ProductTileZX9