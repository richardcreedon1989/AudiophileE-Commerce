import "./ProductDetailsInfo.css"

import {useState, useEffect} from "react"
import Image from "../../assets/category-image-product-xx99-mobile.jpg"
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts"

import data from "../../data.json"
import Counter from "../Counter/Counter"

const className = "ProductDetailsInfo"

const IncludedItems = () => {
  return data[0].includes.map((items, index) => {
    return (
        <div className={`${className}BoxContentsText`}> 
          <span div className={`${className}BoxContentsQuantity`}> 
              {items.quantity}x
          </span> {items.item}  
        </div>
    )
  })
}

const ProductDetailsInfo = () => {


  // const [images] = useState({mobileImage: imageSourceMobile, tabletImage: imageSourceTablet, desktopImage: imageSourceDesktop})
    
  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  const sourceDecider = () => {
    if(windowSize <= 600) {
      return process.env.PUBLIC_URL + `${data[0].gallery.first.mobile}`
    } else if (windowSize <= 1400) {
      return process.env.PUBLIC_URL + `${data[0].gallery.first.tablet}`
    } else {
      return process.env.PUBLIC_URL + `${data[0].gallery.first.desktop}`
    }
  } //Neccessary to store the images or else resize redownloads images and takes too long

  console.log("data", process.env.PUBLIC_URL + `${data[0].gallery.first}.${sourceDecider()}`)

  //Return ==> data [object Object].desktop

  return (
      <div className={`${className}Container`} >  
        <img className={`${className}Image`} src={Image} alt="product" />
        <div className={`${className}TextContainer`}> 
            <h2 className={`${className}NewProductHeading`}> 
                {data[0].new === true ? "New Product" : ""} 
            </h2>
            <h2 className={`${className}ProductHeading`}>
                {data[0].name}
            </h2>
            <p className={`${className}Paragraph`}> 
                {data[0].description}
            </p>
            <h2 className={`${className}Price`}> $ {data[0].price} </h2>
            <Counter />
            <h2 className={`${className}Features`}> FEATURES  </h2>
            <section className={`${className}FeaturesText`}> {data[0].features} </section>
        </div>
        <div className={`${className}BoxContentsContainer`}> 
          <h2 className={`${className}BoxContentsHeading`}> IN THE BOX</h2>
          {IncludedItems()}
        </div>
        <div>
          {console.log("data", `${process.env.PUBLIC_URL}${data[0].gallery.first[sourceDecider()]}`)}
          
            <img className={`${className}ImageGroup`} src={process.env.PUBLIC_URL + `${data[0].gallery.first}.${sourceDecider()}`} alt="product" />
            <img className={`${className}ImageGroup`} src={`${process.env.PUBLIC_URL}${data[0].gallery.first[sourceDecider()]}`} alt="product" />
            <img className={`${className}ImageGroup`} src={process.env.PUBLIC_URL + `${data[0].gallery.third.mobile}`} alt="product" />
        </div> 
        <RecommendedProducts />
      </div>
  )
}

export default ProductDetailsInfo