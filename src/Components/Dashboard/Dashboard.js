import React from 'react';
import './Dashboard.css'
import MyLineChart from '../MyLineChart/MyLineChart';
import MyLineChart2 from '../MyLineChart2/MyLineChart2';

const Dashboard = () => {
    return (
        <div className='desBoard-container'>
            <div className='chart-1'>
                <MyLineChart></MyLineChart>
            </div>
            <div className='chart-2'>
                <MyLineChart2></MyLineChart2>
            </div>

        </div>
    );
};

export default Dashboard;