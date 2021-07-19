import UserForm from './Components/UserForm/UserForm';

// import './App.css';
// import {Formik, Form, Field, ErrorMessage} from 'formik';
// import * as Yup from 'yup';

// import FormValidateEmail from './Components/FormValidateEmail';
// import FormValidateName from './Components/FormValidateName';
// import FormValidateEducation from './Components/FormValidateEducation';



function App(){
    return(
        <div className="App">
            <UserForm />
        </div>

    //     <div className="App">
    //     <section className="contact-us">
    //     <h1 className="contact-us__title">Contact us</h1>

    //        <Formik
    //         initialValues={{ fullName: '', email: '', specialty: '', education: '', experience: '', textarea: '', file: '', checkbox: 'false' }}
    //         validate={FormValidateEmail}
    //         onSubmit={(values, { setSubmitting }) => {
    //             setTimeout(() => {
    //             alert(JSON.stringify(values, null, 2));
    //             setSubmitting(false);
    //             }, 400);
    //         }}>
    //         {({ isSubmitting }) => (
                
    //             <Form>
    //                 <Field className="form__input" type="text" id="fullName" name="fullName" placeholder="Full Name"/>
    //                 <ErrorMessage name="fullName" component="span" className="error-message" />

    //                 <Field type="email" name="email" className="form__input" id="email" placeholder="Email"/>
    //                 <ErrorMessage name="email" component="span" className="error-message" />

    //                 <Field name="specialty" as="select" className="form__select form__input"> 
    //                     <option defaultValue>Specialty</option>
    //                     <option value="Mobile development">Mobile development</option>
    //                     <option value="Front-end development">Front-end development</option>
    //                     <option value="Back-end development">Back-end development</option>
    //                     <option value="QA engineering">QA engineering</option>
    //                     <option value="UI/UX Design">UI/UX Design</option>
    //                 </Field>
    //                 <ErrorMessage name="specialty" component="span" className="error-message" />
                   
    //                 <Field  className="form__input" type="text" id="education" name="education" placeholder="Education" />
    //                 <ErrorMessage name="education" component="span" className="error-message" />

    //                 <Field  className="form__input" type="text" id="experience" name="experience" placeholder="Work experience" />
    //                 <ErrorMessage name="experience" component="span" className="error-message" />

    //                 <p className="input__title">Write a few words about yourself</p>
    //                 <Field  className="form__textarea form__input"  as="textarea" name="textarea" id="textarea" />
    //                 <ErrorMessage name="textarea" component="span" className="error-message" />
       
    //                 <div className="form__input-block file-block">
    //                     <div className="file-block__title input__title">Attach your resume here <br /> (not more than 10 mb)</div>  
    //                     <div className="upload-file__wrapper">
    //                         <label className="upload-file__label " htmlFor="upload-file__input">
    //                             <span className="input__file-button-text">Attach file</span>
    //                             <span className="input__file-icon-wrapper"><img className="input__file-icon" src="./icon add file.png" alt="Выбрать файл" /></span>
    //                         </label>
    //                          <Field className="input__file" type="file" id="upload-file__input" name="file" multiple/> 
    //                         <img className="input__file-rectangle" src="./Rectangle 5268.png" alt="rectangle" />
    //                     </div>  
    //                 </div>   

    //                 <div className="form__link-block">
    //                     <p className="input__title link__title">Or add a link  here</p>
    //                     <div className="input-link__wrapper">
    //                         <Field className="input__link " type="url" name="link" />
    //                     </div>
    //                 </div>

    //                 <div className="form__consent-block">
    //                     <div className="consent__wrapper">
    //                         <div className="consent__checkbox">
    //                             <input type="checkbox" id="checkbox" className="custom-checkbox" />
    //                             <label className="consent__label" htmlFor="checkbox">If consent to having Calaton Systems LLC collect and process my personal details according to its Privacy Policy.</label>                                          
    //                         </div>
    //                     <ErrorMessage name="checkbox" component="span" className="error-message" />
    //                     </div>

    //                     <div className="form__button-block">
    //                         <button type="submit" className="form__submit-btn" disabled={isSubmitting}>
    //                             Submit
    //                         </button>
    //                     </div>
    //                 </div>

                    
    //                 </Form>)}
    //             </Formik>
    //     </section>
    //  </div>
    )
}


export default App;
