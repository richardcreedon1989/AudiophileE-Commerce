
import "./ProductDetailsInfoImages.css"
import {useState, useEffect} from "react"
import data from "../../data.json"


const className = "ProductDetailsInfoImages"

const ProductDetailsInfoImages = () => {

  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  const sourceDecider = () => {
    if(windowSize <= 600) {
      return "mobile"
    } else if (windowSize <= 1400) {
      return "tablet"
    } else {
      return "desktop"
    }
  } 

//Change max width to 1200/1400px for container so stop stretch issues
  return (
    <figure className={`${className}Container`}>
    TEst
        <div className={`${className}ContainerLeft`}> 
            <img 
                className={`${className}Group1`} 
                src={process.env.PUBLIC_URL + data[0].gallery.first[sourceDecider()]} alt="product" 
            />
            <img 
                className={`${className}Group2`} 
                src={`${process.env.PUBLIC_URL}${data[0].gallery.second[sourceDecider()]}`} alt="product" 
            />
        </div>
        <div className={`${className}ContainerRight`}> 
            <img 
                className={`${className}Group3`} 
                src={process.env.PUBLIC_URL + data[0].gallery.third[sourceDecider()]} alt="product" 
            />
        </div>
    </figure>
  )
}

export default ProductDetailsInfoImages