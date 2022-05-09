import React from "react"
import Carrito from "../CartWidget/CartWidget"
import "../../styles/ItemListContainer.scss"


function ItemListContainer(props) {
    return(
        <div className="card">
            <div className="card-body">
                <h1>{props.nombre}</h1>
                <p>{props.desc}</p>
                <Carrito />
            </div>
        </div>
    )
}

export default ItemListContainer