import {Formik, Form, Field} from 'formik';
import {LoginSchema} from '../../schemas';

import CustomField from '../CustomField';
import  './login.css'

function LoginForm() {

    const initialValues = {
        email: '',
        pass: '',
        remember: false
    }

    const submitHandler = (values, actions) => {
        console.log(values);
    }

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={LoginSchema}>
            {(formikProps) => (
                <Form>
                    <center>
                 <h1 className="title">LOGIN TO YOUR ACCOUNT</h1>
                 <div className="loginview"> 
               <div> <CustomField  className="emailfield"  name="email"  placeholder="Email address"/></div>
               <div> <CustomField className="password"  name="password" placeholder="Password"/></div>
                 </div>
             <div className="check"> <div className="checkiput1"><label><input className="checkinput"  name="newsletter" type="checkbox" />Remember me </label> </div>
             <div className="forgotpassword">Forgot password</div>
             </div>
             <div className="button">
             <button className="LOGIN"> LOGIN</button>
             <button className="Google"><div className="text"> Sign in with Google </div></button>
             </div>
                 </center>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;