import React, { useState } from "react"
import Carrito from "../CartWidget/CartWidget"
import "../../styles/ItemListContainer.scss"
import ItemCount from "../ItemCount/ItemCount"


function ItemListContainer(props) {
    return(
        <div className="card">
            <div className="card-body">
                <h1>{props.nombre}</h1>
                <p>{props.desc}</p>
                <div className="flex-btns">
                    <ItemCount />
                    <Carrito />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer