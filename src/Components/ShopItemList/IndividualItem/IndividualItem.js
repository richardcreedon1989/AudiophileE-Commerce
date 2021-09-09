import "./IndividualItem.css"
import iconArrowRight from "../../../assets/icon-arrow-right.svg"
import speakerPreview from "../../../assets/speaker-preview.png"
import headsetPreview from "../../../assets/headset-preview.png"
import earphonePreview from "../../../assets/earphone-preview.png"


const className = "IndividualItem"

const displayProducts = () => {
    let arrayOfItems = [{name: "HEADPHONES", image: headsetPreview}, {name: "SPEAKERS", image: speakerPreview}, {name: "EARPHONES", image: earphonePreview} ]
    return arrayOfItems.map((item) => {
        return(
            <div className={`${className}Container`} > 
                <img className={`${className}Image${item.name}`} src={item.image} alt="select button" />
                <h5 className={`${className}ProductText${item.name}`}> 
                {item.name}
                </h5> 
                <p className={`${className}Shop`}> SHOP <img className={`${className}ShopIcon`} src={iconArrowRight} alt="select button" /> </p>
            </div> 
        )
    })
}

const IndividualItem = () => {
    return(
        <div> 
            {displayProducts()}
        </div>
    )
}

export default IndividualItem;