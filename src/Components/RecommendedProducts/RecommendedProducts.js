import "./RecommendedProducts.css"
import Button from "../Button/Button"
// import data from "../../data.json"

const className = "RecommendedProducts"

const RecommendedProducts = ({data, params}) => {
  
  const RecommendedProductsDisplay = () => {
    console.log("thisparams", params)
    return data[params].others.map((item, index) => {
      let image = item.image.tablet.slice(1)
        return (
            <div key={index} className={`${className}IndividualProductContainer`} > 
              <img className={`${className}Image`} src={`${process.env.PUBLIC_URL}${image}`} alt="other products" /> 
              <h3 className={`${className}ProductHeading`}> {item.name} </h3>
              <div className={`${className}Button`}> 
                  <Button theme="orange" /> 
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