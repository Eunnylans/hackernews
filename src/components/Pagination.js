import Pagination from 'react-bootstrap/Pagination';

function AdvancedExample() {
  return (
    <Pagination >
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item >{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item >{6}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default AdvancedExample;