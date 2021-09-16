
import "./CategoryProductList.css"
import IndividualCategoryProduct from "../IndividualCategoryProduct/IndividualCategoryProduct"

import Image1 from "../../assets/image-category-page-preview-mobile3.jpg"
import Image2 from "../../assets/image-category-page-preview-mobile2.jpg"
import Image3 from "../../assets/image-category-page-preview-mobile.jpg"


const className = "CategoryProductList"

const Products = [
  { category: "HEADPHONES", product: "XX99 Mark II Headphones",  imageSource: Image1, 
  newProduct: "" , description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. 
                                  It redefines your premium headphone experience by reproducing 
                                  the balanced depth and precision of studio-quality sound.`},

  { category: "HEADPHONES", product: "XX99 Mark I Headphones", imageSource: Image2, 
  newProduct: "" , description: `As the gold standard for headphones, the classic XX99 Mark I 
                                  offers detailed and accurate audio reproduction for audiophiles, 
                                  mixing engineers, and music aficionados alike in studios and on the go.`},

  { category: "HEADPHONES", product: "XX59 Headphones", imageSource: Image3, 
  newProduct: "" , description: `Enjoy your audio almost anywhere and customize it to your specific 
                                  tastes with the XX59 headphones. The stylish yet durable versatile 
                                  wireless headset is a brilliant companion at home or on the move.`}
]

const displayCategoryProducts = () => { 
    return Products.map(({category, product, description,newProduct, imageSource}) => {
      return <IndividualCategoryProduct category={category} product={product} imageSource={imageSource} description={description} newProduct={newProduct}  />
  })
}

const CategoryProductList = (props) => {

  return (
    <>
    {displayCategoryProducts()}
    </>
  )
}

export default CategoryProductList