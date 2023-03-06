import React from 'react'
import "./Footer.scss"
import cloudImg from '../../assets/logo.png'
export const Footer = () => {
  return (
    <div className='section-footer'>
      <div>
      Made with <i className="fa-regular fa-keyboard"></i> by DavidSP © 2023
      </div>
      <img src={cloudImg}></img>
    </div>
  )
}
