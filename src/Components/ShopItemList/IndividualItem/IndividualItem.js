import "./IndividualItem.css"
import iconArrowRight from "../../../assets/icon-arrow-right.svg"
import speakerPreview from "../../../assets/speaker-preview.png"
import headsetPreview from "../../../assets/headset-preview.png"
import earphonePreview from "../../../assets/earphone-preview.png"
import {Link} from "react-router-dom"

const className = "IndividualItem"

const displayProducts = () => {
    let arrayOfItems = [{name: "Headphones", image: headsetPreview}, {name: "Speakers", image: speakerPreview}, {name: "Earphones", image: earphonePreview} ]
    return arrayOfItems.map((item, index) => {
        return(
            <div className={`${className}Container`} key={index} > 
                <img className={`${className}Image${item.name.toUpperCase()}`} src={item.image} alt="select button" />
                <h5 className={`${className}ProductText${item.name.toUpperCase()} individual-item-text`}> 
                {item.name.toUpperCase()}
                </h5> 

                <Link className={`${className}ShopLink`} to={`/Category/:${item.name}`}> 
                <p className={`${className}Shop`}> 
                    SHOP 
                    <img 
                        className={`${className}ShopIcon`} 
                        src={iconArrowRight} 
                        alt="select button"   
                    /> 
                </p>
                </Link> 

            </div> 
        )
    })
}

const IndividualItem = (props) => {
    return(
        <div className="items-container"> 
            {displayProducts()}
        </div>
    )
}

export default IndividualItem