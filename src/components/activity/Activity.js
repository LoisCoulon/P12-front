import oval from "../../assets/Oval.png";
import ovalRed from "../../assets/Oval_red.png";

function Activity() {
  return (
    <div className="activity">
      <h2>Activité quotidienne</h2>
      <div className="legend">
        <img src={oval} alt="black" />
        <span>Poids (kg)</span>
        <img src={ovalRed} alt="red" />
        <span>Calories brûlées (kCal)</span>
      </div>
    </div>
  );
}
export default Activity;
