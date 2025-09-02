'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = Array.from({length: 20}).map((_, i) => ({ name: String(i), value: 100 + Math.round(Math.sin(i/2)*10) + i }));
export function ChartDemo(){
  return (<div className="card">
    <div className="mb-3 text-sm text-offwhite/70">Demo Chart (randomized)</div>
    <div style={{width:'100%', height:240}}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" hide /><YAxis hide /><Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3B82F6" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <p className="text-offwhite/70 text-xs mt-2">For demonstration only. Not investment advice.</p>
  </div>);
}
