import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts';
import { useState, useEffect } from "react";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  const getData = () => {
    return genres.map(genre => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      };
    });
  };

  useEffect(() => {
    setData(getData()); // eslint-disable-next-line
  }, [events]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, innerRadius, percent, index }) => {
   const RADIAN = Math.PI / 180;
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);
   return percent ? (
     <text
       x={x}
       y={y}
       fill="black"
       textAnchor={x > cx ? 'start' : 'end'}
       dominantBaseline="central"
     >
       {` ${(percent * 100).toFixed(0)}%`}
     </text>
   ) : null;
 };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart> width={730} height={250}
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          cx="50%" cy="50%" 
          outerRadius={140}
        >
         {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
         ))}
            </Pie>
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;