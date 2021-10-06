import "./CartIconSummary.css"
import {useCart, useCartDelete} from "../Contexts/CartContext"
import {useState, useEffect} from "react"
import Counter from "../Counter/Counter"
import Button from "../Button/Button"
import {Link} from "react-router-dom"
const className = "CartIconSummary"

const CartIconSummary = ({data}) => {
  const [cartQuantity, setCartQuantity] = useState()
  const deleteCart = useCartDelete()
  const cart = useCart()
  
  let cartTotal = 0
  let vat = cartTotal * .23.toFixed(2)
  let cartItemsTotal = 0
  useEffect (() => {
      setCartQuantity(cartItemsTotal)
  }, [cartItemsTotal])

  

  const removeCart = () => {
    deleteCart([])
    setCartQuantity(0)
  }
  const displayCartItems = () => {

    return cart && cart.map((cartItem, index) => {
      return data && data.map((dataItem) => {
          if(cartItem.id === dataItem.id) {
            cartTotal = cartTotal + dataItem.price * cartItem.quantity
            vat = vat + (dataItem.price * cartItem.quantity) * .23
            cartItemsTotal = cartItemsTotal + cartItem.quantity
          return (
              <div key={index} className={`${className}CartItemContainer`}>
                  <div className={`${className}ImageContainer`}> 
                      <img className={`${className}Image`} src={data ? `${process.env.PUBLIC_URL}${dataItem.cartImage.slice(1)}` : ""} alt="cart-item-preview"/>
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
                      <Counter />
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
    <div className={`${className}CartDeleteContainer`}> 
        <div className={`${className}CartQuantity`}> CART({cartQuantity ? cartQuantity : 0}) </div>
        <div className={`${className}CartDelete`} onClick={() => removeCart()}> Remove all </div>
    </div>
    {displayCartItems()}
    <div className={`${className}TextContainer`}> 
        <span className={`${className}Text`}>
            TOTAL
        </span>
        <span className={`${className}Amount`}>
            $
        </span>
    </div>
    <Link to="/audiophile-ecommerce/CheckoutPage" > 
    <div className={`${className}Button`}> 
            <Button text="CONTINUE" theme="continue"/>      
        </div>
    </Link>
    </>
  )
}

export default CartIconSummary