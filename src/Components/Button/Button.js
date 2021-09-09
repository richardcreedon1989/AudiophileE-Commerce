import "./Button.css"

const Button = ({theme}) => {
    
    const themeSelector = () => {
        if(theme && theme === "orange") {
            return "btnProductInfoOrangeTheme"
        } else if (theme === "black") {
            return "btnProductInfoBlackTheme"
        } else {
            return "btnProductInfoTransparentTheme"
        }
    }

    return(
        <button className={`${themeSelector()}`}> 
            SEE PRODUCT
        </button> 
    )
}

export default Button