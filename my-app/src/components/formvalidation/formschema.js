import * as yup from 'yup';

let schema = yup.object().shape({
    weight: yup
        .string()
        .required('Please enter your weight!'),
    height: yup
        .string()
        .required('Please enter your height!')
})

export default schema