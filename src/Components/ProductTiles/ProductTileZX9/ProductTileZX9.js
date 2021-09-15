import "./ProductTileZX9.css"
import Button from "../../Button/Button"
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
                  <Button theme="black" /> 
            </div>
          </div>
        </>
    )
}

export default ProductTileZX9