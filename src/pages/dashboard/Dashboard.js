import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { getList } from "../../services/mockServices";
import Hello from "../../components/hello/Hello";

function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        let datas = items.find((item) => item.id === parseFloat(id));
        setData(datas);
      }
    });
    return () => (mounted = false);
  }, [id]);

  return data ? (
    <div className="wrapper">
      <section className="navigation">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </section>
      <section className="main">
        <Hello username={data.userInfos.firstName}></Hello>
      </section>
    </div>
  ) : (
    <h1 className="loader">Chargement en cours ... </h1>
  );
}
export default Dashboard;
