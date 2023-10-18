import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/MyAuthContext";
const SocialLogin = () => {
    const { googleLogIn } = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();


    // social log in 
    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                toast.success('User successfully logged in');
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div className='text-center'>
            <h1>Or</h1>
            <button onClick={handleGoogleLogin} className='flex items-center mb-3 mx-auto gap-5 border-2 px-10 py-4 rounded-[50px]'>
                <span><FaGoogle></FaGoogle></span>
                <p>Continue with google</p>
            </button>
        </div>
    );
};

export default SocialLogin;