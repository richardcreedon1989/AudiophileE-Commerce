import "./Button.css"

const Button = ({theme, text}) => {
    
    const themeSelector = () => {
        if(theme && theme === "orange") {
            return "btnProductInfoOrangeTheme"
        } else if (theme === "black") {
            return "btnProductInfoBlackTheme"
        } else if (theme === "continue") {
            return "btnProductInfoOrangeThemeContinue"
        } else {
            return "btnProductInfoTransparentTheme"
        }
    }

    return(
        <button className={`${themeSelector()}`}> 
            {text ? text : "SEE PRODUCT"}
        </button> 
    )
}

export default Button