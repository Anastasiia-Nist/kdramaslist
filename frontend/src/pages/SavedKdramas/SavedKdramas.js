import { useState, useContext } from 'react';
import DramasList from '../../components/DramasList/DramasList';
import ModalForm from '../../components/ModalForm/ModalForm';
import mainApi from '../../utils/MainApi';
import Button from 'react-bootstrap/Button';
import CurrentUserContext from '../../context/CurrentUserContext';
import './SavedKdramas.scss';

function SavedKdramas({savedDramas, onSavedDramas}) {
  const { id } = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(values) {
    setIsLoading(true);
    mainApi
      .addDrama({id, ...values})
      .then((data) => {
        console.log(data);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        onSavedDramas();
      });
  }


  return (
    <main className="dramas-saved">
      <div className="dramas-saved_btn">
        <Button variant="primary" onClick={handleShow}>
          Добавить дораму
        </Button>
      </div>
      <ModalForm
        title="Добавить дораму"
        buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
        show={show}
        onSubmit={handleSubmit}
        onClose={handleClose}
      ></ModalForm>
      <DramasList cards={savedDramas} />
    </main>
  );
}
export default SavedKdramas;
