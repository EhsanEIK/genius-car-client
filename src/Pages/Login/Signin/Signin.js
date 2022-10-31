import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/login/login.svg';

const Signin = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row lg:gap-48 gap-10">
                <div className="text-center">
                    <img src={image} alt="" />
                </div>
                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-10 mt-2">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p className="label-text-alt text-orange-600">New in Genius Car?
                                    <Link to='/signup' className='link link-hover '> Sign Up</Link>
                                </p>
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600 border-0" value="Sign in" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;