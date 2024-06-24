import React, { useState } from 'react';
import './styles.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === ''||  email === '') {
      return setError(true);
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p>
        Valeu {name}! Vamos te avisar assim que tivermos novidades no seu email: {email}.
      </p>
    );
  };

  const handleChangeName = (e) => {
    setError(false);
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setError(false);
    setEmail(e.target.value);
  };

  return (
    <div className='text-section'>
      <p>
        Nos siga em nossas redes sociais!!!
      </p>
      <p>
        Sempre temos novidades e melhorias em nosso site, deixe seu nome e email entraremos em contato
        para enviar novidades e promoções.
      </p>
      <form onSubmit={handleSubmit} className="form-contact">
        <input
          className="input-form"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleChangeName}
        />
        <input
          className="input-form"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <button 
          className="submit-button"
          type="submit"
          disabled={error}
        >
          Enviar
        </button>
        {
          error && (
            <p className='error-message'>
              Por favor, preencha os campos corretamente.
            </p>
          )
        }
      </form>
    </div>
  );
};

export default ContactForm;
