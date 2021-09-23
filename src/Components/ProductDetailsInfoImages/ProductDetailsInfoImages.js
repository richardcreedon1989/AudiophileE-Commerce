
import "./ProductDetailsInfoImages.css"
import {useState, useEffect} from "react"
import data from "../../data.json"

import {imageSizer, imageSizerTwo, imageSizerThree} from "./ImageImports"

// import asset1 from "../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg"

const className = "ProductDetailsInfoImages"

const ProductDetailsInfoImages = () => {

  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })




//Change max width to 1200/1400px for container so stop stretch issues
  return (
    <figure className={`${className}Container`}>
        <div className={`${className}ContainerLeft`}> 
            <img 
                className={`${className}Group1`} 
                src={imageSizer(windowSize)} alt="product" 
            /> 
            <img 
                className={`${className}Group2`} 
                src={imageSizerTwo(windowSize)} alt="product" 
            />
        </div>
        <div className={`${className}ContainerRight`}> 
            <img 
                className={`${className}Group3`} 
                src={imageSizerThree()} alt="product" 
            />
        </div>
    </figure>
  )
}

export default ProductDetailsInfoImages