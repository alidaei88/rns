import './Component.css';
import { v4 as uuid } from 'uuid';
import { FcPieChart, FcBarChart, FcLineChart } from 'react-icons/fc';

const Component = (props) => {

    const { chartList, setChartList, pieChartObj, setPieChartObj, barChartObj, setBartChartObj, lineChartObj, setLineChartObj } = props


    const addPieChart = () => {
        const newChart = {
            name: "PieChart",
            id: uuid(),
            labels: ['Red', 'Blue', 'Yellow'],
            label: "Its Sample",
            data: [300, 50, 100],
            backgroundColor: [
              '#ff6384',
              '#36a2eb',
              '#ffcd56'
            ],
          }
        setPieChartObj(() => newChart)
        const updatedList = [...chartList, pieChartObj]
        setChartList(updatedList);
    }


    const addBarChart = () => {
        const newChart = {
            name: "BarChart",
            id: uuid(),
            labels: ['index1', 'index2', 'index3', 'index4', 'index5', 'index6'],
            label: "Its Sample",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ["#ff6384", "#ff9f40", "#ffcd56", "#4bc0c0", "#36a2eb", "#9966ff", "#c9cbcf"],
            borderColor: ["#ff6384", "#ff9f40", "#ffcd56", "#4bc0c0", "#36a2eb", "#9966ff", "#c9cbcf"]
        }
        setBartChartObj(() => newChart)
        const updatedList = [...chartList, barChartObj]
        setChartList(updatedList);
    }


    const addLineChart = () => {
        const newChart = {
            name: "LineChart",
            id: uuid(),
            labels: [],
            label: '',
            data: [],
            fill: true,
            borderColor: '',
        }
        setLineChartObj(() => newChart)
        const updatedList = [...chartList, lineChartObj]
        setChartList(updatedList);
    }


return (
    <div className="component">
        <div className='componentIcons' onClick={addPieChart}>
            <FcPieChart />
            <p className='chartName'>Pie Chart</p>
        </div>
        <div className='componentIcons' onClick={addBarChart}>
            <FcBarChart />
            <p className='chartName'>Bar Chart</p>
        </div>
        <div className='componentIcons' onClick={addLineChart}>
            <FcLineChart />
            <p className='chartName'>Line Chart</p>
        </div>
    </div>
);
}

export default Component;