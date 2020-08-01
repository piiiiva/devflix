import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://pivaflix.herokuapp.com/categories';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategories([
          ...resposta,
        ]);
      });
  }, []); // [] é quando queremos que esse efeito seja carregado -> vazio = 1 vez;

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.title}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();

        setCategories([
          ...categories,
          values,
        ]);

        clearForm(initialValues);
      }}
      >

        {/* State */}
        <FormField
          label="Título da Categoria"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.title}`}>
            {category.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
