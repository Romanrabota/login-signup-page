import '../App.css';
import LoginForm from '../components/Login';
import Header from '../components/Header/index.js';
import {Link} from 'react-router-dom';

function LoginPage(props) {


    return (
        <section className='background'>
            <Header>
                {/*<button className="Signup">SignUp</button>*/}
                <div className="Signup"><Link className="Link" to ='/signup'><div className="in">Signup</div></Link></div>
            </Header>
            <LoginForm />
        </section>
    )
}

export default LoginPage;