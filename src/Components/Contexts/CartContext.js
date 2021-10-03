import React, {useState, useContext, useEffect} from "react"
// import { isCompositeComponent } from "react-dom/test-utils"

const CartContext = React.createContext()
const CartUpdateContext = React.createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const useCartUpdate = () => {
  return useContext(CartUpdateContext)
}

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([{quantity: 3, id: 4}, {quantity: 3, id: 1}, {quantity: 4, id: 2}])

  const addToCart = (addedItems) => {

    const checkForDuplicates = () => {
      return cart && cart.map((cartItem) => {
        let increaseQuantityExistingProduct = cartItem.id === addedItems.id ? {id: cartItem.id, quantity: cartItem.quantity + addedItems.quantity} : addedItems
        
        let removeDuplicate = cart.filter((item)=> {
          return item.id !== addedItems.id
        })

        let newCart = [...removeDuplicate, increaseQuantityExistingProduct ]
    
        return setCart(newCart)
        })
    } 
    cart.length === 0 ? setCart([...cart, addedItems]) : checkForDuplicates()
  }

  useEffect(() => console.log("cart", cart))

  return (
    <CartContext.Provider value={cart}> 
        <CartUpdateContext.Provider value={addToCart}> 
          {children}
        </CartUpdateContext.Provider >
    </CartContext.Provider>
  )

}
