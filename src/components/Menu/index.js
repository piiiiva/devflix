import React from 'react'
import Logo from '../../assets/img/devflix.svg'
import './Menu.css'
import Button from '../Button/index'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="DevFlix Logo"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu