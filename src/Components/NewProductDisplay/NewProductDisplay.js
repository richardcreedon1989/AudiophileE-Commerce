import "./NewProductDisplay.css"
import Button from "../Button/Button"
import {Link} from "react-router-dom"

const NewProductDisplay = () => {
    return ( 
        <div className="newProductContainer"> 
            <div className="newProductText">  
                NEW PRODUCT 
            </div>  
            <header className="headPhonesName"> 
                XX99 MARK II HEADPHONES
            </header> 
            <p className="headPhonesParagraph"> 
            Experience natural, lifelike audio and exceptional build quality made for 
            the passionate music enthusiast.
            </p>
            <Link to="/audiophile-ecommerce/ProductDetails/:4">
                <Button theme="orange" />
            </Link>     
        </div>
    )
}

export default NewProductDisplay