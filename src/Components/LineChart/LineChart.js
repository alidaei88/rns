import { Line } from 'react-chartjs-2'

const LineChart = () => {
    return ( 
        <>
            <Line height={400} width={800} data={{
                labels: ['index1', 'index2', 'index3', 'index4', 'index5', 'index6'],
                datasets: [{
                  label: 'My First Dataset',
                  data: [80, 80, 80,100, 80, 80, 80],
                  fill: true,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
                }]
            }} />
        </>
     );
}
 
export default LineChart;