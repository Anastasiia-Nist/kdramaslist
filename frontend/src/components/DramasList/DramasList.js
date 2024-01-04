import * as React from 'react';
import { useState } from 'react';
import useResize from '../../hooks/useResize';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KDramaCard from '../../components/Card/Card';
import './DramasList.scss';
import DramasPagination from '../Pagination/Pagination';

function DramasList({ cards }) {
  const width = useResize();
  const [currentPage, setCurrentPage] = useState(1);
  const [dramasPerPage] = useState(width < 760 ? 6 : 12);
  const indexOfLastDramas = currentPage * dramasPerPage;
  const indexOfFirstDramas = indexOfLastDramas - dramasPerPage;
  const currentDramas = cards.slice(indexOfFirstDramas, indexOfLastDramas);

  function handleChangePage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <Container>
        {cards.length === 0 ? (
          <p>Нет сохранённых дорам</p>
        ) : (
          <Row>
            {currentDramas.map((card, i) => {
              return (
                <Col key={i}>
                  <KDramaCard card={card} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
      <DramasPagination
        dramasPerPage={dramasPerPage}
        totalDramas={cards.length}
        onChangePage={handleChangePage}
        currentPage={currentPage}
      ></DramasPagination>
    </>
  );
}

export default DramasList;
