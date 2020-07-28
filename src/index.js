import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';

// Desafio masterblaster -> Criar uma página 404 bonita
const Pagina404 = () => (<div>Erro 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
