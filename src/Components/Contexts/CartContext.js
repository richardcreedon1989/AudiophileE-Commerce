import React, {useState, useContext, useEffect} from "react"
// import { isCompositeComponent } from "react-dom/test-utils"

const CartContext = React.createContext()
const CartUpdateContext = React.createContext()
const CartDeleteContext = React.createContext()
const CartUpdateContextArray = React.createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const useCartUpdate = () => {
  return useContext(CartUpdateContext)
}

export const useCartDelete = () => {
  return useContext(CartDeleteContext)
}

export const useCartUpdateArray = () => {
  return useContext(CartUpdateContextArray)
}

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([{quantity: 3, id: 4}, {quantity: 3, id: 1}, {quantity: 4, id: 2}])

  const addToCart = (addedItems) => {
    const checkForDuplicates = () => {
      return cart && cart.map((cartItem) => {
        let increaseQuantityExistingProduct = cartItem.id === addedItems.id && {id: cartItem.id, quantity: cartItem.quantity + addedItems.quantity}
          console.log("increased", increaseQuantityExistingProduct)
        let removeDuplicate = cart.filter((item)=> {
          return item.id !== addedItems.id
        })

        let test = increaseQuantityExistingProduct === true ? increaseQuantityExistingProduct : addedItems
        let newCart = [...removeDuplicate, test ]
        return setCart(newCart)
        })
    } 
    cart.length === 0 ? setCart([...cart, addedItems]) : checkForDuplicates()
  }

  const deleteCart = () => {
    setCart([])
  }

  const updateCartArray = (updatedArray) => {
    setCart([...updatedArray])
  }

  useEffect(() => console.log("cartUseEffect", cart), [cart])

  return (
    <CartContext.Provider value={cart}> 
        <CartUpdateContext.Provider value={addToCart}> 
        <CartDeleteContext.Provider value={deleteCart}> 
        <CartUpdateContextArray.Provider value={updateCartArray}> 
            {children}
        </CartUpdateContextArray.Provider >
        </CartDeleteContext.Provider >
        </CartUpdateContext.Provider >
    </CartContext.Provider>
  )
}
