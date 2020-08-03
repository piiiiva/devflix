import { useState } from 'react';

function useForm({
  initialValues,
  validate,
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // [] faz virar um valor dinâmico
    });
  }

  function handleChange(infosDoEvento) {
    const inputAttribute = infosDoEvento.target.getAttribute('name');
    const { value } = infosDoEvento.target;

    setValue(
      inputAttribute,
      value,
    );

    validateValues(values);
  }

  function clearForm() {
    setValues(initialValues);
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return {
    values,
    handleChange,
    clearForm,
    errors,
    setErrors,
    validateValues,
  };
}

export default useForm;
