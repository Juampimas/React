import React, { useState } from "react"
import "../../styles/ItemCount.scss"

function ItemCount() {
    const [count, setCount] = useState(0)
    let cantidad= 0;

    function añadir(){
        setCount(count + 1)
    }

    function remover(){
        if(count!=0){
            setCount(count - 1)  
        }
        else{
            cantidad=0
        }
    }
  return (
    <div>
        <button className="btn" onClick={remover}>-</button>
        {count}
        <button className="btn" onClick={añadir}>+</button>
    </div>
  )
}

export default ItemCount