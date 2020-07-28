import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/devflix.svg'
import './Menu.css'
import Button from '../Button/index'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="DevFlix Logo"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu