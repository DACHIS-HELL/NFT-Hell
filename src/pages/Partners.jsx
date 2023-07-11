import React from 'react'
import "../css/partners.css"
import Vector1 from '../images/vector.svg'
import Vector2 from '../images/vector2.svg'
import Vector3 from '../images/vector3.svg'
import Vector4 from '../images/vector4.svg'


const Partners = () => {
  return (
    <section className='sect1 sect2'>
     <img src={Vector1} alt="" />
     <img src={Vector2} alt="" />
     <img src={Vector3} alt="" />
     <img src={Vector4} alt="" />
    </section>
  )
}

export default Partners