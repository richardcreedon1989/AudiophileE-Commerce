
import CategoryTitle from "../CategoryTitle/CategoryTitle"
import Header from "../Header/Header"
import IndividualItemList from "../ShopItemList/IndividualItem/IndividualItem"
import ModelImage from "../ModelImage/ModelImage"
import Footer from "../Footer/Footer"
import "../../App.css"
import CategoryProductList from "../CategoryProductList/CategoryProductList"

const CategoryPage = () => {
  return (

      <div> 
        <Header color="black"/>
        <hr className="hrDesktop" />
        <CategoryTitle category="HEADPHONES"/>  
        <div className="container-padding"> 
          <CategoryProductList category="HEADPHONES" newProduct="NEW PRODUCT"/>
          <IndividualItemList />
          <ModelImage />
        </div>
        <Footer />
      </div>

  )
}

export default CategoryPage