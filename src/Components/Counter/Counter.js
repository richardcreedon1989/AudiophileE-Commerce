import "./Counter.css"
import Button from "../Button/Button"
import { useState } from "react"

const Counter = (props) => {
  const [count, setCount] = useState(0)
  const [basket, setBasket] = useState(0)

  const addToBasket = () => {
    props.addToBasket()
  }

  return (
    <div className="CounterButton">
      <div className="CounterContainer">
        <div className="Counter">
          <span className="CounterMinus" onClick={() => setCount(count - 1)}> - </span>
          <span className="CounterNumber"> {count > 0 ? count : 0} </span>
          <span className="CounterPlus" onClick={() => setCount(count + 1)}> + </span>
        </div>
      </div>
      <div onClick={() => {
        setBasket(count)
        setCount(0)
        }}>
        <Button  text={"ADD TO CART"} />
      </div>
      {basket}
    </div>
  )
}

export default Counter