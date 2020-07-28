import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

const CadastroVideo = () => {
  return (
    <PageDefault>
      <h1>Página de Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria">
       Cadastrar categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo