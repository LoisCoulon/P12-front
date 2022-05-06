import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Score",
    uv: 31.47,
    pv: 2400,
    fill: "#FF0000",
  },
];

function Score() {
  return (
    <ResponsiveContainer className="score" height={250} width="31%">
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="70%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <text
          dy="50%"
          dx="50%"
          textAnchor="middle"
          fill="grey"
          style={{ fontSize: "2.2vw" }}
        >
          31%
        </text>
        <text dy="60%" dx="50%" textAnchor="middle" fill="grey">
          de votre
        </text>
        <text dy="70%" dx="50%" textAnchor="middle" fill="grey">
          objectif
        </text>
        <RadialBar
          minAngle={15}
          // label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="uv"
        />
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
  );
}
export default Score;
