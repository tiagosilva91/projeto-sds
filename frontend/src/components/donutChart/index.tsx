import axios from 'axios';
import Chart from 'react-apexcharts';
import {BASE_URL} from 'util/request'
import {SaleSum} from 'types/Sales';

type ChartData = {
    labels: string[],
    series: number[],
}

export default function DonutChart() {

    let chartData : ChartData = {labels:[], series:[]}

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response =>{
            const data = response.data as SaleSum[];
            const myLabels = data.map(item => item.sellerName)
            const mySeries = data.map(item => item.sum)

            chartData = {labels: myLabels, series: mySeries}
            console.log(chartData)
            
        })

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
            options={{...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}