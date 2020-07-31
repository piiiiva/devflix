import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    categoryName: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // [] faz virar um valor dinâmico

    });
  }

  function handleChange(infosDoEvento) {
    const inputAttribute = infosDoEvento.target.getAttribute('name');
    const { value } = infosDoEvento.target; // infosDoEvento.target.getAttribute

    setValue(
      inputAttribute,
      value,
    );
  }

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categories';
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
        {values.categoryName}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();

        setCategories([
          ...categories,
          values,
        ]);

        setValues(initialValues);
      }}
      >

        {/* State */}
        <FormField
          label="Nome da Categoria"
          type="text"
          name="categoryName"
          value={values.categoryName}
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
          <li key={`${category.categoryName}`}>
            {category.categoryName}
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
