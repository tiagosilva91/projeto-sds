import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/Sales';
import { BASE_URL } from 'util/request';
import { round } from 'util/format';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[]
    };
    series: SeriesData[]
}

export default function BarChart() {


    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then(response => {
                const data = response.data as SaleSuccess[];
                const myLabels = data.map(item => item.sellerName)
                const mySeries = data.map(item => round((100.0 * item.deals / item.visited), 1))

                setChartData({
                    labels: {
                        categories: myLabels,
                    },
                    series: [
                        {
                            name: "% Sucess",
                            data: mySeries,
                        }
                    ]
                })


            })
    }, [])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}