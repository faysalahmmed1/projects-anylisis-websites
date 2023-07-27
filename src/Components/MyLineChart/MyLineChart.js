import React from 'react';
import './MyLineChart.css'
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: 'Mar',
            price: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Apr',
            price: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'May',
            price: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Jun',
            price: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Jul',
            price: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Aug',
            price: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Sep',
            price: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (

        <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey={'price'} stroke="#8884d8" />
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>

        </LineChart>
    );
};

export default MyLineChart;