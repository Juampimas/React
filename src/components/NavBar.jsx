import logo from '../img/Recurso 1.png';

function NavBar() {
    return(
        <div className="navbar">
            <img src={logo} alt="logo" />
            <ul>
                <li><a href="celulares">celulares</a></li>
                <li><a href="tablets">tablets</a></li>
                <li><a href="computadoras">computadoras</a></li>
                <li><a href="consolas">consolas</a></li>
                <li><a href="televisores">televisores</a></li>
            </ul>
            <div className="redes-sociales">
                
            </div>
        </div>
    )
}

export default NavBar 