
import "./ProductDetailsInfoImages.css"
// import {useState, useEffect} from "react"

const className = "ProductDetailsInfoImages"

const ProductDetailsInfoImages = ({data, params}) => {

  // const [setWindowSize] = useState()

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize(window.innerWidth)
  //   }
  //   window.addEventListener('resize', handleResize)
  // })

  // const windowSizeInitial = window.innerWidth 

  // const imageSizer = () => {
  //   if(windowSize <= 600) {
  //     return ".mobile"
  //   } else if (windowSize <= 1400) {
  //     return ".tablet"
  //   } else {
  //     return ".desktop"
  //   }
  // }

  

  /*POTENTIAL TO CREATE FUNCTION WHICH RETURNS THE CORRECT DOT NOTATION NEEDED
   EG function (windowSize, index) {
     return data[index].first.gallery.mobile 
   }   - NEED LOTS OF SWITCH STATEMENT STUFF TO CHECK TO SEE IF ITS FIRST IMAGE OR SECOND OR ALTERNATIVELY - 
   SEPARATE FUNCTION FOR EACH OF THE DIFFERENT IMAGES
  */


// let image = data && data[0].gallery.first
// let image1 = data && `${data[0].gallery.first}` 


//Change max width to 1200/1400px for container so stop stretch issues
  return (
    <figure className={`${className}Container`}>
        {/* {console.log("data123",`${process.env.PUBLIC_URL}` + data[0].gallery.first.mobile.slice(1) )} */}
        {/* {console.log("testing", `${process.env.PUBLIC_URL}${data[0].gallery.first[imageSizer()[0]]}`)} */}
        {/* {console.log("testing1", [imageSizer()][0])} */}
        {/* {console.log("tester123", data && [imageSizer()] ? data[0].gallery.first[imageSizer()][0] : "nothing")} */}
        {/* {console.log("imageSizer", [imageSizer()][0])} */}
        {/* {console.log("data1123",data[0].gallery.first.mobile)} */}
        <div className={`${className}ContainerLeft`}>
            <img 
                className={`${className}Group1`} 
                // src={data ? `${process.env.PUBLIC_URL}${data[0].gallery.first[imageSizer()]}` : ""} alt="product" 
                src={data  ? `${process.env.PUBLIC_URL}${data[params].gallery.first.mobile.slice(1)}` : ""} alt="product" 
            /> 
            <img 
                className={`${className}Group2`} 
                src={data ? `${process.env.PUBLIC_URL}${data[params].gallery.second.mobile.slice(1)}` : ""} alt="product" 
            />
        </div>
        <div className={`${className}ContainerRight`}> 
            <img 
                className={`${className}Group3`} 
                src={data ? `${process.env.PUBLIC_URL}${data[params].gallery.third.mobile.slice(1)}` : ""} alt="product" 
            />
        </div>
    </figure>
  )
}

export default ProductDetailsInfoImages

      