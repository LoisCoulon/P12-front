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

function RadarComponent() {
  const [radarData, setRadarData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRadar().then((items) => {
      let datas = items.find((item) => item.userId === parseFloat(id));
      if (datas) {
        const formattedData = datas.data.map((rd) => ({
          subject: datas.kind[rd.kind],
          A: rd.value,
        }));
        setRadarData(formattedData);
      }
    });
  }, [id]);

  return (
    <div className="radar">
      <ResponsiveContainer height="100%" width="100%">
        <RadarChart
          data={radarData}
          margin={{ top: 30, bottom: 30, left: 30, right: 30 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="white"
            tickLine={false}
            fontSize={14}
          />
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
    </div>
  );
}

export default RadarComponent;
