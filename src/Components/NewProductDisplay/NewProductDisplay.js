import "./NewProductDisplay.css"
import HeadPhonesImage from "../../assets/image-header.jpg"

const NewProductDisplay = () => {
    return ( 
    <div className="container"> 
        <img className="headPhonesImage" src={HeadPhonesImage} alt="headphones" />
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
            <button className="btnProductInfo"> 
                SEE PRODUCT
            </button>
        </div>
        
    </div>
    )
}

export default NewProductDisplay