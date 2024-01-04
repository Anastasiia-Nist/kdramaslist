import Pagination from 'react-bootstrap/Pagination';
import './Pagination.scss';

function DramasPagination({ dramasPerPage, totalDramas, onChangePage }) {
  const pageNumbers = [];
  for (let page = 1; page <= Math.ceil(totalDramas / dramasPerPage); page++) {
    pageNumbers.push(page);
  }
  return (
    <section className="pagination-wrapper">
      <Pagination>
        {pageNumbers.map((page) => (
          <Pagination.Item key={page} onClick={() => onChangePage(page)}>
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </section>
  );
}

export default DramasPagination;
