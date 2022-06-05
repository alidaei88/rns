import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Component from './Components/Component/Component';
import Dashboard from './Components/Dashboard/Dashboard';
import Inspector from './Components/Inspector/Inspector';

import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

function App() {

  //Dashboard Chart List
  const [chartList, setChartList] = useState([]);

  //charts states
  const [pieChartObj, setPieChartObj] = useState(
    {
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
    });
  
  const [barChartObj, setBartChartObj] = useState({
    name: "BarChart",
    id: uuid(),
    labels: ['index1', 'index2', 'index3', 'index4', 'index5', 'index6'],
    label: "Its Sample",
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: ["#ff6384", "#ff9f40", "#ffcd56", "#4bc0c0", "#36a2eb", "#9966ff", "#c9cbcf" ],
    borderColor:  ["#ff6384", "#ff9f40", "#ffcd56", "#4bc0c0", "#36a2eb", "#9966ff", "#c9cbcf" ]
  });
  
  const [lineChartObj, setLineChartObj] = useState({
    name: "LineChart",
    id: uuid(),
    labels: [],
    label: '',
    data: [],
    fill: true,
    borderColor: '',
  });
  
  //Inspector Forms visibility 
  const [showPieForm, setShowPieForm] = useState(false);
  const [showBarForm, setShowBarForm] = useState(false);
  const [showLineForm, setShowLineForm] = useState(false);

  //inspector Form States
  const [formData, setFormData] = useState()

  
  return (
    <div className="App">
      <Inspector
        showPieForm={showPieForm}
        showBarForm={showBarForm}
        showLineForm={showLineForm}
        formData={formData}
        setFormData={setFormData}
      />
      <Dashboard
        chartList={chartList}
        setShowPieForm={setShowPieForm}
        setShowBarForm={setShowBarForm}
        setShowLineForm={setShowLineForm}
        pieChartObj={pieChartObj}
        barChartObj={barChartObj}
        lineChartObj={lineChartObj}
        setFormData={setFormData}
        formData = { formData }

      />
      <Component
        chartList={chartList}
        setChartList={setChartList}
        pieChartObj={pieChartObj}
        setPieChartObj={setPieChartObj}
        barChartObj={barChartObj}
        setBartChartObj={setBartChartObj}
        lineChartObj={lineChartObj}
        setLineChartObj={setLineChartObj}
      />
    </div>
  );
}

export default App;
