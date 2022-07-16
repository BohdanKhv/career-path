import { Bar } from 'react-chartjs-2';
import { numberFormatter } from '../../assets/utils/helpers'
import { locationIcon } from '../../assets/img/icons';
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
            <td colSpan="3" className="border-bottom p-0 bg-secondary">
                <div className="flex flex-col text-center">
                    <div className="flex flex-col p-4 flex-grow-1">
                        <span className="fs-3 bold">
                            {item.occTitle}
                        </span>
                        <span className="fs-4 pt-1 bold" title="OCC code">
                            {item.occCode}
                        </span>
                        <span className="fs-5 pt-1">
                            {item.level}
                        </span>
                        <div className="fs-5 pt-3 flex align-center justify-center">
                            <i className="icon-sm me-1">{locationIcon}</i> {item.areaTitle}
                        </div>
                    </div>
                    {hData.length >= 3 ? (
                    <div className="px-3">
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
                    ) : <p className="fs-4 px-4">
                            Not enough data to display hourly wage
                        </p>}
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
                    ): <p className="fs-4 p-4">
                        Not enough data to display annual wage
                        </p>
                    }
                </div>
            </td>
        </tr>
    )
}

export default JobDetail