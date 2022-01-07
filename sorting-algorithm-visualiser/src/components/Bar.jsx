const Bar = ({ value, column }) => {
  return (
    <div className='bar bar--mod'>
      <div
        className='bar--status-inactive'
        id={`column-${column}`}
        style={{ height: `${value}%` }}
      ></div>
    </div>
  );
};

export default Bar;
