import "./CategoryTitle.css"

const className = "CategoryTitle"

const CategoryTitle = ({category}) => {
  return <div className={`${className}Heading`}> {category.slice(1)} </div>
}

export default CategoryTitle