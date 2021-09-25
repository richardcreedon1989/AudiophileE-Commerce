
import "./CategoryProductList.css"
import IndividualCategoryProduct from "../IndividualCategoryProduct/IndividualCategoryProduct"

import ProductSpecs from "../ProductSpecs/ProductSpecs"

import HeadPhonesImage1Mobile from "../../assets/image-category-page-preview-mobile3.jpg"
import HeadPhonesImage1Tablet from "../../assets/image-category-page-preview-tablet3.jpg"
import HeadPhonesImage1Desktop from "../../assets/image-category-page-preview-desktop3.jpg"

import HeadPhonesImage2Mobile from "../../assets/image-category-page-preview-mobile2.jpg"
import HeadPhonesImage2Tablet from "../../assets/image-category-page-preview-tablet2.jpg"
import HeadPhonesImage2Desktop from "../../assets/image-category-page-preview-desktop2.jpg"


import HeadPhonesImage3Mobile from "../../assets/image-category-page-preview-mobile1.jpg"
import HeadPhonesImage3Tablet from "../../assets/image-category-page-preview-tablet.jpg"
import HeadPhonesImage3Desktop from "../../assets/image-category-page-preview-desktop.jpg"

import SpeakerImage1 from "../../assets/image-category-page-preview-speaker-mobile.jpg"
import SpeakerImage2 from "../../assets/image-category-page-preview-speaker2-mobile.jpg"

import EarphonesImage1 from "../../assets/image-category-page-preview-earphones-mobile.jpg"
import { useParams } from "react-router"


const className = "CategoryProductList"


const CategoryProductList = ({data, params}) => {
//SHOULDNT BE MAPPING THROUGH PRODUCTS HERE, BUT DATA USING PARAMS TO CHECK WHAT CATEGORY IT IS AND RETURN THOSE CATEGORIES ONLY
  // const displayCategoryProducts = () => { 
  //   return Products.map((falseProps, index) => {
  //     return 
  //   })
  // }

  const displayCategoryProducts1 = () => {
    return data.map((item, index) => {
      console.log("items", item.category)
    if(item.category === params.slice(1).toLowerCase()) {
      return <IndividualCategoryProduct data={data} index={index} key={index}/>
    }
    // return console.log("item", item)
  })
}

  return (
    <>
    {/* {displayCategoryProducts()} */}
    {data && displayCategoryProducts1()}
    </>
  )
}

export default CategoryProductList