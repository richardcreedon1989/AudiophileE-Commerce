import "../Counter/Counter.css"
import { useState } from "react"
import { useCartUpdate, useCart} from "../Contexts/CartContext"

const CounterIncrementer = ({id, quantity}) => {
  const [count, setCount] = useState(quantity)
  const updateCart = useCartUpdate()
  const cart = useCart()

  // console.log("cart123", cart)

  const increaseCount = () => {
      setCount(count + 1)
      updateCart({quantity: cart.quantity + 1 , id})
      console.log("cart123", cart)
      console.log("cartadasd", id)
  }

  //  ---------- ISSUE WITH CART AND SETTING STATE -------- // 

  /* 
        increaseCount above is failing when updateCart is called as updateCart checks for a duplicate with duplicate function. 

        Duplicate check in cart context (increaseQuantityExistingProduct) is returning three objects, added items 
        twice and the duplicate item with the added quantity so sometimes it works and sometimes it doesnt

        created new context to update the whole array so can try that too
  */
  const decreaseCount = () =>  {
      setCount(count -1)
      // updateCart({quantity: count , id})


  }

  return   (
    <div className="CounterButton">
        <div className="CounterContainer">
            <div className="Counter">
                <span className="CounterMinus" onClick={() => decreaseCount()}> - </span>
                <span className="CounterNumber"> {count > 0 ? count : 0} </span>
                <span className="CounterPlus" onClick={() => increaseCount()}> + </span>
            </div>
        </div>
        {/* <div onClick={() => {
            updateCart({quantity: count, id})
            setCount(0)
            }}>
        </div> */}
    </div>)
}

export default CounterIncrementer