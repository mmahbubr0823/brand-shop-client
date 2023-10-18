import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authContext } from '../../AuthProvider/MyAuthContext';
import SocialLogin from './SocialLogin';

const Login = () => {
    const {logInUser} = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // login user 
        logInUser(email, password)
        .then(result =>{
            toast.success('User successfully logged in');
           navigate(location?.state ? location.state : '/');
            
        })
        .catch(err =>{
            toast.error('Your credentials do not match');
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-10 rounded-xl">
                <div className="hero-content flex-col gap-16 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn bg-purple-400 p-2 rounded-lg' value ="Login" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className="mb-6 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            New in here?
                            <Link
                                className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                to="/registration"
                            >
                                Register Now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;