import "./IndividualCategoryProduct.css"
import Button from "../../Components/Button/Button"
import {useEffect, useState} from "react"

const className = "IndividualCategoryProduct"

const IndividualCategoryProduct = (props) => {
  const {data, index} = props
  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  // const sourceDecider = () => {
  //   if(windowSize <= 600) {
  //     return images.mobileImage
  //   } else if (windowSize <= 1400) {
  //     return images.tabletImage
  //   } else {
  //     return images.desktopImage
  //   }
  // } //Neccessary to store the images or else resize redownloads images and takes too long
  
  let image = data ? data[index].image.desktop.slice(1) : ""

  return (
    <div className={`${className}Container`}>
      {console.log("dataHere", props.index)}
        <img className={`${className}ImageContainer`} src={data ? `${process.env.PUBLIC_URL}${image}` : ""}  alt={data ? data[index].category : ""} />
        <div className={`${className}TextContainer`}> 
            <h2 className={`${className}NewProductHeading`}> 
                {data && data[index].new ? "New Product" : ""} 
            </h2>
            <h2 className={`${className}ProductHeading`}>
                {data ? data[index].name : ""}
            </h2>
            <p className={`${className}Paragraph`}> 
                {data ? data[index].description : ""}
            </p>
            <div className={`${className}Button`}>
                <Button theme="orange"/>
            </div> 
        </div>
      </div>
  )
}

export default IndividualCategoryProduct
// const IndividualCategoryProduct = ({category, newProduct, imageSourceMobile, imageSourceTablet, imageSourceDesktop, product, description}) => {
  
//   const [images] = useState({mobileImage: imageSourceMobile, tabletImage: imageSourceTablet, desktopImage: imageSourceDesktop})
  
//   const [windowSize, setWindowSize] = useState()

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize(window.innerWidth)
//     }
//     window.addEventListener('resize', handleResize)
//   })

//   const sourceDecider = () => {
//     if(windowSize <= 600) {
//       return images.mobileImage
//     } else if (windowSize <= 1400) {
//       return images.tabletImage
//     } else {
//       return images.desktopImage
//     }
//   } //Neccessary to store the images or else resize redownloads images and takes too long
  
//   return (
//     <div className={`${className}Container`}>
//         <img className={`${className}ImageContainer`} src={sourceDecider()} alt={category} />
//         <div className={`${className}TextContainer`}> 
//             <h2 className={`${className}NewProductHeading`}> 
//                 {newProduct} 
//             </h2>
//             <h2 className={`${className}ProductHeading`}>
//                 {product}
//             </h2>
//             <p className={`${className}Paragraph`}> 
//                 {description}
//             </p>
//             <div className={`${className}Button`}>
//                 <Button theme="orange"/>
//             </div> 
//         </div>
//       </div>
//   )
// }

// export default IndividualCategoryProduct