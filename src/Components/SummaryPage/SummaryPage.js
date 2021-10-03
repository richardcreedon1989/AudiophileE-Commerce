import "./SummaryPage.css"
import {useCart} from "../Contexts/CartContext"

const className = "SummaryPage"

const SummaryPage = ({data}) => {

  const cart = useCart()

  let cartTotal = 0
  let vat = cartTotal * .23.toFixed(2)

  const displayCartItems = () => {
      return cart && cart.map((cartItem, index) => {
        return data && data.map((dataItem) => {
            if(cartItem.id === dataItem.id) {
              cartTotal = cartTotal + dataItem.price * cartItem.quantity
              vat = vat + (dataItem.price * cartItem.quantity) * .23
            return (
                <div key={index} className={`${className}CartItemContainer`}>
                    <div className={`${className}ImageContainer`}> 
                        <img className={`${className}Image`} src={dataItem.cartImage} alt="cart-item-preview"/>
                    </div>
                    <div className={`${className}CartItemNamePriceContainer`}> 
                        <div className={`${className}CartItemName`}> 
                            {dataItem.shortName}
                        </div>
                        <div className={`${className}CartItemPrice`}>
                            ${dataItem.price}
                        </div>
                    </div>
                    <div className={`${className}CartItemQuantity`}> 
                        x {cartItem.quantity}
                    </div>
                </div>
            )
            } else {
            return ""
            }
        })
    })
  }

  return (
    <div className={`${className}OuterContainer`}> 
      <div className={`${className}Container`}>
        <h4 className={`${className}Heading`}> 
          SUMMARY
        </h4>
        {displayCartItems()}
        <div className={`${className}TextContainer`}> 
            <span className={`${className}Text`}>
                TOTAL
            </span>
            <span className={`${className}Amount`}>
                ${cartTotal ? cartTotal : 0}
            </span>
        </div>
        <div className={`${className}TextContainer`}> 
            <span className={`${className}Text`}>
                SHIPPING
            </span>
            <span className={`${className}Amount`}>
                $50
            </span>
        </div>
        <div className={`${className}TextContainer`}> 
            <span className={`${className}Text`}>
                VAT(INCLUDED)
            </span>
            <span className={`${className}Amount`}>
                ${vat ? vat : 0}
            </span>
        </div>
        <div className={`${className}TextContainer`}> 
            <span className={`${className}Text`}>
                GRAND TOTAL
            </span>
            <span className={`${className}Amount`}>
                ${cartTotal + 50}
            </span>
        </div>
      </div>
  </div>
  )
}

export default SummaryPage 