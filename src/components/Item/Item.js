import PropTypes from "prop-types";

function Item({ img, keyData, label, className }) {
  return (
    <div className="infos--items">
      <div className={className}>
        <img src={img} alt={keyData} />
      </div>
      <div className="item">
        <p>
          {keyData}
          {label === "Calories" ? "Kcal" : "g"}
        </p>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default Item;

Item.propTypes = {
  img: PropTypes.string.isRequired,
  keyData: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
