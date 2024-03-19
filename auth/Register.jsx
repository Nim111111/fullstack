import {Link} from 'react-router-dom'
import '../../assets/css/SignUp.css'; // Assuming this is the correct path to your CSS file
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa'; // Assuming you want to include icons for input fields

function SignUp() {
    return (
        <div className='signup-background'>
            <div className='signup-outline'>
                <div className='signup-wrapper'>
                    <form action="">
                        <h1>Sign Up</h1>
                        <div className='input-box full-name'>
                            <input type="text" placeholder='Full Name' />
                            <FaUser className='icon' />
                        </div>
                        <div className='input-box username'>
                            <input type="text" placeholder='Username' />
                            <FaUser className='icon' />
                        </div>
                        <div className='input-box password'>
                            <input type="password" placeholder='Password' />
                            <FaLock className='icon' />
                        </div>
                        <div className='input-box re-enter-password'>
                            <input type="password" placeholder='Re-enter Password' />
                            <FaLock className='icon' />
                        </div>
                        <div className='input-box email'>
                            <input type="email" placeholder='Email' />
                            <FaEnvelope className='icon' />
                        </div>
                        <div className='input-box phone-number'>
                            <input type="tel" placeholder='Phone Number' />
                            <FaPhone className='icon' />
                        </div>
                        <button type='submit'>Sign Up</button>
                        <div className='register-link'>
                            <p>Already have an account? <a href="/login"><Link to='/auth/login'>Login</Link></a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
