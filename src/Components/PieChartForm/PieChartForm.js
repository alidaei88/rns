
const PieChartForm = ({ formData, setFormData }) => {

    const labelCahngeHandler = (e) => {
        const value = e.target.value;
        const updatedFormData = {
            ...formData,
            label: value
        }
        setFormData(updatedFormData)
    }

    const labelsCahngeHandler = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        formData.labels.splice(id, 1, value);
        const updatedFormData = {
            ...formData,
        }
        setFormData(updatedFormData);

    }
    
    const dataCahngeHandler = (e) => {

        const value = e.target.value;
        const id = e.target.id;
        formData.data.splice(id, 1, value);
        const updatedFormData = {
            ...formData,
        }
        setFormData(updatedFormData);

    }

    const colorCahngeHandler = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        formData.backgroundColor.splice(id, 1, value);
        const updatedFormData = {
            ...formData,
        }
        setFormData(updatedFormData);
    }


    return (
        <form>
            <h2>{formData.name} Info</h2>
            <div className='formContainer'>
                <span>Label: </span>
                <input type={`text`} value={formData.label } onChange={ labelCahngeHandler }/>
                <br />
                <h4>labels:</h4>
                {
                    formData.labels.map((item, index) =>
                        <div className='labelContainer'  key={index}>
                            <span> {+index + 1}: </span>
                            <input id={index} type={`text`} value={item} onChange={ labelsCahngeHandler }/>
                        </div>)

                }
                <br />
                <h4>Data:</h4>
                {
                    formData.data.map((item, index) =>
                        <div  key={index}>
                            <span> {+index + 1}: </span>
                            <input id={index} type={`number`} value={item} onChange={ dataCahngeHandler }/>
                        </div>
                    )
                }
                <br />
                <h4>Colors:</h4>
                {
                    formData.backgroundColor.map((item, index) =>
                        <div key={index} >
                            <span> {+index + 1}: </span>
                            <input id={index} type={`color`} value={ item } onChange={ colorCahngeHandler }/>
                        </div>
                    )
                }
            </div>
        </form>
    )
}

export default PieChartForm