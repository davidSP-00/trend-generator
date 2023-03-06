import React from 'react'
import './Header.scss'
export const Header = () => {
  return (
    <div className='d-flex justify-content-between  header-total' id='header'>
    <div className='logo' >TrendGenerator</div>
    <div className='d-flex justify-content-between menu'>
      <a href="#head">Home</a>
      <a href="#about-me">Sobre la web</a>
      <a href="#generation">Generar Video</a>
      {/* <a href="">Contact</a> */}
    </div>
        </div>
  )
}
