import React from 'react';
import "./Chart.css";
import ChartBar from './ChartBar';

const Chart = (props) => {
    console.log(props.dataPoint);
    const dataPointsValue = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMaxvalue = Math.max(...dataPointsValue)

    return (
        <div className='chart'>
            {
                props.dataPoint.map(dataPoints => (
                    <ChartBar
                        key={dataPoints.label}
                        value={dataPoints.value}
                        maxValue={totalMaxvalue}
                        label={dataPoints.label}
                    />
                ))
            }
        </div>
    );
};

export default Chart;