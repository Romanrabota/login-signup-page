import '../App.css';
import SignUpForm from '../components/SignUp';
import Header from '../components/Header/index.js';
import {Link} from 'react-router-dom';

function SignUpPage(props) {


    return (
        <div>
        <section className='background'>
            <Header>
            <div className="Login"><Link className="Link" to ='/login'> <div className="loginin">Login</div></Link></div>
          {/*  <Link className="Link" to ='/signup'><div className="in">Signup</div></Link></div> */}
            </Header>
            <SignUpForm />
        </section>
        <div className="info">

    <div className="info1">
    <div className="infotitle">Why should I use Squadhelp? <br/></div>
   You always have an option of hiring a consultant or coming up with the name yourself. However, Squadhelp builds great brands that succeed faster by connecting you with the most creative people across the globe. Most importantly, Squadhelp provides you with choice: you get to see ideas from dozens (in some cases, hundreds) of contestants before you select a winner. 
   Typically, you would spend far less money with Squadhelp (our contests start at $199) than hiring an agency. Also, you will receive immediate results - most contests begin receiving submissions within minutes of starting.<br/>

   <div className="infotitle">How is Squadhelp Different?<br/></div>
   Since 2011, we have been committed to disrupting the traditional agency model. Our platform offers much more than a typical crowdsourcing experience. From Machine Learning to Audience Testing to Comprehensive Trademark Validation, you receive best-in-class support for your branding projects.

<div className="diffrenttittle">Breadth:</div>  Our Contest-Based Crowdsourcing approach allows you to receive an unmatched breadth of name ideas from dozens of unique, creative minds while working with the world's largest branding community.

<div className="diffrenttittle">Quality and Collaboration:</div>  Using an advanced Quality Scoring Algorithm, we ensure that you receive more ideas from our top-quality creatives, and we use Gamification best practices to encourage high-quality brainstorming and two-way communication throughout your contest.

<div className="diffrenttittle"> We don’t stop at ideation:</div> Choose your name with confidence through our high-end validation services. Poll your target demographics to get unbiased feedback on your favorite names, and receive Trademark Risk and Linguistics Analysis Reports developed by a Licensed Trademark Attorney.   
</div>


<div className="info2">
<div className="infotitle"> I’ve never used Squadhelp before. What should I expect? </div>
Most customers tell us that Squadhelp’s process is effective, easy, fast, and even fun. We constantly hear extremely positive feedback with respect to the breadth of ideas submitted to each contest, and many customers are surprised at how insightful working with dozens of creative individuals from across the globe can be.

<div className="infotitle">  How much does it cost?</div>
Our naming competitions start at $199, and our logo design competitions start at $299. Also, there are three additional contest level that each offer more features and benefits. See our Pricing Page for details.

<div className="infotitle">Do you offer any discount for multiple contests?</div>
Yes! We have many contest bundles - our most popular being our Name, Tagline, and Logo bundle. Bundles allow you to purchase multiple contests at one time and save as much as from $75 - $400. You can learn more about our bundle options on our Pricing Page.

<div className="infotitle"> Will you help me validate my name?</div>
Yes! We believe that validating and securing your name is a critical part of your branding process. Squadhelp offers domain checks, Trademark support, linguistics analysis, and professional audience testing to help you choose your name with confidence. We even have special prices for Trademark filing for our customers.

<div className="infotitle"> I have other questions! How can I get in touch with Squadhelp?</div>
Check out our  <a className="infoLink" href="http://help.squadhelp.com/">FAQs</a> or send us a  <a className="infoLink" href="#">message</a>. For assistance with launching a contest, you can also call us at (877) 355-3585 or schedule a <a className="infoLink" href="https://www.squadhelp.com/signup">Branding</a> <a className="infoLink" href="https://www.squadhelp.com/signup">Consultation</a> 
</div>



      
            
            
            
            
            
            </div> 
         </div>
    )
}

export default SignUpPage;