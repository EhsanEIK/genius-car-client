import React, { useEffect, useState } from 'react';
import Member from './Member';

const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeam(data));
    }, [])

    return (
        <div className='my-32'>
            <p className="text-xl text-center text-orange-600 font-bold">Team</p>
            <h1 className="text-5xl text-center font-bold text-black my-6">Meet Our Team</h1>
            <p className='w-2/4 mx-auto text-center mb-20'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-14'>
                {
                    team.map(member => <Member
                        key={member._id}
                        member={member}></Member>)
                }
            </div>
        </div>
    );
};

export default Team;