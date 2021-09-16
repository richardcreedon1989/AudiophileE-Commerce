import "./CategoryTitle.css"

const className = "CategoryTitle"

const CategoryTitle = ({category}) => {
  return <div className={`${className}Heading`}> {category} </div>
}

export default CategoryTitle