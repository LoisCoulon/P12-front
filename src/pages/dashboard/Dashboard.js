import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { getList } from "../../services/mockServices";
import Hello from "../../components/hello/Hello";
import Info from "../../components/info/Info";
import Activity from "../../components/activity/Activity";
import Duration from "../../components/duration/Duration";
import RadarComponent from "../../components/radar/RadarComponent";
import Score from "../../components/score/Score";

function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getList().then((items) => {
      let datas = items.find((item) => item.id === parseFloat(id));
      setData(datas);
    });
  }, [id]);

  return data ? (
    <div className="wrapper">
      <section className="navigation">
        <Navbar />
        <Sidebar />
      </section>
      <section className="main">
        <Hello username={data.userInfos.firstName} />
        <div className="content">
          <div className="graphs">
            <Activity />
            <div className="graphs--bottom">
              <Duration />
              <RadarComponent />
              <Score />
            </div>
          </div>
          <Info
            cal={data.keyData.calorieCount}
            prot={data.keyData.proteinCount}
            glu={data.keyData.carbohydrateCount}
            lip={data.keyData.lipidCount}
          />
        </div>
      </section>
    </div>
  ) : (
    <div className="container">
      <div className="loading">
        <div className="loading__letter">L</div>
        <div className="loading__letter">o</div>
        <div className="loading__letter">a</div>
        <div className="loading__letter">d</div>
        <div className="loading__letter">i</div>
        <div className="loading__letter">n</div>
        <div className="loading__letter">g</div>
        <div className="loading__letter">.</div>
        <div className="loading__letter">.</div>
        <div className="loading__letter">.</div>
      </div>
    </div>
  );
}
export default Dashboard;
