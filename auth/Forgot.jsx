import {Link} from 'react-router-dom'

function ForgotPassword() {
    return (
        <div className="outline">
            <div className="wrapper">
                <h2>Forgot Password</h2>
                <form>
                    <div className="input-box">
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <Link to='/auth/login' className='link'><button type="submit">Submit</button></Link>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
