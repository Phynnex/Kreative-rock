import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  {
    name: "Available",
    value: 800 
  },
  {
   name: "Total",
   value: 1400
  },
];

const COLORS = ["#FF7900","#00CCA7"];

export default class Example extends PureComponent {
  render() {
    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx={210}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}              
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
