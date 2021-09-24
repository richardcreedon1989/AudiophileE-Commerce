
import "./ProductDetailsInfoImages.css"
import {useState, useEffect} from "react"

const className = "ProductDetailsInfoImages"

const ProductDetailsInfoImages = ({data}) => {

  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  const windowSizeInitial = window.innerWidth 

  const imageSizer = (windowSize = windowSizeInitial) => {
    if(windowSize <= 600) {
      return ".mobile"
    } else if (windowSize <= 1400) {
      return ".tablet"
    } else {
      return ".desktop"
    }
  } 

// let image = data[0].gallery.first[imageSizer()]
// let testing = [imageSizer()][0]
// let mobileImage = data ? data[0].gallery.first.mobile : ""

//Change max width to 1200/1400px for container so stop stretch issues
  return (
    <figure className={`${className}Container`}>
        <div className={`${className}ContainerLeft`}>
            <img 
                className={`${className}Group1`} 
                // src={data ? `${process.env.PUBLIC_URL}${data[0].gallery.first[imageSizer()]}` : ""} alt="product" 
                src={data ? `${process.env.PUBLIC_URL}${data[0].gallery.first.desktop}` : ""} alt="product" 
            /> 
            <img 
                className={`${className}Group2`} 
                src={data ? `${process.env.PUBLIC_URL}${data[0].gallery.second.desktop}` : ""} alt="product" 
            />
        </div>
        <div className={`${className}ContainerRight`}> 
            <img 
                className={`${className}Group3`} 
                src={data ? `${process.env.PUBLIC_URL}${data[0].gallery.third.desktop}` : ""} alt="product" 
            />
        </div>
    </figure>
  )
}

export default ProductDetailsInfoImages

                {/* {console.log("data123",`${process.env.PUBLIC_URL}` + data[0].gallery.first.mobile.slice(1) )} */}
          {/* {console.log("testing", `${process.env.PUBLIC_URL}${data[0].gallery.first[imageSizer()[0]]}`)} */}
          {/* {console.log("testing1", [imageSizer()][0])} */}
          {/* {console.log("tester123", data && [imageSizer()] ? data[0].gallery.first[imageSizer()][0] : "nothing")} */}
          {/* {console.log("imageSizer", [imageSizer()][0])} */}
          {/* {console.log("data1123",data[0].gallery.first.mobile)} */}