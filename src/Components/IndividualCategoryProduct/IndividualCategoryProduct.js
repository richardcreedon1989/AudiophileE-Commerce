import "./IndividualCategoryProduct.css"
import Button from "../../Components/Button/Button"
import {useEffect, useState} from "react"
import ProductSpecs from "../ProductSpecs/ProductSpecs"

const className = "IndividualCategoryProduct"

const IndividualCategoryProduct = ({category, newProduct, imageSourceMobile, imageSourceTablet, imageSourceDesktop, product, description}) => {
  
  const [images] = useState({mobileImage: imageSourceMobile, tabletImage: imageSourceTablet, desktopImage: imageSourceDesktop})
  
  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  const sourceDecider = () => {
    if(windowSize <= 600) {
      return images.mobileImage
    } else if (windowSize <= 1400) {
      return images.tabletImage
    } else {
      return images.desktopImage
    }
  } //Neccessary to store the images or else resize redownloads images and takes too long
  
  return (
    <div className={`${className}Container`}>
        <img className={`${className}ImageContainer`} src={sourceDecider()} alt={category} />
        <div className={`${className}TextContainer`}> 
            <h2 className={`${className}NewProductHeading`}> 
                {newProduct} 
            </h2>
            <h2 className={`${className}ProductHeading`}>
                {product}
            </h2>
            <p className={`${className}Paragraph`}> 
                {description}
            </p>
            <div className={`${className}Button`}>
                <Button theme="orange"/>
            </div> 
        </div>
      </div>
  )
}

export default IndividualCategoryProduct