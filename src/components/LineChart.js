import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

function LineChart(props) {
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < props.coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(props.coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < props.coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(
        props.coinHistory?.data?.history[i].timestamp
      ).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {props.coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {props.coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {props.coinName} Price: ${props.currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
}

export default LineChart;
