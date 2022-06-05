import { Bar } from 'react-chartjs-2';

const BarCahrt = ({setFormData, setShowPieForm, setShowBarForm, barChartObj}) => {

    const handleClick = () => {
        setShowBarForm(true)
        setShowPieForm(false)
        setFormData(barChartObj)
        
      }

    return (
        <>
            <Bar data={{

                labels: [...barChartObj.labels],
                datasets: [{
                    label: barChartObj.label,
                    data: [...barChartObj.data],
                    backgroundColor: [...barChartObj.backgroundColor],
                    borderColor: [...barChartObj.borderColor],
                    borderWidth: 1
                }]
               
            }}
                height={400}
                width={800}
                onClick={ handleClick }
            />
        </>
    );
}

export default BarCahrt;