import "./ProductDetailsInfo.css"
import ProductSpecs from "../ProductSpecs/ProductSpecs"

import Image from "../../assets/category-image-product-xx99-mobile.jpg"

const className = "ProductDetailsInfo"

// const Products = [

//   { category: "HEADPHONES", product: "XX99 MARK II HEADPHONES",  imageSourceMobile: "HeadPhonesImage1Mobile", 
//   imageSourceTablet: "HeadPhonesImage1Tablet", imageSourceDesktop: "HeadPhonesImage1Desktop",
//   newProduct: "" , description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. 
//   It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.`
//   },

//   { category: "HEADPHONES", product: "XX99 MARK I HEADPHONES", imageSourceMobile: "HeadPhonesImage2Mobile", 
//   imageSourceTablet: "HeadPhonesImage2Tablet", imageSourceDesktop: "HeadPhonesImage2Desktop",
//   newProduct: "" , description: `As the gold standard for headphones, the classic XX99 Mark I 
//   offers detailed and accurate audio reproduction for audiophiles, 
//   mixing engineers, and music aficionados alike in studios and on the go.`
//   },

//   { category: "HEADPHONES", product: "XX59 HEADPHONES", imageSourceMobile: "HeadPhonesImage3Mobile", 
//   imageSourceTablet: "HeadPhonesImage3Tablet", imageSourceDesktop: "HeadPhonesImage3Desktop",
//   newProduct: "" , description: `Enjoy your audio almost anywhere and customize it to your specific 
//   tastes with the XX59 headphones. The stylish yet durable versatile 
//   wireless headset is a brilliant companion at home or on the move.`  
//   }

// ]

const ProductDetailsInfo = () => {
  return (
      <div className={`${className}Container`} >  
        <img className={`${className}Image`} src={Image} alt="product" />
        <div className={`${className}TextContainer`}> 
            <h2 className={`${className}NewProductHeading`}> 
                {ProductSpecs[0].newProduct} 
            </h2>
            <h2 className={`${className}ProductHeading`}>
                {ProductSpecs[0].product}
            </h2>
            <p className={`${className}Paragraph`}> 
                {ProductSpecs[0].description}
            </p>
            <h2> Price </h2>
            <div className={`${className}Button`}>
            </div> 
            <h2> Features  </h2>
            <section> {ProductSpecs[0].features} </section>
        </div>

        <div> 
          <h2> IN THE BOX</h2>
          {ProductSpecs[0].includes.map((items, index) => {
            return <div> <span> {items.quantity} </span> {items.item}  </div>
          })}
        </div>

        <div>
            <img className={`${className}ImageGroup1`} src={Image} alt="product" />
            <img className={`${className}ImageGroup2`} src={Image} alt="product" />
            <img className={`${className}ImageGroup3`} src={Image} alt="product" />
        </div> 
        
      </div>
  )
}

export default ProductDetailsInfo