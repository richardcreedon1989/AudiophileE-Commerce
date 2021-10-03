import "./CartIconSummary.css"
import {useCart} from "../Contexts/CartContext"

const className = "CartIconSummary"

const CartIconSummary = ({data}) => {

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
    <>
    {displayCartItems()}
    </>
  )
}

export default CartIconSummary