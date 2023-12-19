import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Kdramas from './pages/Kdramas/Kdramas';
import SavedKdramas from './pages/SavedKdramas/SavedKdramas';
import mainApi from './utils/MainApi';

import {
  ENDPOINT_ROOT,
  ENDPOINT_SIGNIN,
  ENDPOINT_SIGNUP,
  ENDPOINT_SAVED_KDRAMAS,
  ENDPOINT_KDRAMAS,
  ENDPOINT_PROFILE,
} from './utils/constants';

function App() {
  const [topDramas, setTopDramas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getTopDramas() {
    setIsLoading(true);
    mainApi
      .getTopDramas()
      .then((data) => {
        setTopDramas([...data]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getTopDramas();
  }, []);

  return (
    <>
      <Header loggedIn={true} />
      <Routes>
        <Route path={ENDPOINT_ROOT} element={<Home />} />
        <Route path={ENDPOINT_SIGNUP} element={<Register />} />
        <Route path={ENDPOINT_SIGNIN} element={<Login />} />
        <Route path={ENDPOINT_PROFILE} element={<Profile />} />
        <Route
          path={ENDPOINT_KDRAMAS}
          element={<Kdramas topDramas={topDramas} loading={isLoading}/>}
        />
        <Route path={ENDPOINT_SAVED_KDRAMAS} element={<SavedKdramas />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
