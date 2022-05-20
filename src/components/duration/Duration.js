import { getDuration } from "../../services/mockServices";
import { getApiDuration } from "../../services/services";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useParams } from "react-router-dom";

function Duration() {
  const [durationData, setDurationData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    /** Using Mocked datas*/
    // getDuration().then((items) => {
    //   let datas = items.find((item) => item.userId === parseFloat(id));
    // if (datas) {
    //   const formattedData = datas.sessions.map((activity) => ({
    //     jour: activity.day,
    //     durée: activity.sessionLength,
    //   }));
    //   setDurationData(formattedData);
    // }

    // });

    /**Using API datas*/
    getApiDuration(id).then((datas) => {
      if (datas) {
        const formattedData = datas.sessions.map((activity) => ({
          jour: activity.day,
          durée: activity.sessionLength,
        }));
        setDurationData(formattedData);
      }
    });
  }, [id]);

  /**
   * Gives the first letter of the day of the week using a given number
   * @param {number} num
   * @returns The first letter of the day of the week
   */
  function weekDays(num) {
    const week = ["L", "M", "M", "J", "V", "S", "D"];
    return week[+num - 1];
  }

  /**
   * A React component that builds a custom Tooltip.
   * @param {array} payload
   * @returns a custom html
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{ background: "white", padding: "5px" }}
        >
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer height={250} width="31%" className="duration">
      <LineChart
        data={durationData}
        height="60%"
        width="100%"
        margin={{
          top: 25,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <Tooltip
          animationEasing="ease-out"
          cursor={false}
          content={CustomTooltip}
        />
        <XAxis
          dataKey="jour"
          tick={{ fill: "white", opacity: ".8" }}
          tickFormatter={weekDays}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          padding={{ top: 0, bottom: 0 }}
          type="number"
          domain={["dataMin -10", "dataMax +10"]}
          allowDataOverflow={true}
          tickLine={false}
          axisLine={false}
          tickMargin={0}
          hide
        />

        <Legend
          verticalAlign="top"
          align="left"
          iconSize={0}
          content={() => (
            <div
              className="legend_text"
              style={{
                color: "white",
                marginTop: "-10px",
                marginLeft: "20px",
                opacity: ".5",
                position: "absolute",
                top: "0",
              }}
            >
              Durée moyenne des
              <br />
              sessions
            </div>
          )}
        ></Legend>
        <Line
          dataKey="durée"
          type="natural"
          scale="band"
          stroke="white"
          strokeWidth={2}
          dot={false}
          activeDot={{
            fill: "white",
            strokeOpacity: ".5",
            strokeWidth: "10",
            r: 4,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Duration;
