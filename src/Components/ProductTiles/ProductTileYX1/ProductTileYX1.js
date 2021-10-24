import "./ProductTileYX1.css"
import Button from "../../Button/Button"
import {Link} from "react-router-dom"

const className = "ProductTileYX1"

const ProductTileYX1 = () => {
		return(
				<div className={`${className}Container`}>
						<div className={`${className}BackgroundImage`} />
						<div className={`${className}ProductInfoContainer`}>
								<h2 className={`${className}ProductText`} > YX1 EARPHONES </h2>	
								<Link to="/ProductDetails/:1"> 
										<Button />                       
                </Link>
						</div>
				</div>
    )
}

export default ProductTileYX1   