import "./ModelImage.css"

const className = "ModelImage"

const ModelImage = () => {
  return (
      <div className={`${className}Container`}>
          <div className={`${className}BackgroundImage`} />
          <div className={`${className}TextContainer`}> 

            <div className={`${className}InnerTextContainer`}> 
                <h2 className={`${className}Heading`}> 
                    BRINGING YOU THE <span className={`${className}Span`}> BEST </span> 
                    AUDIO GEAR 
                </h2>
                <p className={`${className}Paragraph`}> Located at the heart of New York City, Audiophile is the premier store 
                    for high end headphones, earphones, speakers, and audio accessories. 
                    We have a large showroom and luxury demonstration rooms available for you 
                    to browse and experience a wide range of our products. 
                    Stop by our store to meet some of the fantastic people who make Audiophile 
                    the best place to buy your portable audio equipment. 
                </p>
            </div>
            
          </div>
      </div>
  )
}

export default ModelImage