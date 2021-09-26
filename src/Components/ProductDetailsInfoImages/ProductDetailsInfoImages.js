
import "./ProductDetailsInfoImages.css"
import {useState, useEffect} from "react"

const className = "ProductDetailsInfoImages"

const ProductDetailsInfoImages = ({data, params}) => {

  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  const imageSizer = () => {
    if(windowSize <= 600) {
      return "mobile"
    } else if (windowSize <= 1400) {
      return "tablet"
    } else {
      return "desktop"
    }
  }

  return (
    <figure className={`${className}Container`}>
        <div className={`${className}ContainerLeft`}>
            <img 
                className={`${className}Group1`} 
                src={data  ? `${process.env.PUBLIC_URL}${data[params].gallery.first[imageSizer()].slice(1)}` : ""} alt="product" 
            /> 
            <img 
                className={`${className}Group2`} 
                src={data ? `${process.env.PUBLIC_URL}${data[params].gallery.second[imageSizer()].slice(1)}` : ""} alt="product" 
            />
        </div>
        <div className={`${className}ContainerRight`}> 
            <img 
                className={`${className}Group3`} 
                src={data ? `${process.env.PUBLIC_URL}${data[params].gallery.third[imageSizer()].slice(1)}` : ""} alt="product" 
            />
        </div>
    </figure>
  )
}

export default ProductDetailsInfoImages

      