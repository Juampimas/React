import React, { useState } from "react"
import Carrito from "../CartWidget/CartWidget"
import "../../styles/ItemListContainer.scss"
import ItemCount from "../ItemCount/ItemCount"
import Item from "../Item/Item"
import ItemList from "../ItemList/ItemList"

function ItemListContainer() {
    return(
        <ItemList />
    )
}

export default ItemListContainer