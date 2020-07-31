import React, { useState } from 'react';
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

      <ul>
        {categories.map((category) => (
          <li key={`${category.nome}`}>
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
