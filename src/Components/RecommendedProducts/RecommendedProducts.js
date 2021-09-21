import "./RecommendedProducts.css"
import Button from "../Button/Button"
import data from "../../data.json"

const className = "RecommendedProducts"

const RecommendedProductsDisplay = () => {
    return data[0].others.map((item, index) => {
        return (
          <div className={`${className}IndividualProductContainer`} > 
              <img className={`${className}Image`} src={process.env.PUBLIC_URL + `${item.image.mobile}`} alt="other products" /> 
              <h3 className={`${className}ProductHeading`}> {item.name} </h3>
              <div className={`${className}Button`}> 
                  <Button theme="orange" /> 
              </div> 
              
          </div>
        )
    })
}

const RecommendedProducts = () => {
  return (
      <div className={`${className}Container`}> 
          <h2 className={`${className}Heading`}> YOU MAY ALSO LIKE</h2>
          {RecommendedProductsDisplay()}
      </div>    
  )
}

export default RecommendedProducts