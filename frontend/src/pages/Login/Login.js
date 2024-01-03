import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({ onLogin, message }) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  function handleChange(e) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit() {
    onLogin({
      email: values.email,
      password: values.password,
    });
  }
  return (
    <main className="form">
      <Form className="authform">
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
          Войти
        </Button>
      </Form>
    </main>
  );
}

export default Login;
