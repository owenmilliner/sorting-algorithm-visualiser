const Bar = ({ value }) => {
  return (
    <div className='barParent'>
      <div className='barChild' style={{ height: `${value}%` }}></div>
    </div>
  );
};

export default Bar;
