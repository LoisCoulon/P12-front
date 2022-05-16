import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { getApiList } from "../../services/services";

function Score() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [score, setScore] = useState(null);

  /**Using mocked datas*/
  // const datas = [
  //   {
  //     name: "Score",
  //     uv: 38.5,
  //     pv: 2400,
  //     fill: "#FF0000",
  //   },
  // ];

  // const score = datas.map((d) => d.uv);

  /**Using API datas*/
  useEffect(() => {
    getApiList(id).then((items) => {
      const formatedData = [
        {
          name: "Score",
          uv: items.data.todayScore * 100,
          pv: 2400,
          fill: "#FF0000",
        },
      ];
      console.log(formatedData);
      setData(formatedData);
      setScore(formatedData.map((fd) => fd.uv));
    });
  }, [id]);

  /**
   * This function calculates the end angle of the radial bar.
   * @param {number} score Score of the user.
   * @returns the end angle
   */
  function calculateAngle(score) {
    const angle = 180 - 3.6 * score;

    return angle;
  }

  return data ? (
    <ResponsiveContainer className="score" height={250} width="31%">
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="70%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={calculateAngle(score)}
      >
        <text
          dy="50%"
          dx="50%"
          textAnchor="middle"
          fill="black"
          style={{ fontSize: "2.2vw" }}
        >
          {score}%
        </text>
        <text dy="60%" dx="50%" textAnchor="middle" fill="grey">
          de votre
        </text>
        <text dy="70%" dx="50%" textAnchor="middle" fill="grey">
          objectif
        </text>
        <RadialBar minAngle={15} background clockWise={true} dataKey="uv" />
        <Legend
          verticalAlign="top"
          align="left"
          content={(payload) => (
            <div
              className="legend_text"
              style={{
                color: "black",
                marginTop: "10px",
                marginLeft: "20px",
                opacity: ".5",
                position: "absolute",
                top: "0",
              }}
            >
              {payload.payload[0].value[0].toUpperCase() +
                payload.payload[0].value.substring(1)}
            </div>
          )}
        />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  ) : null;
}
export default Score;
