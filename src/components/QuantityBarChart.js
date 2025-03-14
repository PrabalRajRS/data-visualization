"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const QuantityBarChart = ({ items }) => {
    const data = items?.map((item) => ({
        name: item.Item_Name,
        quantity: item.Quantity,
    }));

    return (
        <div className='chart-container'>
            <h4>Bar chart</h4>
            <BarChart width={450} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantity" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default QuantityBarChart;
