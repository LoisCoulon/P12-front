import { getRadar } from "../../services/mockServices";
import { getApiRadar } from "../../services/services";
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

function RadarComponent() {
  const [radarData, setRadarData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    /** Using Mocked datas*/
    // getRadar().then((items) => {
    //   let datas = items.find((item) => item.userId === parseFloat(id));
    // if (datas) {
    //   const formattedData = datas.data.map((rd) => ({
    //     subject: datas.kind[rd.kind],
    //     A: rd.value,
    //   }));
    //   setRadarData(formattedData);
    // }

    // });

    /**Using API datas*/
    getApiRadar(id).then((items) => {
      if (items.data) {
        const formattedData = items.data.data.map((rd) => ({
          subject: items.data.kind[rd.kind],
          A: rd.value,
        }));
        setRadarData(formattedData);
      }
    });
  }, [id]);

  return radarData.length > 0 ? (
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
  ) : null;
}

export default RadarComponent;
