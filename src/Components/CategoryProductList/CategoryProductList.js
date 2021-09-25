
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


const className = "CategoryProductList"

const Products = [

  { category: "HEADPHONES", product: "XX99 MARK II HEADPHONES",  imageSourceMobile: HeadPhonesImage1Mobile, 
  imageSourceTablet: HeadPhonesImage1Tablet, imageSourceDesktop: HeadPhonesImage1Desktop,
  newProduct: "" , description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. 
  It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.`
  },

  { category: "HEADPHONES", product: "XX99 MARK I HEADPHONES", imageSourceMobile: HeadPhonesImage2Mobile, 
  imageSourceTablet: HeadPhonesImage2Tablet, imageSourceDesktop: HeadPhonesImage2Desktop,
  newProduct: "" , description: `As the gold standard for headphones, the classic XX99 Mark I 
  offers detailed and accurate audio reproduction for audiophiles, 
  mixing engineers, and music aficionados alike in studios and on the go.`
  },

  { category: "HEADPHONES", product: "XX59 HEADPHONES", imageSourceMobile: HeadPhonesImage3Mobile, 
  imageSourceTablet: HeadPhonesImage3Tablet, imageSourceDesktop: HeadPhonesImage3Desktop,
  newProduct: "" , description: `Enjoy your audio almost anywhere and customize it to your specific 
  tastes with the XX59 headphones. The stylish yet durable versatile 
  wireless headset is a brilliant companion at home or on the move.`  
  }

]

const Speakers = [

    {
      category: "SPEAKERS", product: "ZX9 SPEAKER", imageSource: SpeakerImage1, newProduct: "", 
      description: `Upgrade your sound system with the all new ZX9 active speaker. 
      It’s a bookshelf speaker system that offers truly wireless connectivity
      -- creating new possibilities for more pleasing and practical audio setups.`,
    }, 

    {
      category: "SPEAKERS", product: "ZX7 SPEAKER", imageSource: SpeakerImage2, newProduct: "", 
      description: `Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf 
      speaker uses high-end audiophile components that represents the top of the line powered 
      speakers for home or studio use.`,
    }

]

const Earphones = [
  
    {
      category: "EARPHONES", product: "YX1 WIRELESS EARPHONES", imageSource: EarphonesImage1, newProduct: "", 
      description: `Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
      Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.`
    }

]
// const displayCategoryProducts = () => { 
//     return Products.map(({category, product, description,newProduct, imageSourceMobile, imageSourceTablet, imageSourceDesktop}) => {
//       return <IndividualCategoryProduct category={category} product={product} imageSourceMobile={imageSourceMobile}
//             imageSourceTablet={imageSourceTablet} imageSourceDesktop={imageSourceDesktop} description={description} 
//             newProduct={newProduct}  
//             />
//   })
// }



const CategoryProductList = ({data}) => {

  const displayCategoryProducts = () => { 
    return Products.map((falseProps, index) => {
      return <IndividualCategoryProduct data={data} index={index}/>
    })
  }

  return (
    <>
    {displayCategoryProducts()}
    </>
  )
}

export default CategoryProductList