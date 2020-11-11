const Scale = (props) => {
  const {scale, setScale} = props;
  const onChange = (e) => {
    const {target:{value = ''} = {}} = e;
    setScale(value);
  };

  return (
    <div className="scale">
      <label>
        <input name="scale" type="radio" value="F" checked={scale === 'F'} onChange={onChange} />
        <span>F</span>
      </label>
      <label>
        <input name="scale" type="radio" value="C" checked={scale === 'C'}  onChange={onChange}/>
        <span>C</span>
      </label>
    </div>
  );
};

export default Scale;