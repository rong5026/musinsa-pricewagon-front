import React , { useEffect, useState }from 'react';
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

// const data = [
//   { createdAt: '2024-08-29T00:00:00', price: 15000 },
//   { createdAt: '2023-08-10', price: 13500 },
//   { createdAt: '2023-08-20', price: 15500 },
//   { createdAt: '2023-09-01', price: 14000 },
//   { createdAt: '2023-09-10', price: 13000 },
//   { createdAt: '2023-09-20', price: 14500 },
//   { createdAt: '2023-10-01', price: 16000 },
// ];

function PriceGraph({ data }) {
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    // createdAt 값을 변환하는 함수
    const formatDate = dateString => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const date = new Date(dateString);
      return date
        .toLocaleDateString('ko-KR', options)
        .replace(/\./g, '-')
        .replace(/\s/g, '');
    };

    // data 배열의 createdAt 값을 변환하여 새로운 배열 생성
    const transformedData = data.map(item => ({
      ...item,
      createdAt: formatDate(item.createdAt),
    }));

    setFormattedData(transformedData);
  }, [data]);

  return (
    <div className="w-full h-72 sm:h-72 md:h-80 lg:h-96 mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 20, right: 30, left: -20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="createdAt"
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
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ paddingBottom: 10 }}
          />
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
