import { useEffect, useState } from 'react';
import DramasList from '../../components/DramasList/DramasList';
import mainApi from '../../utils/MainApi';

function SavedKdramas() {
  const [savedDramas, setSavedDramas] = useState([]);
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
      <main className='dramas-saved'>
        <DramasList cards={savedDramas}/>
      </main>
    );
}
export default SavedKdramas;
