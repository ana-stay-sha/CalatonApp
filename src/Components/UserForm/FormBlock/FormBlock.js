import style from './FormBlock.module.css'

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
// import validationsSchema from '../../Validation/ValidationsSchema' 

// import AddFile from './Comp/addFiles/AddFile';
// import Consent from './Comp/consent/Consent';


function FormBlock(){
    const validationsSchema = yup.object().shape({
      name: yup.string()
        .min(2, 'Username must be atleast 2 charactrs long, Please Try Again')
        .max(20, 'Too Long, Please Try Again')
        .required('Cant be blank')
        .matches('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$', 'Use only Latin characters, Please Try Again'),
      email: yup.string()
        .required('Cant be blank') 
        .matches('/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i', 'Invalid email, Please Try Again'), //не работает регулярка
    })
    

    return(
        <div>
           <Formik
            initialValues={{ 
                name: '', 
                email: '', 
                specialty: '', 
                education: '', 
                experience: '', 
                textarea: '', 
                file: '', 
                checkbox: 'false' 
            }}
            validateOnBlur
            onSubmit={(values) => {console.log(values)}} 
            validationSchema={validationsSchema}
            >
            
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <Form>
                <Field type="text" 
                        name="name" 
                        className={style.input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}  
                        placeholder="Full Name" />

                    {/* <ErrorMessage name="name" component="span" className={style.errorMessage} /> */}
                    {touched.name && errors.name && <p className={style.errorMessage}>{errors.name} </p> }
                    {/* <Field name="name" /> {errors.name && touched.name ? ( <div>{errors.name}</div>) : null} */}


                    <Field 
                        name="email"
                        type="email" 
                        className={style.input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}  
                        placeholder="Email"/>
                    {/* <ErrorMessage name="email" component="span" className={style.errorMessage} /> */}
                    {touched.email && errors.email && <p className={style.errorMessage}>{errors.email} </p> }

                    <Field name="specialty" as="select" className={`${style.input} ${style.select}`}> 
                        <option defaultValue>Specialty</option>
                        <option value="Mobile development">Mobile development</option>
                        <option value="Front-end development">Front-end development</option>
                        <option value="Back-end development">Back-end development</option>
                        <option value="QA engineering">QA engineering</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                    </Field>
                    <ErrorMessage name="specialty" component="span" className={style.errorMessage} />
                   
                    <Field 
                        name="education"
                        type="text"
                        className={style.input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.education}
                        placeholder="Education"   />
                    <ErrorMessage name="education" component="span" className={style.errorMessage} />

                    <Field 
                        name="experience"
                        type="text" 
                        className={style.input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.experience}
                        placeholder="Work experience" />
                    <ErrorMessage name="experience" component="span" className={style.errorMessage} />

                    <p className={style.inputTitle}>Write a few words about yourself</p>
                    <Field  
                        name="textarea"
                        as="textarea"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.experience}
                        className={`${style.input} ${style.textarea}`} />
                    <ErrorMessage name="textarea" component="span" className={style.errorMessage} />

                    <div className={style.block}>
                      <div className={style.title}>Attach your resume here <br /> (not more than 10 mb)</div>  
                          <div className={style.wrapperLabel}>
                              <label className={style.labelBlock} htmlFor="upload-file__input">
                                  <span className={style.label}>Attach file</span>
                                  <span><img className={style.icon} src="../../../icon add file.png" alt="Выбрать файл" /></span>
                              </label>
                              <Field 
                                type="file"
                                name="file"
                                id="upload-file__input"
                                className={style.file}
                                multiple
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.file}/> 
                              <img className={style.rectangle} src="../../../Rectangle 5268.png" alt="rectangle" />
                          </div>  
                      </div>          

                    <div className={style.linkBlock}>
                        <p className={style.linkTitle}>Or add a link  here</p>
                        <div className={style.linkWrapper}>
                            <Field className={style.link} type="url" name="link" />
                        </div>
                    </div>

                    {/* <Consent /> */}
                    <div className={style.consent}>
                        <div className={style.consentWrapper}>
                            <div className={style.checkbox}>
                                <input type="checkbox" id="checkbox" className={style.hiddenCheckbox} />
                                <label className={style.consentLabel} htmlFor="checkbox">If consent to having Calaton Systems LLC collect and process my personal details according to its Privacy Policy.</label>                                          
                            </div>
                        <ErrorMessage name="checkbox" component="span" className={style.errorMessage} />
                        </div>

                        <div className={style.buttonBlock}>
                            <button 
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={'submit'}
                                className={style.submitBtn}
                                > Submit
                            </button>
                        </div>
                    </div>
                </Form>
                ) }
            </Formik>
        </div>
    )
}

export default FormBlock
