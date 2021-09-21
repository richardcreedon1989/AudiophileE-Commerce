import HeadPhonesImage1Mobile from "../../assets/image-category-page-preview-mobile3.jpg"
import HeadPhonesImage1Tablet from "../../assets/image-category-page-preview-tablet3.jpg"
import HeadPhonesImage1Desktop from "../../assets/image-category-page-preview-desktop3.jpg"

import HeadPhonesImage2Mobile from "../../assets/image-category-page-preview-mobile2.jpg"
import HeadPhonesImage2Tablet from "../../assets/image-category-page-preview-tablet2.jpg"
import HeadPhonesImage2Desktop from "../../assets/image-category-page-preview-desktop2.jpg"


import HeadPhonesImage3Mobile from "../../assets/image-category-page-preview-mobile1.jpg"
import HeadPhonesImage3Tablet from "../../assets/image-category-page-preview-tablet.jpg"
import HeadPhonesImage3Desktop from "../../assets/image-category-page-preview-desktop.jpg"

import GroupImage1Mobile from "../../assets/XX99Category/mobile-xx99-category-image-gallery-1.jpg"
import GroupImage2Mobile from "../../assets/XX99Category/mobile-xx-99-category-image-gallery-2.jpg"
import GroupImage3Mobile from "../../assets/XX99Category/mobile-xx99-category-image-gallery-3.jpg"



// import SpeakerImage1 from "../../assets/image-category-page-preview-speaker-mobile.jpg"
// import SpeakerImage2 from "../../assets/imag e-category-page-preview-speaker2-mobile.jpg"

// import EarphonesImage1 from "../../assets/image-category-page-preview-earphones-mobile.jpg"

const ProductSpecs = [

  { category: "HEADPHONES", product: "XX99 MARK II HEADPHONES",  imageSourceMobile: HeadPhonesImage1Mobile, 
  imageSourceTablet: HeadPhonesImage1Tablet, imageSourceDesktop: HeadPhonesImage1Desktop,
  newProduct: "" , description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. 
  It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.`, 
  features: 
  `Featuring a genuine leather head strap and premium earcup s, these headphones deliver superior comfort for those 
  who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business 
  call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

  The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. 
  It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. 
  Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, 
  cutting-edge technology, and a modern design aesthetic.`,
  GroupImage1Mobile, GroupImage2Mobile, GroupImage3Mobile ,
  
  includes: [ 
    {
      "quantity": 2,
      "item": "Earphone unit"
    },
    {
      "quantity": 6,
      "item": "Multi-size earplugs"
    },
    {
      "quantity": 1,
      "item": "User manual"
    },
    {
      "quantity": 1,
      "item": "USB-C charging cable"
    },
    {
      "quantity": 1,
      "item": "Travel pouch"
    }
  ],
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

export default ProductSpecs