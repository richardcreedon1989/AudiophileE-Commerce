import "./ProductDetailsInfo.css"

import RecommendedProducts from "../RecommendedProducts/RecommendedProducts"

// import data from "../../data.json"
import Counter from "../Counter/Counter"
import ProductDetailsInfoImages from "../ProductDetailsInfoImages/ProductDetailsInfoImages"

const className = "ProductDetailsInfo"


const ProductDetailsInfo = ({data}) => {

  const IncludedItems = () => {
    return data[0].includes.map((items, index) => {
      return (
          <div className={`${className}BoxContentsText`}> 
            <span div className={`${className}BoxContentsQuantity`}> 
                {items.quantity}
            </span> {items.item}  
          </div>
      )
    })
  }

  return (
      <div className={`${className}Container`} >  
        <div className={`${className}ProductContainer`}> 
            <img className={`${className}Image`} src={data ? `${process.env.PUBLIC_URL}${data[0].image.desktop}` : ""} alt="product" />
            <div className={`${className}TextContainer`}> 
                <h2 className={`${className}NewProductHeading`}> 
                    {data && data[0].new === true ? "New Product" : ""} 
                </h2>
                <h2 className={`${className}ProductHeading`}>
                    {data && data[0].name.toUpperCase()}
                </h2>
                <p className={`${className}Paragraph`}> 
                    {data && data[0].description}
                </p>
                <h2 className={`${className}Price`}> $ {data && data[0].price} </h2>
                <div className={`${className}Button`}> 
                <Counter />
                </div>
            </div>
        </div>
        <div className={`${className}FeaturesContainer`}> 
            <h2 className={`${className}Features`}> FEATURES  </h2>
            <section className={`${className}FeaturesText`}> {data && data[0].features} </section>
        </div>
    
        <div className={`${className}BoxContentsContainer`}> 
          <h2 className={`${className}BoxContentsHeading`}> IN THE BOX</h2>
          <div className={`${className}BoxContentsList`}> 
              {data && IncludedItems()}
          </div>
          
        </div>
        <ProductDetailsInfoImages data={data} />
        <RecommendedProducts data={data}/>
      </div>
  )
}

export default ProductDetailsInfo