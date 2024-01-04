import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './ModalForm.scss'

function ModalForm({ show, title, buttonText, onSubmit, onClose }) {
  const { values, handleChange, resetForm, isValid } = useFormAndValidation({});
  function handleSubmit() {
    onSubmit({
      name: values.name,
      img: values.img,
      country: values.country,
      year: values.year,
      description: values.description,
      duration: values.duration,
    });
    resetForm();
  }
  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label><span className='label__required'>* </span>Название дорамы</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Название"
                autoFocus
                value={values.name || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ссылка на постер</Form.Label>
              <Form.Control
                name="img"
                type="link"
                placeholder="https://"
                value={values.img || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><span className='label__required'>* </span>Страна</Form.Label>
              <Form.Control
                name="country"
                type="text"
                placeholder="Южная Корея"
                value={values.country || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><span className='label__required'>* </span>Год</Form.Label>
              <Form.Control
                name="year"
                type="text"
                placeholder="2023"
                value={values.year || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Жанр</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Мелодрама, Комедия"
                value={values.description || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><span className='label__required'>* </span>Продолжительность</Form.Label>
              <Form.Control
                name="duration"
                type="text"
                placeholder="Сериал: 16 серий"
                value={values.duration || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit} disabled={!isValid && true}>
            {buttonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;
