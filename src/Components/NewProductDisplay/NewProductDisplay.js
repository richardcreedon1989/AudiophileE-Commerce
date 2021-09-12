import "./NewProductDisplay.css"
import Button from "../Button/Button"

const NewProductDisplay = () => {
    return ( 
    // <div className="container"> 
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
            <Button theme="orange" />
        </div>
        
    // </div>
    )
}

export default NewProductDisplay