/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

const ErrorSpan = styled.span`
  color: #d93025;
  font-size: 16px;
  `;

const CadastroVideo = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title); // nao entendi essa sintaxe

  const formik = useForm({
    initialValues: {
      title: '',
      url: 'https://google.com',
      category: categoryTitles,
    },
    validate(values) {
      const errors = {};

      // const gettingCategories = [
      //   {
      //     category: 'teste',
      //   },
      //   {
      //     category: 'teste2',
      //   },
      // ];

      if (values.title.length < 2) {
        errors.title = 'Por favor, insira um título com mais caracteres';
      }

      if (categories.filter((category) => category.tittle === values.category)) {
        errors.category = 'Por favor, insira uma categoria já cadastrada';
      }

      return errors;
    },
  });

  useEffect(() => {
    categoriesRepository
      .getAll() // buscando as categorias do servidor
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        // eslint-disable-next-line arrow-body-style
        const choosedCategory = categories.find((category) => {
          return category.title === formik.values.category;
        });

        // videosRepository.create({
        //   title: formik.values.title,
        //   url: formik.values.url,
        //   categoryId: choosedCategory.id,
        // })
        //   .then(() => {
        //     console.log('Cadastro com sucesso!');
        //     history.push('/');
        //   });

        formik.validateValues(formik.values);
      }}
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.errors.title && <ErrorSpan>{formik.errors.title}</ErrorSpan>}

        <FormField
          label="URL"
          type="url"
          name="url"
          value={formik.values.url}
          onChange={formik.handleChange}
        />
        {formik.errors.url && <ErrorSpan>{formik.errors.url}</ErrorSpan>}

        <FormField
          label="Categoria"
          type="text"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          suggestions={categoryTitles}
        />
        {formik.errors.category && <ErrorSpan>{formik.errors.category}</ErrorSpan>}

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
