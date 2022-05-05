import apple from "../../assets/apple.png";
import cheeseburger from "../../assets/cheeseburger.png";
import chicken from "../../assets/chicken.png";
import energy from "../../assets/energy.png";

function Info({ cal, prot, glu, lip }) {
  return (
    <div className="infos">
      <div className="infos--items">
        <div className="items--img">
          <img src={energy} alt="flamme" />
        </div>
        <div className="item">
          <p>{cal}kCal</p>
          <span>Calories</span>
        </div>
      </div>
      <div className="infos--items">
        <div className="items--img">
          <img src={chicken} alt="poulet" />
        </div>
        <div className="item">
          <p>{prot}g</p>
          <span>Proteines</span>
        </div>
      </div>
      <div className="infos--items">
        <div className="items--img">
          <img src={apple} alt="pomme" />
        </div>
        <div className="item">
          <p>{glu}g</p>
          <span>Glucides</span>
        </div>
      </div>
      <div className="infos--items">
        <div className="items--img">
          <img src={cheeseburger} alt="cheeseburger" />
        </div>
        <div className="item">
          <p>{lip}g</p>
          <span>Lipides</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
