
import "./CategoryProductList.css"
import IndividualCategoryProduct from "../IndividualCategoryProduct/IndividualCategoryProduct"

// import { useParams } from "react-router"

// const className = "CategoryProductList"

const CategoryProductList = ({data, params}) => {

  const displayCategoryProducts = () => {
    return data.map((item, index) => {
    if(item.category === params.slice(1).toLowerCase()) {
      return <IndividualCategoryProduct data={data} index={index} key={index}/>
    }
  })
}

  return (
    <>
    {data && displayCategoryProducts()}
    </>
  )
}

export default CategoryProductList