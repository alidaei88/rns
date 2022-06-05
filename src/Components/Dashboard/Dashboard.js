import './Dashboard.css';
import BarChart from '../BarChart/BarChart'
import PieChart from '../PieChart/PieChart'
import LineChart from '../LineChart/LineChart'

const Dashboard = (props) => {

    const { chartList, setShowPieForm, setShowBarForm, setShowLineForm, pieChartObj, barChartObj, lineChartObj, setFormData, formData } = props



    return (
        <div className="dashboard">
            {
                chartList.map(item => {
                   
                    if (item?.name === "BarChart") return <div className='dashboardChart' key={item.id}><BarChart barChartObj={ barChartObj } setFormData={setFormData} setShowBarForm={setShowBarForm} setShowPieForm={setShowPieForm} /></div>
                    else if (item?.name === "PieChart") return <div className='dashboardChart' key={item.id} ><PieChart pieChartObj={ pieChartObj } setFormData={setFormData} formData={ formData } setShowPieForm={setShowPieForm}  setShowBarForm={setShowBarForm}/></div>
                    else if (item?.name === "LineChart") return <div className='dashboardChart' key={item.id}><LineChart lineChartObj={ lineChartObj } setFormData={setFormData} setShowLineForm={setShowLineForm}/></div>
                    return null
                }
                )
            }
        </div>
    );
}

export default Dashboard;