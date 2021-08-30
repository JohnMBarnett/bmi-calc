import Background from "./styling-components/background";
import FormContainer from "./styling-components/box";
import React, {useState, useEffect} from "react";
import StyledLabel from "./styling-components/labels";
import StyledButton from "./styling-components/submitbutton";
import StyledForm from "./styling-components/form";
import FormPositioner from "./styling-components/formpositioner";
import StyledHomeLink from "./styling-components/homebutton";
import * as yup from 'yup';
import schema from './formvalidation/formschema';

const initialFormValues = {
    weight: undefined,
    health: undefined
}

const initialFormErrors = {
    weight: '', 
    height: ''
  }

const initialDisabled = true

const MetricForm = () => {
    const [formValue, setFormValue] = useState(initialFormValues);
    const [bmi, setBmi] = useState(0)
    const [health, setHealth] = useState('');
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled) 

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

    const validate = (name, value) => {
        yup.reach(schema, name)
          .validate(value)
          .then(() => setFormErrors({...formErrors, [name]: '' }))
          .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
      }

    const change = (evt) => {
        const { type, name, value, checked } = evt.target;
        const newValue = type === "checkbox" ? checked : value;
        validate(name, newValue)
        if(newValue >= 0) {
            setFormValue({ ...formValue, [name]: newValue });
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setBmi(Math.round((formValue.weight / (formValue.height * formValue.height)) * 10000))
        setFormValue(initialFormValues);
        document.forms["id_form"].reset();
    }


    useEffect(() => {
        healthTest();
    })

    useEffect(() => {
        schema.isValid(formValue).then(valid => setDisabled(!valid));
      }, [formValue])

    return (
        <Background>
            <FormContainer>
                <h1>B.M.I. Calculator</h1>
                <h2>{formErrors.height}</h2>
                <h2>{formErrors.weight}</h2>
                <StyledForm id='id_form' onSubmit={handleSubmit}>
                    <FormPositioner>
                        <StyledLabel>Height(cm):</StyledLabel>
                        <input id='height'
                            name='height'
                            type='number'
                            value={formValue.height}
                            placeholder='Enter your heighth!'
                            onChange={change}
                        /><br></br>
                        <StyledLabel>Weight(kg):</StyledLabel>
                        <input id='weight'
                            name='weight'
                            type='number'
                            value={formValue.weight}
                            placeholder='Enter your weight!'
                            onChange={change}
                        /><br></br>
                        <StyledButton disabled={disabled}>Submit</StyledButton>
                    </FormPositioner>
                </StyledForm>
                <h1 id="bmi">You have a B.M.I. of {bmi}</h1>
                <h2>{health}</h2>
            </FormContainer>
            <StyledHomeLink to='/imperial'>Imperial</StyledHomeLink>
        </Background>
    )
}

export default MetricForm;