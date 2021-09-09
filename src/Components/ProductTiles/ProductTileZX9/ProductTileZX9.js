import "./ProductTileZX9.css"
import patternCircles from "../../../assets/pattern-circles.svg"
import speakerOverlay from "../../../assets/speaker-preview.png"
import Button from "../../Button/Button"
const className = "ProductTiles"

const ProductTileZX9 = () => {
    return (
        <div >
            <div className={`${className}Container`}> 
                <img className={`${className}ImageZX9Overlay`} src={speakerOverlay} alt="circles" />
                <img className={`${className}ImageZX9`} src={patternCircles} alt="circles" />
                <div className={`${className}ImageZX9TextHeading`}> ZX9 SPEAKER </div>
                <p className={`${className}ImageZX9TextParagraph`}>
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <Button theme="black" />
            </div>
        </div>
    )
}

export default ProductTileZX9