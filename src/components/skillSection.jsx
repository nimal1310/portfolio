import React from 'react';

const skills=['Python','Bash','Java','C',];

const Skill = () =>{
    return(   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 ">
            {skills.map((skill,index)=>(
                <div
                key={index}
                className='bg-gray-500 p-2 text-white rounded-lg shadow-lg shadow-purple-300 hover:scale-105 transition-transform duration-300'
                > 
                <span className='text-2xl font-bold'>{skill}</span>
                </div>
            
           ))}

        </div>

 );


};

export default Skill;
