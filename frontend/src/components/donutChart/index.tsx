import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'util/request'
import { SaleSum } from 'types/Sales';
import { useEffect, useState } from 'react';

type ChartData = {
    labels: string[],
    series: number[],
}

export default function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(item => item.sellerName)
                const mySeries = data.map(item => item.sum)

                setChartData({ labels: myLabels, series: mySeries });
                console.log("Rodando");

            })
    }, [])

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}