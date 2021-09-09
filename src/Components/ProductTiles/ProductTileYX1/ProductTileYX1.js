import "./ProductTileYX1.css"
import earPhoneImage from "../../../assets/image-earphones-yx1.jpg"
import Button from "../../Button/Button"

const className = "ProductTileYX1"

const ProductTileYX1 = () => {
		return(
				<div className={`${className}Container`}>
						<img className={`${className}Image`} src={earPhoneImage} alt="earphones" />
						<div className={`${className}ProductInfoContainer`}>
								<h2 className={`${className}ProductText`} > YX1 EARPHONES </h2>	
								<div className={`${className}Button`}> 
									<Button />
								</div>
						</div> 
				</div>
    )
}

export default ProductTileYX1   