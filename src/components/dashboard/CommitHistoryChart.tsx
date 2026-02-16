'use client';

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
import Card from './Card';

const data = [
  { name: 'Week 1', commits: 4, lines: 2400 },
  { name: 'Week 2', commits: 3, lines: 1398 },
  { name: 'Week 3', commits: 5, lines: 9800 },
  { name: 'Week 4', commits: 2, lines: 3908 },
  { name: 'Week 5', commits: 6, lines: 4800 },
  { name: 'Week 6', commits: 8, lines: 3800 },
  { name: 'Week 7', commits: 4, lines: 4300 },
];

const CommitHistoryChart = () => {
  return (
    <Card className="p-6">
        <h3 className="text-2xl font-bold mb-6 text-white">Project Velocity</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis yAxisId="left" stroke="#9CA3AF" />
            <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)', 
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF'
              }}
            />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="commits" stroke="#EC4899" strokeWidth={2} name="Commits" />
            <Line yAxisId="right" type="monotone" dataKey="lines" stroke="#8B5CF6" strokeWidth={2} name="Lines of Code" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default CommitHistoryChart;
