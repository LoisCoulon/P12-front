import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

const baseUrl = "../mocked/mainData.json";

function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  // const getData = () => {
  //   fetch("../mockedData.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       let myData = myJson.find((d) => d.id === id);
  //       if (myData) {
  //         setData(myData);
  //       }
  //     });
  // };

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  // if (data) {
  //   let myData = data.find((d) => d.id === parseFloat(id));
  //   setData(myData);
  // } else {
  //   return null;
  // }
  const username = "data.userInfos.firstName";

  return (
    <div className="wrapper">
      <section className="navigation">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </section>
      <section className="main">
        <div className="user">
          <h1>
            Bonjour
            <span className="username"> {username[0]}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      </section>
    </div>
  );
}
export default Dashboard;
