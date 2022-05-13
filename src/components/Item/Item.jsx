import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Carrito from '../CartWidget/CartWidget'

function Item(props) {
  return (
    <div className="card" key={props.id}>
        <div className="card-body">
            <h1>{props.nombre}</h1>
            <p>Categoria: {props.categoria}</p>
            <p>Precio: ${props.precio}</p>
            <p>Stock: {props.stock}</p>
            <div className="flex-btns">
                <ItemCount />
                <Carrito />
            </div>
        </div>
    </div>
  )
}

export default Item