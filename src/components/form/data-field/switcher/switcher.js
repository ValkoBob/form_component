import './styles.scss';

const Switcher = ({onChange}) => {
  const valueChanged = (e) => {
    onChange(e.target.checked);
  }
  return (
    <label className="switch">
      <input type="checkbox" onChange={valueChanged}/>
      <span className="slider"></span>
    </label>
  )
}

export default Switcher;