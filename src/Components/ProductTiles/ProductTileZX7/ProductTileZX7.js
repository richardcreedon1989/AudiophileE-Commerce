import "./ProductTileZX7.css"
import Button from "../../Button/Button"
import backgroundImage from "../../../assets/image-speaker-zx7.jpg"
const className = "ProductTilesZX7"

const ProductTileZX7 = () => {
    return(
              <div className={`${className}Container`}>
                      <img className={`${className}BackgroundImage`} src={backgroundImage} alt="Speaker"/>    
                      <div className={`${className}InnerContainerTextButtonGroup`}>
                        <div className={`${className}ImageTextHeading`}> 
                            ZX7 SPEAKER 
                        </div>
                        <Button theme="transparent" />                        
                      </div>
                </div>
    )
}

export default ProductTileZX7