import React from 'react'
import Item from '../Item/Item'


const productos = [
    {id:"1", categoria:"celular", nombre:"Apple iPhone 13 Pro Max", precio:10000, stock:20},
    {id:"2", categoria:"celular", nombre:"Samsung Galaxy S22 Ultra", precio:20000, stock:10},
    {id:"3", categoria:"celular", nombre:"Moto G60s", precio:30000, stock:25},
    {id:"4", categoria:"tablet", nombre:"IPhone", precio:20000, stock:40},
    {id:"5", categoria:"tablet", nombre:"IPhone", precio:50000, stock:30},
    {id:"6", categoria:"computadora", nombre:"Notebook Dell", precio:79990, stock:5},
    {id:"7", categoria:"computadora", nombre:"IdeaCentre 3 AIO", precio:80999, stock:10},
]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

function ItemList() {

    getFetch.then (respuesta => console.log(respuesta))
            .catch ((err) => console.log(err))
            .finally(() => console.log("fin de promesa"))


  return (
    productos.map((prod) => 
        
    <Item id={prod.id} nombre={prod.nombre} categoria={prod.categoria} precio={prod.precio} stock={prod.stock} />
    )
  )
}

export default ItemList