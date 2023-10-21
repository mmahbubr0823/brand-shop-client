import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authContext } from '../../AuthProvider/MyAuthContext';

const Registration = () => {
    const { createUser } = useContext(authContext);
    const navigate = useNavigate();
    // handling form data 
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // password validation 
        if (!(/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/).test(password)) {
            return toast.error('Your password should contain at least one upperCase, one special character and more than 6')
        }
        // creating user 
        createUser(email, password)
            .then(result => {
                toast.success('User successfully created')
                navigate('/')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <div>
            <div className="hero rounded-xl mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card lg:w-[450px] flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body ">
                            <h1 className='text-2xl font-bold'>Sign up</h1>
                            <p>Enter your details to register.</p>
                            <div className="form-control mt-5">
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
                                <input type="submit" className='btn bg-[#eb6a6a] p-2 rounded-lg' value="Register" />
                            </div>
                        </form>
                        <p className="mb-6 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Already have an account?
                            <Link
                                className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                to="/login"
                            >
                                Sign in Now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;