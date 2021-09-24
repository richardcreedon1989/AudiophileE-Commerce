
import firstMobile from "../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg"
import firstTablet from "../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg"
import firstDesktop from "../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg"

import secondMobile from "../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg"
import secondTablet from "../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg"
import secondDesktop from "../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg"

import thirdMobile from "../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg"
import thirdTablet from "../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg"
import thirdDesktop from "../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg"



export const imageSizer = (windowSize) => {
  if(windowSize <= 600) {
    return firstMobile
  } else if (windowSize <= 1400) {
    return firstTablet
  } else {
    return firstDesktop
  }
} 

export const imageSizerTwo = (windowSize) => {
  if(windowSize <= 600) {
    return secondMobile
  } else if (windowSize <= 1400) {
    return secondTablet
  } else {
    return secondDesktop
  }
} 


export const imageSizerThree = (windowSize) => {
  if(windowSize <= 600) {
    return thirdMobile
  } else if (windowSize <= 1400) {
    return thirdTablet
  } else {
    return thirdDesktop
  }
} 