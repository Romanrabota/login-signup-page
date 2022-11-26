import {Formik, Form, Field,ErrorMessage} from 'formik';
import {SignUpSchema} from '../../schemas';

import CustomField from '../CustomField';
import  './signup.css'

function SignUpForm(props) {

    const initialValues = {
        firstName:'',
        lastName:'',
        displayName:'',
        email: '',
        password: '',
        passConfirm:'',
        role: '',
        subscribe: false,
    }

    const submitHandler = (values, actions) => {
        console.log(values);
    }

    return (
           <Formik 
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={SignUpSchema}>
            {(formikProps) => (
                <Form>
                 <center>
                    <h1 className="titlesignup">CREATE AN ACCOUNT</h1>
                    <h2 className="title1">We always keep your name and email address <br/> private.</h2>
                <div className="view">
               <div> <CustomField name="firstName" placeholder="firstName"/> </div>
               <div><CustomField name="displayName" placeholder="displayName"/> </div>
               <div> <CustomField name="password" placeholder="password"/></div>
              <div> <CustomField name="lastName" placeholder="lastName"/> </div>             
              <div> <CustomField name="email" placeholder="Email"/>   </div>               
              <div> <CustomField name="passConfirm" placeholder="Password Confirm"/>  </div> 
                 </div>


               <div className="radioselect"> <div className="Select"><div><Field  className="radio1" type="radio" name="role" value="buyer"/>  </div> 
               <div className="Join">  Join As a Buyer </div> </div> 
                  <div className="text1">   I am looking for a Name, Logo or Tagline for my business, brand or product.</div>  
                </div>
                <div className="radioselect"> <div className="Select"><div><Field  className="radio1" type="radio" name="role" value="buyer"/>  </div> 
               <div className="Join">Join As a Creative or Marketplace Seller</div> </div> 
                  <div className="text2"> I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.
</div>  
                </div>
                 
                <div className="check">
          <Field className="checkbox"  type="checkbox" id="allow" name="allow"/>
           <label for="allow" className="labow">Allow Squadhelp to send marketing/promotional offers from time to time</label>
              </div>

              <div className="button1">
             <button className="Create"> Create account</button>
            </div>

      <div className="term">By clicking this button, you agree to our <div className="link"> <a href="https://www.squadhelp.com/Terms&Conditions"> <u> Terms of Service.</u> </a> </div></div>
      <button className="Google1"><div className="text"> Sign in with Google </div></button>
                 <ErrorMessage name="role" component="div" style={{color:'red', border:'2px dotter red'}}/>
                 </center>
                </Form>
            )}
        </Formik>
    )
}

export default  SignUpForm;