import "./ProductTileYX1.css"
import earPhoneImage from "../../../assets/image-earphones-yx1.jpg"
import Button from "../../Button/Button"

const className = "ProductTileYX1"

const ProductTileYX1 = () => {
		return(
				<div className={`${className}Container`}>
						<div className={`${className}BackgroundImage`} />
						<div className={`${className}ProductInfoContainer`}>
								<h2 className={`${className}ProductText`} > YX1 EARPHONES </h2>	
									<Button />
						</div>
				</div>
    )
}

export default ProductTileYX1   