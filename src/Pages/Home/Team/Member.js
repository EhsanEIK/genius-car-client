import React from 'react';
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Member = ({ member }) => {
    const { image, name, designation } = member;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-8">
            <figure><img src={image} alt="" className='w-full h-full rounded-xl' /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-lg text-gray-600 font-semibold">{designation}</p>
                <div className='flex justify-center gap-4'>
                    <FaFacebook className='w-6 h-6 text-blue-900 hover:cursor-pointer'></FaFacebook>
                    <FaTwitterSquare className='w-6 h-6 text-sky-600 hover:cursor-pointer'></FaTwitterSquare>
                    <FaLinkedin className='w-6 h-6 text-blue-700 hover:cursor-pointer'></FaLinkedin>
                    <FaInstagramSquare className='w-6 h-6 text-rose-600 hover:cursor-pointer'></FaInstagramSquare>
                </div>
            </div>
        </div>
    );
};

export default Member;