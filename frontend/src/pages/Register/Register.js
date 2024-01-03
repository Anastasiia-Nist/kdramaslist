import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register({ onRegister, message }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  function handleChange(e) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit() {
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }
  return (
    <main className="form">
      <Form className="authform">
        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder=""
            autoFocus
            value={values.name || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder=""
            value={values.email || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            name="password"
            type="text"
            placeholder=""
            value={values.password || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <p>{message}</p>
        <Button variant="primary" onClick={handleSubmit}>
          Зарегистрироваться
        </Button>
      </Form>
    </main>
  );
}

export default Register;
