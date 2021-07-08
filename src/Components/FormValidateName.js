const FormValidateName = (values) => {
    const errors = {}
    const regName = /^[A-z\u00C0-\u00ff\.,-\/#!$%\^&\*;:{}=\-_`~()]+$/;
        // if (!values.fullName) {
        //     errors.fullName = 'Cant be blank';
        // } else if (fullName.length > 0 && fullName.length <= 2) {
        //     errors.fullName = 'Username must be atleast 2 charactrs long, Please Try Again'
        // } else if (fullName.length > 0 && !regName.test(fullName)) {
        //     errors.fullName = 'Use only Latin characters, Please Try Again'
        // }
        // return errors;
}

export default FormValidateName;
