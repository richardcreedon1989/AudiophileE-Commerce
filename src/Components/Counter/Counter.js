import "./Counter.css"
import Button from "../Button/Button"
import { useState } from "react"
import { useCartUpdate} from "../Contexts/CartContext"

const Counter = (props) => {
  const [count, setCount] = useState(0)

  const updateCart = useCartUpdate()

  return (
    <div className="CounterButton">
      <div className="CounterContainer">
        <div className="Counter">
          <span className="CounterMinus" onClick={() => setCount(count - 1)}> - </span>
          <span className="CounterNumber"> {count > 0 ? count : 0} </span>
          <span className="CounterPlus" onClick={() => setCount(count + 1)}> + </span>
        </div>
      </div>
      <div style={{display: "none"}} onClick={() => {
        updateCart({quantity: count, id: props.params})
        setCount(0)
        }}>
        <Button   text={"ADD TO CART"} />
      </div>
    </div>
  )
}

export default Counter