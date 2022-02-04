import React from 'react';
import { Line } from 'react-chartjs-2'
import { Col, Row, Typography} from 'antd'
import { current } from '@reduxjs/toolkit';

// Require for chartjs to work
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
// Require for chartjs to work


// const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    console.log(coinHistory)

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString('en-GB'))
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    // console.log(data)

    const options = {
        scales: {
            y: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

    return ( 
        <>
            <Row className="chart-header">
                <Typography level={2} className='chart-title'>{coinName} Price Chart </Typography>
                <Col className="price-container">
                    <Typography level={5} className='price-change'>{coinHistory?.data?.change}%</Typography>
                    <Typography level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Typography>
                </Col>
            </Row>
            <Line data={data} options={options}/>
        </>
     );
}
 
export default LineChart;