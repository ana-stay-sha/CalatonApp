const FormValidateEmail = (values) => {
    const errors = {}
    
        if (!values.email) {
            errors.email = 'Cant be blank';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address, Please Try Again';
        }
        return errors;
}

export default FormValidateEmail;