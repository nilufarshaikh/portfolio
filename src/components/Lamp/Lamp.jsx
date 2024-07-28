import "./Lamp.scss";

const Lamp = ({ isDarkMode }) => {
  return (
    <div className="lamp">
      <input
        type="radio"
        name="switch"
        value="on"
        checked={isDarkMode}
        readOnly
      />
      <input
        type="radio"
        name="switch"
        value="off"
        checked={!isDarkMode}
        readOnly
      />
      <label htmlFor="switch"></label>
      <div className="lamp-wire"></div>
    </div>
  );
};

export default Lamp;
