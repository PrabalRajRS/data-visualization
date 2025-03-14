"use client";
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#FFBB28', '#FF8042', '#00C49F'];

const ItemPieChart = ({ items }) => {
    const typeData = {};
    items?.forEach((item) => {
        const type = item.Item_Name || "Unknown";
        typeData[type] = item.Quantity;
    });

    const data = Object.entries(typeData).map(([name, value]) => ({ name, value }));

    return (
        <div className='chart-container'>
            <h4>Pie chart</h4>
            <PieChart width={450} height={350}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    label
                    outerRadius={120}
                    dataKey="value"
                >
                    {data.map((_, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default ItemPieChart;
