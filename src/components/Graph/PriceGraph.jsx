import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { date: '2023-08-01', price: 15000 },
  { date: '2023-08-10', price: 13500 },
  { date: '2023-08-20', price: 15500 },
  { date: '2023-09-01', price: 14000 },
  { date: '2023-09-10', price: 13000 },
  { date: '2023-09-20', price: 14500 },
  { date: '2023-10-01', price: 16000 },
];

function PriceGraph() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">가격변동</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="date"
            stroke="#8884d8"
            tick={{ fill: '#555', fontSize: 12 }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#555', fontSize: 12 }}
            tickLine={false}
            stroke="#8884d8"
            width={80}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#f5f5f5',
              borderColor: '#8884d8',
              borderRadius: '8px',
            }}
            labelStyle={{ fontWeight: 'bold', color: '#333' }}
            itemStyle={{ color: '#8884d8' }}
            cursor={{ stroke: '#8884d8', strokeDasharray: '5 5' }}
          />
          <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: 10 }} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={{ fill: '#82ca9d', r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceGraph;