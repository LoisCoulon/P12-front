import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { getRadar } from "../../services/mockServices";

// const data = [
//   {
//     subject: "Math",
//     A: 120,
//     B: 110,
//     fullMark: 150,
//   },
//   {
//     subject: "Chinese",
//     A: 98,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: "English",
//     A: 86,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: "Geography",
//     A: 99,
//     B: 100,
//     fullMark: 150,
//   },
//   {
//     subject: "Physics",
//     A: 85,
//     B: 90,
//     fullMark: 150,
//   },
//   {
//     subject: "History",
//     A: 65,
//     B: 85,
//     fullMark: 150,
//   },
// ];

function RadarComponent() {
  const [radarData, setRadarData] = useState(null);
  const { id } = useParams();
  let data = [];

  useEffect(() => {
    let mounted = true;
    getRadar().then((items) => {
      if (mounted) {
        let datas = items.find((item) => item.userId === parseFloat(id));
        setRadarData(datas);
      }
    });
    return () => (mounted = false);
  }, [id]);

  // if (radarData) {
  //   data.push({
  //     Cardio: radarData.data[0].value,
  //     Energie: radarData.data[1].value,
  //     Endurance: radarData.data[2].value,
  //     Force: radarData.data[3].value,
  //     Vitesse: radarData.data[4].value,
  //     Intensité: radarData.data[5].value,
  //   });
  //   console.log(data);
  // }
  if (radarData) {
    radarData.data.map((rd) => {
      return data.push({
        subject: radarData.kind[rd.kind],
        A: rd.value,
      });
    });
    console.log(data);
  }

  return (
    <ResponsiveContainer className="radar" height={250} width="31%">
      <RadarChart
        outerRadius={90}
        data={data}
        margin={{ top: 30, bottom: 30, left: 30, right: 30 }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" stroke="white" tickLine={false} />
        <PolarRadiusAxis
          angle={30}
          type="number"
          tick={false}
          axisLine={false}
          tickCount="6"
          line="0"
        />
        <Radar dataKey="A" fill="#ff0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarComponent;
