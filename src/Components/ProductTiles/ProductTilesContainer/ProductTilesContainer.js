
import ProductTileZX9 from "../ProductTileZX9/ProductTileZX9"
import ProductTileZX7 from "../ProductTileZX7/ProductTileZX7"
import "./ProductTilesContainer.css"
import ProductTileYX1 from "../ProductTileYX1/ProductTileYX1"

const ProductTilesContainer = () => {
    return(
        <div> 
            <ProductTileZX9 />
            <ProductTileZX7 />  
            <ProductTileYX1 />
        </div>
    )
}

export default ProductTilesContainer