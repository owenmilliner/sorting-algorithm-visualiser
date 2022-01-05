const Bar = ({ value, column }) => {
  return (
    <div className='barParent'>
      <div
        className='barChild'
        id={`column-${column}`}
        style={{ height: `${value}%` }}
      ></div>
    </div>
  );
};

export default Bar;
