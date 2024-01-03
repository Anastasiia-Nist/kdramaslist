import { useState, useContext } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Profile.scss';

function Profile({onLogout, onUpdateProfile}) {
  const { name, email } = useContext(CurrentUserContext);
  const [values, setValues] = useState({
    name: name,
    email: email,
  });
  function handleChange(e) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit() {
    onUpdateProfile({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <main className="profile">
      <section className="profile__container">
        <h1 className="profile__title">Привет, {name}!</h1>
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
            disabled
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
            disabled
          />
        </Form.Group>
        <Button variant="secondary" onClick={handleSubmit} disabled>
        Редактировать профиль
      </Button>
      </Form>
      </section>
      <Button variant="primary" onClick={onLogout}>
        Выйти
      </Button>
    </main>
  );
}
export default Profile;
