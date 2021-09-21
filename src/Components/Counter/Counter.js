import "./Counter.css"
import Button from "../Button/Button"

const Counter = () => {
  return  (
    <div className="CounterButton">
        <div className="CounterContainer"> 
            <div className="Counter"> 
                <span className="CounterMinus"> - </span> 
                    <span className="CounterNumber"> 0 </span>
                <span className="CounterPlus"> + </span> 
            </div>
        </div>
      <Button />
    </div> 
    )
}

export default Counter