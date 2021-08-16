import style from './FormBlock.module.css'

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

function FormBlock(){

    const validationsSchema = yup.object().shape({
        
      name: yup.string()
        .min(2, 'Username must be atleast 2 charactrs long, Please Try Again')
        .max(20, 'Too Long, Please Try Again')
        .required('Cant be blank')
        .matches('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$', 'Use only Latin characters, Please Try Again'),
      email: yup.string()
        .required('Cant be blank') 
        .email('Invalid email'),
      specialty: yup.string()
        .required('You must choose one of the options'),
      education: yup.string()
        .required('Cant be blank'),
      experience: yup.string()
        .required('Cant be blank'),
      textarea: yup.string()
        .required('Cant be blank'),
      attachment: yup.mixed()
        // .required("You need to provide a file")
        // .test("fileSize", "The file is too large", (value) => {
        // return value && value[0].sienter code hereze <= 2000000;
        // })
        // .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc", (value) => {
        //     // console.log(attachment.value)
        //     return value && (
        //         value[0].type === "image/jpeg" ||
        //         value[0].type === "image/bmp" ||
        //         value[0].type === "image/png" ||
        //         value[0].type === 'application/pdf' ||
        //         value[0].type === "application/msword"
        //     );
        // }),
        // .test('fileFormat', 'PDF only', (value) => {
        //     console.log(value); 
        //     return value && ['application/pdf'].includes(value.type);
        // })
        // .test("fileSize", "The file is too large", (value) => {
        //     if (!value.size) return true // attachment is optional
        //     return value[0].size <= 2000000
        //   })
        .test((value => {
            console.log(value.size)
        }) )
        .required('You need add a link or resume file, Please Try Again'),
      link: yup.string()
        .url()
        .required('You need add a link or resume file, Please Try Again'),
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
                link: '',
                checkbox: 'false' 
            }}
            validateOnBlur
            onSubmit={(values) => {console.log(values)}} 
            validationSchema={validationsSchema}
            
            >
            
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <Form>
                <div className={style.inputBlock} >
                    <Field type="text" 
                        name="name" 
                        className={style.input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}  
                        placeholder="Full Name" />
                    {touched.name && errors.name && <p className={style.errorMessage}>{errors.name} </p> }
                </div>

                <div className={style.inputBlock} >
                    <Field 
                        name="email"
                        type="email" 
                        className={style.input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}  
                        placeholder="Email"/>
                    {touched.email && errors.email && <p className={style.errorMessage}>{errors.email} </p> }
                </div>

                <div className={style.inputBlock} >
                    <Field name="specialty" as="select" className={`${style.input} ${style.select}`}> 
                        <option defaultValue>Specialty</option>
                        <option value="Mobile development">Mobile development</option>
                        <option value="Front-end development">Front-end development</option>
                        <option value="Back-end development">Back-end development</option>
                        <option value="QA engineering">QA engineering</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                    </Field>
                    {touched.specialty && errors.specialty && <p className={style.errorMessage}>{errors.specialty} </p> }
                </div>   

                <div className={style.inputBlock} >
                    <Field 
                        name="education"
                        type="text"
                        className={style.input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.education}
                        placeholder="Education"   />
                     {touched.education && errors.education && <p className={style.errorMessage}>{errors.education} </p> }
                </div>

                <div className={style.inputBlock} >    
                    <Field 
                        name="experience"
                        type="text" 
                        className={style.input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.experience}
                        placeholder="Work experience" />
                    {touched.experience && errors.experience && <p className={style.errorMessage}>{errors.experience} </p> }
                </div>

                <div className={style.textareaBlock} >    
                    <p className={style.inputTitle}>Write a few words about yourself</p>
                    <Field  
                        name="textarea"
                        as="textarea"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.textarea}
                        className={`${style.input} ${style.textarea}`} />
                    {touched.textarea && errors.textarea && <p className={style.errorMessage}>{errors.textarea} </p> }
                </div>

                <div className={style.fileLinkBlock}>
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
                            <Field 
                                className={style.link} 
                                type="url" 
                                name="link" />
                        </div>
                    </div>

                    {touched.link && errors.link && <p className={style.errorMessage}>{errors.link} </p> }
                    {touched.file && errors.file && <p className={style.errorMessage}>{errors.file} </p> }
                </div>
                


                    <div className={style.consent}>
                        <div className={style.consentWrapper}>
                            <div className={style.checkbox}>
                                <input 
                                    type="checkbox" 
                                    id="checkbox" 
                                    name="checkbox"
                                    className={style.hiddenCheckbox} />
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
