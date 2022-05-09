import React from 'react'
import "../../styles/Hero.scss"
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Hero() {
  return (
    <main>
        <div className="hero-flex">
            <ItemListContainer nombre="Apple iPhone 13 Pro Max" desc="iPhone 13 Pro Max. El mayor avance en el sistema de cámaras Pro hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y la mayor duración de batería jamás vista en un iPhone.1"/>
            <ItemListContainer nombre="Samsung Galaxy S22 Ultra" desc="Conocé el Galaxy S22 Ultra, con el poder de Note. El marco pulido, delgado y audaz, rodea la forma extruida para lograr una simetría elegante. Y la cámara lineal, acentuada por anillos de lentes espejados, parece flotar en su lugar."/>
            <ItemListContainer nombre="Moto G60s" desc="Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados."/>
        </div>
    </main>
  )
}

export default Hero