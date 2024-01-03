import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/spring_sakura_flower.svg';
import {
  ENDPOINT_ROOT,
  ENDPOINT_SAVED_KDRAMAS,
  ENDPOINT_KDRAMAS,
  ENDPOINT_PROFILE,
  ENDPOINT_SIGNUP,
  ENDPOINT_SIGNIN,
} from '../../utils/constants';
import './Header.scss';

function Header({ loggedIn }) {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <Navbar
        expand="lg"
        className="header__container"
        sticky="top"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand href={ENDPOINT_ROOT}>
            <img
              alt="На главную"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <h1 className="header__title">Дневник дорамщика</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {loggedIn ? (
            <Navbar.Collapse className="justify-content-end">
              <Nav className="justify-content-end" activeKey={pathname}>
                <Nav.Link href={ENDPOINT_KDRAMAS}>Топ дорам</Nav.Link>
                <Nav.Link href={ENDPOINT_SAVED_KDRAMAS}>
                  Сохранённые дорамы
                </Nav.Link>
                <Nav.Link href={ENDPOINT_PROFILE}>Профиль</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse className="justify-content-end">
              <Nav className="justify-content-end" activeKey={pathname}>
                <Nav.Link href={ENDPOINT_SIGNIN}>Войти</Nav.Link>
                <Nav.Link href={ENDPOINT_SIGNUP}>Зарегистрироваться</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
      <h1 className="header__title-mobile">Дневник дорамщика</h1>
    </header>
  );
}
export default Header;
