import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

const data = [
  { name: 'Mon', revenue: 2400, orders: 180 },
  { name: 'Tue', revenue: 1398, orders: 221 },
  { name: 'Wed', revenue: 9800, orders: 290 },
  { name: 'Thu', revenue: 3908, orders: 200 },
  { name: 'Fri', revenue: 4800, orders: 218 },
  { name: 'Sat', revenue: 3800, orders: 250 },
  { name: 'Sun', revenue: 4300, orders: 210 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // Safely access payload values with null checks
    const revenueValue = payload[0]?.value;
    const ordersValue = payload[1]?.value;
    
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-gray-600 text-sm">{`${label}`}</p>
        <p className="text-pink-600 font-semibold">
          Revenue: ${revenueValue ? revenueValue.toLocaleString() : '0'}
        </p>
        <p className="text-blue-600 font-semibold">
          Orders: {ordersValue || '0'}
        </p>
      </div>
    );
  }
  return null;
};

export const RevenueChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="name" 
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
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#ec4899"
          strokeWidth={3}
          fill="url(#revenueGradient)"
          fillOpacity={0.3}
        />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#3b82f6"
          strokeWidth={2}
          strokeDasharray="5 5"
        />
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#ec4899" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
};
