import "./IndividualCategoryProduct.css"
import Button from "../../Components/Button/Button"

const className = "IndividualCategoryProduct"
const IndividualCategoryProduct = ({category, newProduct, imageSource, product, description}) => {
  return (
    <div className={`${className}Container`}>
        <img className={`${className}ImageContainer`} src={imageSource} alt={category} />
        {console.log("image", imageSource)}
        <div className={`${className}TextContainer`}> 
            <h2 className={`${className}NewProductHeading`}> 
                {newProduct} 
            </h2>
            <h2 className={`${className}ProductHeading`}>
                {product}
            </h2>
            <p className={`${className}Paragraph`}> 
                {description}
            </p>
            <div className={`${className}Button`}>
                <Button theme="orange"/>
            </div> 
        </div>
      </div>
  )
}

export default IndividualCategoryProduct