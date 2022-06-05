import './Inspector.css';
import { useState } from 'react';
import PieChartForm from '../PieChartForm/PieChartForm';
import BarChartForm from '../BarChartForm/BarChartForm';

const Inspector = ({ showPieForm, showBarForm, formData, setFormData }) => {
    
    return (
        <div className='inspector'>
            {showPieForm && <PieChartForm formData={formData} setFormData={setFormData} />}
            {showBarForm && <BarChartForm formData={formData} setFormData={setFormData} />}
        </div>
    )
    
}

export default Inspector;


// console.log("formData in inspector:",formData) 

//     const [labels, setLabels] = useState([{
//         type: "text",
//         value: "",
//     }]);

//     const [data, setData] = useState([{
//         type: "text",
//         value: "",
//     }]);

//     const [color, setColor] = useState([{
//         type: "color",
//         value: "",
//     }]);

//     const addLabelInput = () => {
//         const updatedList = [
//             ...labels,
//             {
//                 type: "text",
//                 value: "",
//             }
//         ]
//         setLabels(updatedList)
//     }

//     const addDataInput = () => {
//         const updatedList = [
//             ...data,
//             {
//                 type: "text",
//                 value: "",
//             }
//         ]
//         setData(updatedList)
//     }

//     const addColorInput = () => {
//         const updatedList = [
//             ...color,
//             {
//                 type: "color",
//                 value: "",
//             }
//         ]
//         setColor(updatedList)
//     }
//     console.log("showPieForm:",showPieForm )
//     return (
//         <div className="inspector" >
//             <div className='pieForm' style={showPieForm ? {display: "block"} : {display: "none"}}>
//                 <div className='labelContainer'>
//                     <label htmlFor='label'>Label: </label>
//                     <input id='label' type={`text`} placeholder="Insert Your Chart Label" />
//                 </div>
//                 <div className='labelsContainer'>
//                     <label htmlFor='lebels'>Labels: </label>
//                     {
//                         labels.map((item, index) => <input id={index} type={item.type} value={item.value} placeholder="Insert Your labels" />)
//                     }
//                     <button onClick={addLabelInput}>+</button>
//                 </div>
//                 <div className='dataContainer'>
//                     <label htmlFor='data'>Data: </label>
//                     {
//                         data.map((item, index) => <input id={index} type={item.type} value={item.value} placeholder="Insert Your Amounts" />)
//                     }
//                     <button onClick={addDataInput}>+</button>
//                 </div>
//                 <div className='colorContainer'>
//                     <label htmlFor='color'>Background Color: </label>
//                     {
//                         color.map((item, index) => <input id={index} type={item.type} value={item.value} placeholder="Insert Your Amounts" />)
//                     }
//                     <button onClick={addColorInput}>+</button>
//                 </div>
//                 <button type='submit'>Submit</button>
//             </div>
//         </div>
//     );