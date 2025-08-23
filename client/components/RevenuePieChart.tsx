import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'Electronics', value: 4000, color: '#ec4899' },
  { name: 'Clothing', value: 3000, color: '#3b82f6' },
  { name: 'Home & Garden', value: 2000, color: '#10b981' },
  { name: 'Beauty', value: 1500, color: '#f59e0b' },
  { name: 'Sports', value: 1000, color: '#8b5cf6' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-gray-600 text-sm">{data.name}</p>
        <p className="font-semibold" style={{ color: data.color }}>
          ${data.value.toLocaleString()}
        </p>
        <p className="text-gray-500 text-xs">
          {((data.value / 11500) * 100).toFixed(1)}% of total
        </p>
      </div>
    );
  }
  return null;
};

export const RevenuePieChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          verticalAlign="bottom" 
          height={36}
          formatter={(value, entry: any) => (
            <span style={{ color: entry.color }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
