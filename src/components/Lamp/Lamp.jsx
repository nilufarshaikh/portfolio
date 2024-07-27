import "./Lamp.scss";

const Lamp = () => {
  return (
    <div id="lampadario">
      <input type="radio" name="switch" value="on" />
      <input type="radio" name="switch" value="off" />
      <label htmlFor="switch"></label>
      <div id="filo"></div>
    </div>
  );
};

export default Lamp;
