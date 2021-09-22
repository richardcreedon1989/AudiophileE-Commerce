import "./ProductDetailsInfo.css"


import Image from "../../assets/category-image-product-xx99-mobile.jpg"
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts"

import data from "../../data.json"
import Counter from "../Counter/Counter"
import ProductDetailsInfoImages from "../ProductDetailsInfoImages/ProductDetailsInfoImages"

const className = "ProductDetailsInfo"

const IncludedItems = () => {
  return data[0].includes.map((items, index) => {
    return (
        <div className={`${className}BoxContentsText`}> 
          <span div className={`${className}BoxContentsQuantity`}> 
              {items.quantity}x
          </span> {items.item}  
        </div>
    )
  })
}

const ProductDetailsInfo = () => {

  return (
      <div className={`${className}Container`} >  
        <img className={`${className}Image`} src={Image} alt="product" />
        <div className={`${className}TextContainer`}> 
            <h2 className={`${className}NewProductHeading`}> 
                {data[0].new === true ? "New Product" : ""} 
            </h2>
            <h2 className={`${className}ProductHeading`}>
                {data[0].name}
            </h2>
            <p className={`${className}Paragraph`}> 
                {data[0].description}
            </p>
            <h2 className={`${className}Price`}> $ {data[0].price} </h2>
            <Counter />
            <h2 className={`${className}Features`}> FEATURES  </h2>
            <section className={`${className}FeaturesText`}> {data[0].features} </section>
        </div>
        <div className={`${className}BoxContentsContainer`}> 
          <h2 className={`${className}BoxContentsHeading`}> IN THE BOX</h2>
          {IncludedItems()}
        </div>
        <ProductDetailsInfoImages  />
        <RecommendedProducts />
      </div>
  )
}

export default ProductDetailsInfo