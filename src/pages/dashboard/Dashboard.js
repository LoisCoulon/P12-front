import { getList } from "../../services/mockServices";
import { getApiList } from "../../services/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hello from "../../components/Hello/Hello";
import Info from "../../components/Info/Info";
import Activity from "../../components/Activity/Activity";
import Duration from "../../components/Duration/Duration";
import RadarComponent from "../../components/Radar/RadarComponent";
import Score from "../../components/Score/Score";

function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    /** Using Mocked datas*/

    // getList().then((items) => {
    //   let datas = items.find((item) => item.id === parseFloat(id));
    //   setData(datas);
    // });

    /**Using API datas*/
    getApiList(id).then((items) => {
      setData(items);
    });
  }, [id]);

  return data ? (
    <div className="wrapper">
      <section className="navigation">
        <Navbar />
        <Sidebar />
      </section>
      <section className="main">
        <Hello username={data.firstName} />
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
            cal={data.calorieCount}
            prot={data.proteinCount}
            glu={data.carbohydrateCount}
            lip={data.lipidCount}
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
