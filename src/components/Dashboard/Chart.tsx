import React, { FC } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", value: 17 },
  { name: "Tues", value: 38 },
  { name: "Wed", value: 30 },
  { name: "Thurs", value: 37 },
  { name: "Fri", value: 28 },
];
const Chart: FC = () => {
  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.value));
    return dataMax / data.length / 2;
  };

  return (
    <div className="flex flex-col bg-white shadow-2xl  dark:bg-zinc-800 dark:text-white h-full w-full rounded-2xl p-6 transition duration-500 ease-in-out transform">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl mb-4 ml-10">Analytics</h1>
        <h1 className="flex items-center font-semibold cursor-pointer">
          This week <RiArrowDropDownLine className="text-3xl " />
        </h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart width={500} height={200} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8dc387" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid vertical={false} stroke="#DDD" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8dc387"
            fillOpacity={1}
            strokeWidth={2}
            fill="url(#colorUv)"
          />
          <Line
            type="monotone"
            dot={false}
            strokeLinecap="round"
            legendType="none"
            stroke="#8dc387"
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
