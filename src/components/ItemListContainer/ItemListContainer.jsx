import "../styles/ItemListContainer.css"

function ItemListContainer(nombre, desc) {
    return(
        <div className="card">
            <div className="card-body">
                <h1>{nombre}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ItemListContainer