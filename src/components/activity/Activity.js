import oval from "../../assets/Oval.png";
import ovalRed from "../../assets/Oval_red.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { getActivity } from "../../services/mockServices";
import { useParams } from "react-router-dom";

function Activity() {
  const [activityData, setActivityData] = useState(null);
  const { id } = useParams();
  let data = [];

  useEffect(() => {
    let mounted = true;
    getActivity().then((items) => {
      if (mounted) {
        let datas = items.find((item) => item.userId === parseFloat(id));
        setActivityData(datas);
      }
    });
    return () => (mounted = false);
  }, [id]);

  if (activityData) {
    activityData.sessions.map((activity) =>
      data.push({
        date: activity.day,
        kg: activity.kilogram,
        cal: activity.calories,
      })
    );
  }

  return (
    <div className="activity">
      <div className="activity--top">
        <h2>Activité quotidienne</h2>
        <div className="legend">
          <img src={oval} alt="black" />
          <span>Poids (kg)</span>
          <img src={ovalRed} alt="red" />
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
      <div className="activity--graph">
        <ResponsiveContainer width="100%" aspect={4}>
          <BarChart
            width="100%"
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis orientation="right" domain={[0, "dataMax"]} />
            <Tooltip />
            <Bar radius={5} barSize={10} dataKey="kg" fill="#282D30" />
            <Bar radius={5} barSize={10} dataKey="cal" fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default Activity;
