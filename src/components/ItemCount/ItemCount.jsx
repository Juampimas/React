import React, { useState } from "react"
import "../../styles/ItemCount.scss"
import ItemList from "../ItemList/ItemList";


function ItemCount(props) {
    
    

    

    function initialStock() {
        if(props.stock > 0){
            return 1
        }
        else{
            return 0
        }
    }

    const [count, setCount] = useState(initialStock())
    

    function onAdd(){
        if(count < props.stock){
            setCount(count + 1)
        }
        else{
           return count
        }
    }

    function onRemove(){
        if(count!=initialStock()){
            setCount(count - 1)  
        }
        else{
           return initialStock()
        }
    }
  return (
    <div>
        <button className="btn" onClick={onRemove}>-</button>
        {count}
        <button className="btn" onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCount