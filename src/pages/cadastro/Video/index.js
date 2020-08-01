import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroVideo = () => {
  const history = useHistory();
  const { handleChange, values } = useForm({
    title: 'Vídeo Padrão',
    url: 'https://www.youtube.com/watch?v=XqmoLdSszoc',
    category: 'Front End',
  });

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        history.push('/');
      }}
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="url"
          name="title"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="url"
          value={values.category}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
};

export default CadastroVideo;
