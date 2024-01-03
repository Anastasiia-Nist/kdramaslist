import * as React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../context/CurrentUserContext';
import './Card.scss';

export default function KDramaCard({ card }) {
  const savedDramas = JSON.parse(localStorage.getItem('savedDramas'));
  const filter = savedDramas.filter((i) => i.name === card.name);
  let d = filter.length !== 0 ? true : false;
  const { id } = useContext(CurrentUserContext);
  const { pathname } = useLocation();
  function savedDrama(card) {
    mainApi
      .addDrama({ id, ...card })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleSubmit(e) {
    savedDrama(card);
    e.target.disabled = true;
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card.img} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{card.country}</ListGroup.Item>
        <ListGroup.Item>{card.year}</ListGroup.Item>
        <ListGroup.Item>{card.duration}</ListGroup.Item>
      </ListGroup>
      {pathname === '/kdramas' && (
        <Card.Body>
          <Button type="submit" onClick={handleSubmit} disabled={d}>
            {'Добавить в просмотренные'}
          </Button>
        </Card.Body>
      )}
      {pathname === '/saved-kdramas' && (
        <Button type="submit" disabled>{'Удалить'}</Button>
      )}
    </Card>
  );
}
