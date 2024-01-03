import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import CurrentUserContext from './context/CurrentUserContext';
import { ProtectedRouteElement } from './components/ProtectedRoute/ProtectedRoute';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Kdramas from './pages/Kdramas/Kdramas';
import SavedKdramas from './pages/SavedKdramas/SavedKdramas';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import mainApi from './utils/MainApi';
import authApi from './utils/AuthApi';

import {
  ENDPOINT_ROOT,
  ENDPOINT_SIGNIN,
  ENDPOINT_SIGNUP,
  ENDPOINT_SAVED_KDRAMAS,
  ENDPOINT_KDRAMAS,
  ENDPOINT_PROFILE,
} from './utils/constants';

function App() {
  // авторизация и регистрация пользователя
  const navigate = useNavigate();
  const jwt = localStorage.getItem('jwt');
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') ?? false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  );
  const [message, setMessage] = useState('');
  //  топ дорам
  const [topDramas, setTopDramas] = useState([]);
  const [savedDramas, setSavedDramas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // auth
  function handleRegister(data) {
    setIsLoading(true);
    authApi
      .register(data)
      .then((res) => {
        setMessage('');
        handleLogin(data);
      })
      .catch((err) => {
        if (err === 409)
          setMessage('Пользователь с таким email уже существует!');
        else setMessage('Ошибка регистрации');
      })
      .finally(() => setIsLoading(false));
  }

  function handleLogin(data) {
    setIsLoading(true);
    authApi
      .authorize(data.email, data.password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        localStorage.setItem('isLoggedIn', true);
        setCurrentUser(data);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        if (err === 404) setMessage('Пользователь не найден!');
        if (err === 401) setMessage('Неверный email или пароль');
        else setMessage('Ошибка авторизации');
      })
      .finally(() => setIsLoading(false));
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('savedDramas');
    localStorage.removeItem('user');
    navigate(ENDPOINT_ROOT);
  }

  function getTopDramas() {
    setIsLoading(true);
    mainApi
      .getTopDramas()
      .then((data) => {
        setTopDramas(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }
  function getSavedDramas() {
    mainApi
      .getSavedDramas(currentUser.id)
      .then((data) => {
        localStorage.setItem('savedDramas', JSON.stringify(data));
        setSavedDramas(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    if (jwt && isLoggedIn) {
      getTopDramas();
      getSavedDramas();
    }
  }, [jwt, isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={isLoggedIn} />
        <Routes>
          <Route path={ENDPOINT_ROOT} element={<Home />} />
          <Route
            path={ENDPOINT_SIGNUP}
            element={
              isLoggedIn ? (
                <Navigate to={ENDPOINT_ROOT} replace />
              ) : (
                <Register onRegister={handleRegister} message={message} />
              )
            }
          />
          <Route
            path={ENDPOINT_SIGNIN}
            element={
              isLoggedIn ? (
                <Navigate to={ENDPOINT_ROOT} replace />
              ) : (
                <Login onLogin={handleLogin} message={message} />
              )
            }
          />
          <Route
            path={ENDPOINT_PROFILE}
            element={<Profile onLogout={handleLogout} />}
          />
          <Route
            path={ENDPOINT_KDRAMAS}
            element={
              <ProtectedRouteElement
                element={Kdramas}
                topDramas={topDramas}
                loggedIn={isLoggedIn}
                loading={isLoading}
              />
            }
          />
          <Route
            path={ENDPOINT_SAVED_KDRAMAS}
            element={
              <ProtectedRouteElement
                element={SavedKdramas}
                savedDramas={savedDramas}
                onSavedDramas={getSavedDramas}
                loggedIn={isLoggedIn}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
