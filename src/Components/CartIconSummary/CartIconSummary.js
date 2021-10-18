import "./CartIconSummary.css"
import {useCart, useCartDelete, useCartTotalItemsUpdate} from "../Contexts/CartContext"
import {useState, useEffect} from "react"
import CounterIncrementer from "../CounterIncrementer/CounterIncrementer"
import Button from "../Button/Button"
import {Link} from "react-router-dom"

const className = "CartIconSummary"

const CartIconSummary = ({data}) => {
  const [cartQuantity, setCartQuantity] = useState()
  const deleteCart = useCartDelete()
  const cart = useCart()
  const updateQuantity = useCartTotalItemsUpdate()
  
  let cartTotal = 0
  let vat = cartTotal * .23.toFixed(2)
  let cartItemsTotal = 0
  console.log("carty")

  useEffect (() => {
      setCartQuantity(cartItemsTotal)
      // updateQuantity(cartItemsTotal)
  }, [cartItemsTotal, updateQuantity, cart])

  const removeCart = () => {
    deleteCart([])
    setCartQuantity(0)
  }

  const displayCartItems = () => {

    return cart && cart.map((cartItem, index) => {
      return data && data.map((dataItem) => {
          if(cartItem && dataItem && cartItem.id === dataItem.id) {
            cartTotal = cartTotal + dataItem.price * cartItem.quantity
            vat = vat + (dataItem.price * cartItem.quantity) * .23
            cartItemsTotal = cartItemsTotal + cartItem.quantity
            
          return (
              <div key={index} className={`${className}CartItemContainer`}>
                <div className={`${className}CartItemIndividualContainer`}>                   
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
                </div> 
                <div className={`${className}CartItemQuantity`}> 
                    <CounterIncrementer id={dataItem.id} quantity={cartItem.quantity} />
                    {console.log("cartITemHERE", cartItem.quantity)}
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
            $ {cartTotal}
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