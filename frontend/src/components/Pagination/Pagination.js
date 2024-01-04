import './Pagination.scss';
import useResize from '../../hooks/useResize';
import { PaginationControl } from 'react-bootstrap-pagination-control';

function DramasPagination({
  dramasPerPage,
  totalDramas,
  onChangePage,
  currentPage,
}) {
  const width = useResize();
  const pageNumbers = [];
  for (let page = 1; page <= Math.ceil(totalDramas / dramasPerPage); page++) {
    pageNumbers.push(page);
  }
  return (
    <section className='pagination-wrapper'>
      <PaginationControl
        page={currentPage}
        between={width < 760 ? 1 : 3}
        total={pageNumbers.length}
        limit={1}
        changePage={(page) => {
          onChangePage(page);
        }}
        ellipsis={1}
      />
    </section>
  );
}

export default DramasPagination;
