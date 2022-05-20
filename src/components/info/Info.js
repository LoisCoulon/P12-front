import apple from "../../assets/apple.png";
import cheeseburger from "../../assets/cheeseburger.png";
import chicken from "../../assets/chicken.png";
import energy from "../../assets/energy.png";
import PropTypes from "prop-types";
import Item from "../Item/Item";

function Info({ cal, prot, glu, lip }) {
  return (
    <div className="infos">
      <Item
        img={energy}
        className="items--img red"
        keyData={cal}
        label="Calories"
      ></Item>
      <Item
        img={chicken}
        className="items--img blue"
        keyData={prot}
        label="Protéines"
      ></Item>

      <Item
        img={apple}
        className="items--img yellow"
        keyData={glu}
        label="Glucides"
      ></Item>
      <Item
        img={cheeseburger}
        className="items--img rose"
        keyData={lip}
        label="Lipides"
      ></Item>
    </div>
  );
}

export default Info;

Info.propTypes = {
  cal: PropTypes.number.isRequired,
  prot: PropTypes.number.isRequired,
  glu: PropTypes.number.isRequired,
  lip: PropTypes.number.isRequired,
};
