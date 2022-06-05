import { Pie } from 'react-chartjs-2'

const PieChart = ({ pieChartObj, setFormData, setShowPieForm, setShowBarForm }) => {
  
  const handleClick = () => {
    setShowPieForm(true)
    setShowBarForm(false)
    setFormData(pieChartObj)
    
  }

    return ( 
        <>
            <Pie height={400} width={500} data={{
                 labels: [ ...pieChartObj.labels ],
                  datasets: [{
                    label: pieChartObj.label,
                    data: [...pieChartObj.data],
                    backgroundColor: [...pieChartObj.backgroundColor],
                    hoverOffset: 4
                  }]
            }} onClick={handleClick} />
        </>
     );
}
 
export default PieChart;