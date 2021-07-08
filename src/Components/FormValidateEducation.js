const FormValidateEducation = (values) => {
    const errors = {}
        if (!values.education) {
            errors.education = 'Cant be blank';
        }
        return errors;
}

export default FormValidateEducation;
