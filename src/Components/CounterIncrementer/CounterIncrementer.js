import "./CounterIncrementer.css"

import { useCartUpdate} from "../Contexts/CartContext"

const CounterIncrementer = ({id, quantity}) => {

  const updateCart = useCartUpdate()


  const increaseCount = () => {
    console.log("increase", quantity, id)
      updateCart({quantity: + 1 , id})
  }

  const decreaseCount = () =>  {
    console.log("decrease", quantity, id)

      quantity > 0 && updateCart({quantity: -1 , id})
  }


  return (
    <div className="CounterIncrementerButton">
        <div className="CounterIncrementerContainer">
            <div className="CounterIncrementer">
                <span className="CounterIncrementerMinus" onClick={() => decreaseCount()}> - </span>
                <span className="CounterIncrementerNumber"> {quantity > 0 ? quantity : 0} </span>
                <span className="CounterIncrementerPlus" onClick={() => increaseCount()}> + </span>
            </div>
        </div>
    </div>
  )
}

export default CounterIncrementer