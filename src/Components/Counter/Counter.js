import "./Counter.css"
import Button from "../Button/Button"
import { useState } from "react"
import { useCartUpdate} from "../Contexts/CartContext"

const Counter = (props) => {
  const [count, setCount] = useState(0)

  const updateCart = useCartUpdate()
  // set width and height to 100% and control the button size with a div
  return (
    <div className="CounterButton">
      <div className="CounterContainer">
        <div className="Counter">
          <span className="CounterMinus" onClick={() => setCount(count - 1)}> - </span>
          {console.log("params", props.params)}
          <span className="CounterNumber"> {count > 0 ? count : 0} </span>
          <span className="CounterPlus" onClick={() => setCount(count + 1)}> + </span>
        </div>
      </div>
      <div onClick={() => {
        updateCart({quantity: count, id: props.params + 1})
        console.log("params", props.params)
        setCount(0)
        }}>
        <Button text={"ADD TO CART"} />
      </div>
    </div>
  )
}

export default Counter