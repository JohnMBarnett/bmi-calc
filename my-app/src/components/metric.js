import Background from "./styling-components/background";
import FormContainer from "./styling-components/box";
import React, {useState, useEffect} from "react";
import StyledLabel from "./styling-components/labels";
import StyledButton from "./styling-components/submitbutton";
import StyledForm from "./styling-components/form";
import FormPositioner from "./styling-components/formpositioner";
import StyledHomeLink from "./styling-components/homebutton";

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
                <StyledForm  onSubmit={handleSubmit}>
                    <FormPositioner>
                        <StyledLabel>Height(cm):</StyledLabel>
                        <input 
                            name='height'
                            type='number'
                            value={formValue.height}
                            placeholder='Enter your heighth!'
                            onChange={change}
                        /><br></br>
                        <StyledLabel>Weight(kg):</StyledLabel>
                        <input 
                            name='weight'
                            type='number'
                            value={formValue.weight}
                            placeholder='Enter your weight!'
                            onChange={change}
                        /><br></br>
                        <StyledButton>Submit</StyledButton>
                    </FormPositioner>
                </StyledForm>
                <h1>You have a B.M.I. of {bmi}</h1>
                <h2>{health}</h2>
            </FormContainer>
            <StyledHomeLink to='/imperial'>Imperial</StyledHomeLink>
        </Background>
    )
}

export default MetricForm;