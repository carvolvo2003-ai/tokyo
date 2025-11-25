import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Wallet } from 'lucide-react';

const data = [
  { name: '住宿 (30-35k)', value: 35000, color: '#818cf8' }, // Indigo
  { name: '交通 (含NEX)', value: 13000, color: '#34d399' }, // Emerald
  { name: '機票 (預估)', value: 12000, color: '#fbbf24' }, // Amber
  { name: '餐飲購物 (預估)', value: 30000, color: '#f472b6' }, // Pink
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={10}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const BudgetSection: React.FC = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="px-4 py-6 pb-24 h-full flex flex-col">
      <h2 className="text-xl font-bold text-stone-800 mb-2 flex items-center gap-2">
        <Wallet className="text-emerald-500" /> 預算概覽 (TWD)
      </h2>
      <p className="text-sm text-stone-500 mb-6">依據PDF資料估算之主要開銷結構</p>
      
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 flex-grow min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-stone-100 p-4 rounded-xl">
            <p className="text-xs text-stone-500">總預算預估</p>
            <p className="text-xl font-bold text-stone-800 font-mono">~90,000</p>
        </div>
        <div className="bg-stone-100 p-4 rounded-xl">
            <p className="text-xs text-stone-500">已知交通費</p>
            <p className="text-xl font-bold text-emerald-600 font-mono">13,000</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetSection;