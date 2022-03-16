import React from 'react';
import "./ChartBar.css";

const ChartBar = ({ value, maxValue, label }) => {
    console.log(label);
    let filledbarHeight = '0%'
    if (maxValue > 0) {
        filledbarHeight = Math.round((value / maxValue) * 100) + "%"
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: filledbarHeight }}></div>
            </div>
            <div className='chart-bar__label'>{label}</div>
        </div>
    );
};


export default ChartBar;