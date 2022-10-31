import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='my-20'>
            <div className="hero min-h-screen bg-base-200 p-20 pt-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={person} alt="" className='w-4/5 h-auto' />
                        <img src={parts} alt="" className='absolute w-3/5 h-4/5 right-5 top-1/2 border-8 border-white rounded-lg' />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-xl text-orange-600 font-bold">About Us</h1>
                        <p className="text-5xl font-bold text-black py-6">
                            We are qualified <br />
                            & of experience <br />
                            in this field
                        </p>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores hic, eos dolores corrupti neque aut reprehenderit alias numquam libero nihil eaque vitae ut repellendus vel, ab ipsa earum perspiciatis.</p>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quibusdam laboriosam dolor aliquid doloremque molestiae, ullam quo minima earum inventore.</p>
                        <button className="btn bg-orange-600 border-0">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;