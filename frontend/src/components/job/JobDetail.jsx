import { Bar } from 'react-chartjs-2';
import { numberFormatter } from '../../assets/utils/helpers'
import { locationIcon } from '../../assets/img/icons';
import minorOccupations from '../../assets/data/jobs/minorOccupations.json';
import majorOccupations from '../../assets/data/jobs/majorOccupations.json';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const JobDetail = ({ item }) => {
    const aData = [
        {
            label: 'Lowest 10%',
            value: item.wagePct.pct10A ? item.wagePct.pct10A : undefined,
        },
        {
            label: 'Lowest 25%',
            value: item.wagePct.pct25A ? item.wagePct.pct25A : undefined,
        },
        {
            label: 'Mean',
            value: item.wagePct.pct50A ? item.wagePct.pct50A : item.wage.annually ? item.wage.annually : undefined,
        },
        {
            label: 'Hight 75%',
            value: item.wagePct.pct75A ? item.wagePct.pct75A : undefined,
        },
        {
            label: 'Hight 90%',
            value: item.wagePct.pct90A ? item.wagePct.pct90A : undefined,
        },
    ].filter((item) => item.value);
    const hData = [
        {
            label: 'Lowest 10%',
            value: item.wagePct.pct10H ? item.wagePct.pct10H : undefined,
        },
        {
            label: 'Lowest 25%',
            value: item.wagePct.pct25H ? item.wagePct.pct25H : undefined,
        },
        {
            label: 'Mean',
            value: item.wagePct.pct50H ? item.wagePct.pct50H : item.wage.hourly ? item.wage.hourly : undefined,
        },
        {
            label: 'Hight 75%',
            value: item.wagePct.pct75H ? item.wagePct.pct75H : undefined,
        },
        {
            label: 'Hight 90%',
            value: item.wagePct.pct90H ? item.wagePct.pct90H : undefined,
        },
    ].filter((item) => item.value);


    return (
        <tr>
            <td colSpan="4" className="border-bottom p-0 bg-secondary">
                <div className="flex flex-col">
                    <div className="flex flex-col p-4 flex-grow-1">
                        <div className="fs-4 bold">
                            {item.areaTitle}
                        </div>
                        <div className="fs-5 bold">
                            {item.occCode}
                        </div>
                        <div className="fs-5 pt-2">
                            {majorOccupations.filter(i => i.value.slice(0, 2) === item.occCode.slice(0, 2))[0].label}
                        </div>
                        <div className="fs-5 pt-1">
                            {minorOccupations.filter(i => i.value.slice(0, 4) === item.occCode.slice(0, 4))[0].label}
                        </div>
                    </div>
                    <div className="text-center flex border-top">
                        {hData.length >= 3 ? (
                        <div className="p-3">
                            <Bar
                                data={{
                                    labels: hData.map((item) => item.label),
                                    datasets: [
                                        {
                                            label: 'Hourly Wage',
                                            backgroundColor: '#00bcd4',
                                            hoverBackgroundColor: "#00bcb4",
                                            data: hData.map((item) => item.value),
                                        }
                                    ]
                                }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: 'bottom',
                                            display: false,
                                        },
                                        title: {
                                            display: true,
                                            text: 'Hourly Wage',
                                        },
                                    },
                                }}
                                height={200}
                            />
                        </div>
                        ) : ( null )}
                        {hData.length < 3 && aData.length < 3 && (
                        <p className="fs-4 p-4">
                            Not enough data to display wage data graph.
                        </p>
                        )}
                        {aData.length >= 3 ? (
                        <div className="p-3">
                            <Bar
                                data={{
                                    labels: aData.map((item) => item.label),
                                    datasets: [
                                        {
                                            label: 'Annual Wage',
                                            backgroundColor: '#00bcd4',
                                            hoverBackgroundColor: "#00bcb4",
                                            data: aData.map((item) => item.value),
                                        }
                                    ]
                                }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: 'bottom',
                                            display: false,
                                        },
                                        title: {
                                            display: true,
                                            text: 'Annual Wage',
                                        },
                                    },
                                }}
                                height={200}
                            />
                        </div>
                        ) : ( null )}
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default JobDetail