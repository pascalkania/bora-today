"use client";
import { WeatherResponse } from "@/app/api/weather/route";
import { format } from "date-fns";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const PressureDifferenceChart = ({ data }: { data: WeatherResponse[] }) => {
  const chartData = data[0].list.map((item, index) => {
    const triestPressure = item.main.pressure;
    const mariborPressure = data[1].list[index].main.pressure;
    const pressureDifference = Number((triestPressure - mariborPressure).toFixed(2));
    return {
      date: format(new Date(item.dt * 1000), "dd/MM/yyyy HH:mm"),
      pressureDifference,
    };
  });

  console.log(chartData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
        <YAxis domain={[-10, 10]} label={{ value: "diff (hPa)", angle: -90 }} />
        <Tooltip />
        <Legend verticalAlign="top" height={30} />
        <ReferenceLine y="0" stroke="black" strokeDasharray="3 3" />
        <ReferenceLine
          y="-4"
          label={{ value: "Bora risk", position: "bottom" }}
          stroke="red"
          strokeDasharray="5 5"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="pressureDifference"
          name="Triest - Maribor"
          stroke="black"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PressureDifferenceChart;
