import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 12000, orders: 450, target: 15000 },
  { month: 'Feb', revenue: 19000, orders: 520, target: 15000 },
  { month: 'Mar', revenue: 15000, orders: 380, target: 15000 },
  { month: 'Apr', revenue: 22000, orders: 610, target: 15000 },
  { month: 'May', revenue: 18000, orders: 490, target: 15000 },
  { month: 'Jun', revenue: 25000, orders: 680, target: 15000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-gray-600 text-sm font-medium">{label}</p>
        <p className="text-pink-600 font-semibold">
          Revenue: ${payload[0].value?.toLocaleString()}
        </p>
        <p className="text-blue-600 font-semibold">
          Orders: {payload[1].value}
        </p>
        <p className="text-gray-500 text-xs">
          Target: ${payload[2].value?.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export const MonthlyBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="month" 
          stroke="#6b7280"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          stroke="#6b7280"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          verticalAlign="top" 
          height={36}
          formatter={(value, entry: any) => (
            <span style={{ color: entry.color }}>{value}</span>
          )}
        />
        <Bar 
          dataKey="revenue" 
          fill="#ec4899" 
          radius={[4, 4, 0, 0]}
          name="Revenue"
        />
        <Bar 
          dataKey="orders" 
          fill="#3b82f6" 
          radius={[4, 4, 0, 0]}
          name="Orders"
        />
        <Bar 
          dataKey="target" 
          fill="#10b981" 
          radius={[4, 4, 0, 0]}
          name="Target"
          opacity={0.3}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
