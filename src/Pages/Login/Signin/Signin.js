import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/login/login.svg';
import { AuthContext } from '../../../contexts/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const Signin = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    // sign in with email & password
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                alert('user login successfully');
                form.reset();
            })
            .catch(error => console.error(error));
    }

    // sign in with google
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                alert('user login successfully with Google');
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row lg:gap-48 gap-10">
                <div className="text-center">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <h1 className="text-5xl font-bold text-center mb-10 mt-2">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="label-text-alt text-orange-600">New in Genius Car?
                                        <Link to='/signup' className='link link-hover '> Sign Up</Link>
                                    </p>
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 border-0">Sign in</button>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} className="btn btn-warning">Google Sign  In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Signin;