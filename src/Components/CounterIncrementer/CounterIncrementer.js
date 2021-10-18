import "./CounterIncrementer.css"
import { useState } from "react"
import { useCartUpdate} from "../Contexts/CartContext"

const CounterIncrementer = ({id, quantity}) => {
  const [count, setCount] = useState(quantity)
  const updateCart = useCartUpdate()

  const increaseCount = () => {
      setCount(count + 1)
      updateCart({quantity: 1 , id})
  }

  const decreaseCount = () =>  {
      count > 0 && setCount(count - 1) 
      count > 0 && updateCart({quantity: -1 , id})
  }

  return (
    <div className="CounterIncrementerButton">
        <div className="CounterIncrementerContainer">
            <div className="CounterIncrementer">
                <span className="CounterIncrementerMinus" onClick={() => decreaseCount()}> - </span>
                <span className="CounterIncrementerNumber"> {count > 0 ? count : 0} </span>
                <span className="CounterIncrementerPlus" onClick={() => increaseCount()}> + </span>
            </div>
        </div>
    </div>
  )
}

export default CounterIncrementer