import cx from 'classnames';
import styles from './Field.module.css';
import  {Field} from 'formik';

function CustomField(props) {

    return (
        <Field {...props}>
        {({ field, form, meta }) => {
            
            
            return (               
            
            <div>
                <input 
                type="text" {...field}
            /*    placeholder="first"*/ {...props}  />
            {meta.touched &&
                meta.error && 
                <div className={styles.error}>{meta.error}</div>} 
            </div>
        )}}
 </Field>
    )
}


export default CustomField;