import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KDramaCard from '../../components/Card/Card';
import './DramasList.scss'

function DramasList({ cards }) {
  return (
    <Container>
      <Row>
      {cards.map((card, i) => {
          if (i < 12) return (
            <Col key={i}>
              <KDramaCard card={card}/>
            </Col>
          );
          return false;
        })}
      </Row>
    </Container>
  );
}

export default DramasList;
