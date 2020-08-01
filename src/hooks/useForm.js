import { useState } from 'react';

function useForm(initialValues) { // custom hook - vai servir para vários formulários
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

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
