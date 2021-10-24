import "./RecommendedProducts.css"
import Button from "../Button/Button"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const className = "RecommendedProducts"

const RecommendedProducts = ({data, params}) => {

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

  // const goToRecommendedProduct = () => {

  // }

  const RecommendedProductsDisplay = () => {
    return data[params].others.map((item, index) => {
      
      const goToRecommendedProduct = () => {
        data.find((subItem, index) => {
            if(subItem.slug === item.slug) {
              return item.slug
            } 
          })
      }

        return (
            <div key={index} className={`${className}IndividualProductContainer`} > 
              <img className={`${className}Image`} src={`${process.env.PUBLIC_URL}${item.image[imageSizer()].slice(1)}`} alt="other products" /> 
              <h3 className={`${className}ProductHeading`}> {item.name} </h3>
              <div className={`${className}Button`}> 
                  <Link to={`/ProductDetails/:${goToRecommendedProduct()}`}> 
                      <Button theme="orange" /> 
                  </Link>
              </div>         
          </div>
        )
    })
  }

  return (
      <div className={`${className}Container`}> 
          <h2 className={`${className}Heading`}> YOU MAY ALSO LIKE</h2>
          <div className={`${className}FlexContainer`}> 
              {data ? RecommendedProductsDisplay() : ""}
          </div>
      </div>    
  )
}

export default RecommendedProducts