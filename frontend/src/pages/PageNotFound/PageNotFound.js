import './PageNotFound.scss';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ENDPOINT_ROOT } from '../../utils/constants';

function PageNotFound() {
  const navigate = useNavigate();

  function handleGoHome() {
    navigate(ENDPOINT_ROOT);
  }

  return (
    <main>
      <section className="not-found">
        <div className="not-found__text">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__subtitle">Страница не найдена</p>
        </div>
        <Button variant="primary" onClick={handleGoHome}>
        На главную
        </Button>
      </section>
    </main>
  );
}

export default PageNotFound;
