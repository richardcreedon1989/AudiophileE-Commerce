import "./IndividualCategoryProduct.css"
import Button from "../../Components/Button/Button"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"

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
    <div className={`${className}Container`}>
      {console.log("dataHere", data[index])}
        <img className={`${className}ImageContainer`} src={data ? `${process.env.PUBLIC_URL}${data[index].categoryImage[imageSizer()].slice(1)}` : ""}  alt={data ? data[index].category : ""} />
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
                <Link to={`/audiophile-ecommerce/ProductDetails/:${data[index].id}`}> 
                    <Button theme="orange"/>
                </Link>
            </div> 
        </div>
      </div>
  )
}

export default IndividualCategoryProduct