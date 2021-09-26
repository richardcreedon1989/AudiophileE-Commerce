import "./ProductDetailsInfo.css"
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts"
import Counter from "../Counter/Counter"
import ProductDetailsInfoImages from "../ProductDetailsInfoImages/ProductDetailsInfoImages"

const className = "ProductDetailsInfo"

const ProductDetailsInfo = ({data, params}) => {

  console.log("dataasdasd", params)
  params = params.slice(1) - 1
  // console.log("dataasdasd", data[params])

  const IncludedItems = () => {
    return data[params].includes.map((items, index) => {
      return (
          <div key={index} className={`${className}BoxContentsText`}> 
            <span div className={`${className}BoxContentsQuantity`}> 
                {items.quantity}
            </span> {items.item}  
          </div>
      )
    })
  }

  let image = data && params ? `${process.env.PUBLIC_URL}${data[params].image.mobile.slice(1)}` : ""
  console.log("image", image)
  return (
      <div className={`${className}Container`} >  
        <div className={`${className}ProductContainer`}> 
            <img className={`${className}Image`} src={image} alt="product" />
            <div className={`${className}TextContainer`}> 
                <h2 className={`${className}NewProductHeading`}> 
                    {data &&  data[params].new === true ? "New Product" : ""} 
                </h2>
                <h2 className={`${className}ProductHeading`}>
                    {data && data[params].name.toUpperCase()}
                </h2>
                <p className={`${className}Paragraph`}> 
                    {data && data[params].description}
                </p>
                <h2 className={`${className}Price`}> $ {data && data[params].price} </h2>
                <div className={`${className}Button`}> 
                <Counter />
                </div>
            </div>
        </div>
        <div className={`${className}FeaturesContainer`}> 
            <h2 className={`${className}Features`}> FEATURES  </h2>
            <section className={`${className}FeaturesText`}> {data && data[params].features} </section>
        </div>
    
        <div className={`${className}BoxContentsContainer`}> 
          <h2 className={`${className}BoxContentsHeading`}> IN THE BOX</h2>
          <div className={`${className}BoxContentsList`}> 
              {data && IncludedItems()}
          </div>
          
        </div>
        <ProductDetailsInfoImages params={params} data={data} />
        <RecommendedProducts params={params} data={data}/>
      </div>
  )
}

export default ProductDetailsInfo