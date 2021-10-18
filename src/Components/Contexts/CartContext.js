import React, {useState, useContext, useEffect} from "react"
// import { isCompositeComponent } from "react-dom/test-utils"

const CartContext = React.createContext()
const CartUpdateContext = React.createContext()
const CartDeleteContext = React.createContext()
const CartUpdateTotalItemsContext = React.createContext()
// const CartUpdateContextArray = React.createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const useCartUpdate = () => {
  return useContext(CartUpdateContext)
}

export const useCartDelete = () => {
  return useContext(CartDeleteContext)
}

export const useCartTotalItemsUpdate = () => {
  return useContext(CartUpdateTotalItemsContext)

}
// export const useCartUpdateArray = () => {
//   return useContext(CartUpdateContextArray)
// }

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([{quantity: 3, id: 1}, {quantity: 3, id: 2}, {quantity: 4, id: 3}])
  const [cartQuantity, setCartQuantity] = useState()

  const addToCart = (addedItems) => {
    const checkForDuplicates = () => {
    let itemsToBeAdded
    return cart && cart.map((cartItem) => {
      console.log("cartItem", cartItem)
      if(cartItem && addedItems && cartItem.id !== addedItems.id) {
      } else {
          itemsToBeAdded = {id: cartItem.id, quantity: cartItem.quantity + addedItems.quantity} 
      }
      let removeDuplicate = cart.filter((item)=> {
        return item && addedItems && item.id !== addedItems.id
      })
      let newCart = [...removeDuplicate, itemsToBeAdded ].sort(function(a,b) {return a.id - b.id})
      return setCart(newCart)
      })
    } 
    // let newCartNoDuplicates = [...cart, addedItems].sort(function(a,b) {return a.id - b.id})
    cart.length === 0 ? setCart(addedItems) : checkForDuplicates()
  }

  const deleteCart = () => {
    setCart([])
  }

  // const updateCartArray = (updatedArray) => {
  //   setCart([...updatedArray])
  // }
  
  const updateCartTotalItemsQUantity = () => {
    setCartQuantity(prevState => prevState + 1)
  }

  useEffect(() => console.log("cartUseEffect", cart), [cart])

  return (
    <CartContext.Provider value={cart}> 
        <CartUpdateContext.Provider value={addToCart}> 
        <CartDeleteContext.Provider value={deleteCart}> 
        <CartUpdateTotalItemsContext.Provider value={updateCartTotalItemsQUantity}> 
            {children}
        </CartUpdateTotalItemsContext.Provider >
        </CartDeleteContext.Provider >
        </CartUpdateContext.Provider >
    </CartContext.Provider>
  )
}
