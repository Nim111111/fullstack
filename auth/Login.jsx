
import {Link} from 'react-router-dom'
import '../../assets/css/Login.css'; // Assuming this is the correct path to your CSS file
import { FaLock, FaUser } from 'react-icons/fa';

function Loginn() {
    return (
        <div className='outline '>
            <div className='wrapper'>
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' />
                        <FaLock className='icon' />
                    </div>
                    <div className='forgot'>
                        <a href="/#"><Link to='/auth/forgot'>Forgot password?</Link></a>
                    </div>
                    <button type='submit'><Link to='/user/home'>Login</Link></button>
                    <div className='register-link'>
                        <p>Don't have an account? <a href="/#"><Link to='/auth/register'>Register</Link></a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Loginn;
