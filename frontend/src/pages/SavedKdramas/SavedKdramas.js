import { useEffect, useState } from 'react';
import DramasList from '../../components/DramasList/DramasList';
import ModalForm from '../../components/ModalForm/ModalForm';
import mainApi from '../../utils/MainApi';
import Button from 'react-bootstrap/Button';
import './SavedKdramas.scss';

function SavedKdramas() {
  const [savedDramas, setSavedDramas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(values) {
    setIsLoading(true);
    mainApi
      .addDrama(values)
      .then(() => {
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }
  function getSavedDramas() {
    mainApi
      .getSavedDramas()
      .then((data) => {
        setSavedDramas(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getSavedDramas();
  }, []);

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
