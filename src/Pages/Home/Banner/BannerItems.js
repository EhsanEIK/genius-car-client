import React from 'react';
import './BannerItems.css';

const BannerItems = ({ slider }) => {
    const { id, prev, next, image } = slider;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='image-gradient'>
                <img src={image} className="w-full rounded-xl" alt='' />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-white text-6xl font-bold'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/4 w-2/4">
                <p className='text-white text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nam aperiam beatae laboriosam harum assumenda aliquid corrupti distinctio quo temporibus.
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-warning mr-5">Discover More</button>
                <button className="btn btn-outline">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;