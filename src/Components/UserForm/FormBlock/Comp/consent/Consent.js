import style from './Consent.module.css'

import {Formik, Form, Field, ErrorMessage} from 'formik';

function Consent(){
    return(
        <div className={style.consent}>
            <div className={style.consentWrapper}>
                <div className={style.checkbox}>
                    <input type="checkbox" id="checkbox" className={style.hiddenCheckbox} />
                    <label className={style.consentLabel} htmlFor="checkbox">If consent to having Calaton Systems LLC collect and process my personal details according to its Privacy Policy.</label>                                          
                </div>
                <ErrorMessage name="checkbox" component="span" className={style.errorMessage} />
            </div>

            <div className={style.buttonBlock}>
                <button type="submit" className={style.submitBtn} disabled={isSubmitting}>
                    Submit
                </button>
            </div>
        </div>  
    )
}
export default Consent