import Background from "./background";
import FormContainer from "./box";
import React, {useState, useEffect} from "react";

const initialFormValues = {
    height: 0,
    weight: 0
};

const MetricForm = () => {
    const [formValue, setFormValue] = useState(initialFormValues);
    const [bmi, setBmi] = useState(0)
    const [health, setHealth] = useState('');

    const healthTest = () => {
        if (bmi < 18) {
            setHealth('You are underweight!');
        } else if (bmi <= 25) {
            setHealth('You are a normal weight');
        } else if (bmi <= 29) {
            setHealth('You are overweight!')
        } else {
            setHealth('You are obese!')
        }
    }

    const change = (evt) => {
        const { type, name, value, checked } = evt.target;

        const newValue = type === "checkbox" ? checked : value;

        setFormValue({ ...formValue, [name]: newValue });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setBmi(Math.round((formValue.weight / (formValue.height * formValue.height)) * 10000))
    }

    useEffect(() => {
      healthTest()      
    })

     return (
        <Background>
            <FormContainer>
                <h1>B.M.I. Calculator</h1>
                <form  onSubmit={handleSubmit}>
                    <label>Height(cm):</label>
                    <input 
                        name='height'
                        type='number'
                        value={formValue.height}
                        placeholder='Enter your heighth!'
                        onChange={change}
                    /><br></br>
                    <label>Weight(kg)</label>
                    <input 
                        name='weight'
                        type='number'
                        value={formValue.weight}
                        placeholder='Enter your weight!'
                        onChange={change}
                    /><br></br>
                    <button>Submit</button>
                </form>
                <h2>You have a B.M.I. of {bmi}</h2>
                <h3>{health}</h3>
            </FormContainer>
        </Background>
    )
}

export default MetricForm;