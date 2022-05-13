import React from 'react'
import "../../styles/Hero.scss"
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Hero() {
  return (
    <main>
        <div className="hero-flex">
            <ItemListContainer />
        </div>
    </main>
  )
}

export default Hero