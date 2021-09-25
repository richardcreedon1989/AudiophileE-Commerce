
import CategoryTitle from "../CategoryTitle/CategoryTitle"
import Header from "../Header/Header"
import IndividualItemList from "../ShopItemList/IndividualItem/IndividualItem"
import ModelImage from "../ModelImage/ModelImage"
import Footer from "../Footer/Footer"
import "../../App.css"
import CategoryProductList from "../CategoryProductList/CategoryProductList"
import {useParams} from "react-router-dom"
const CategoryPage = ({data}) => {
  const params = useParams()
  return (
      <div> 
          <Header color="black"/>
          <hr className="hrDesktop" />
          <CategoryTitle category={params.Product}/>  
          <div className="container-padding"> 
            <CategoryProductList data={data} params={params.Product} category={params.Product} newProduct="NEW PRODUCT"/>
            <IndividualItemList />
            <ModelImage />
          </div>
          <Footer />
      </div>
  )
}

export default CategoryPage