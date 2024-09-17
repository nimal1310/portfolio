import React from 'react';

const About=()=>
    {
        return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 '> 
        <div className='bg-gray-500 rounded-lg shadow-lg text-white p-4 hover:scale-105 tranisition-transform duration-300 shadow-lg shadow-purple-400'>
            <p className='underline text-purple-900 font-bold text-xl'>College Details:</p>
            <h1><span className='font-bold '>College:</span> RAJALAKSHMI ENGINEERING COLLEGE</h1>
            <h2><span className='font-bold'>Department:</span> Artificial Intelligence & Machine Learning.</h2>
            <h3><span className='font-bold'>CGPA:</span> 8.55</h3>
            <h4><span className='font-bold'>Year:</span> IV</h4>

        </div>

        <div className='bg-gray-500 rounded-lg shadow-lg text-white p-4 gap-6 text-justify hover:scale-105 tranisition-transform duration-300 shadow-lg shadow-purple-400'>
            <p className='underline text-purple-900 font-bold p-2 text-xl'>Schooling:</p>
            <h1><span className='font-bold'>SHCOOL:</span> SREE NARAYANA GURU MATRIC HIGHER SECONDARY SCHOOL</h1>
            <h2><span className='font-bold'>Department:</span> COMPUTER MATHS</h2>
            <h3><span className='font-bold'>PER(%):</span> 92.60</h3>
            <h4><span className='font-bold'>CLASS:</span> 12</h4>

        </div>
        <div className='bg-gray-500 rounded-lg shadow-lg text-white p-4 gap-6 text-justify hover:scale-105 tranisition-transform duration-300 shadow-lg shadow-purple-400'>
            <p className='underline text-purple-900 font-bold p-2 text-xl'>Schooling:</p>
            <h1><span className='font-bold'>SHCOOL:</span> SREE NARAYANA GURU MATRIC HIGHER SECONDARY SCHOOL</h1>
            <h3><span className='font-bold'>PER(%):</span> 94.83</h3>
            <h4><span className='font-bold'>CLASS:</span> 10</h4>

        </div>

        </div>
        

        )
    }

export default About;
