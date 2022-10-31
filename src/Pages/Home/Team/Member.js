import React from 'react';

const Member = ({ member }) => {
    const { image, name, designation } = member;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-8">
            <figure><img src={image} alt="" className='w-full h-full rounded-xl' /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-lg text-gray-600 font-semibold">{designation}</p>
            </div>
        </div>
    );
};

export default Member;