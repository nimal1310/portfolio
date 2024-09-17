import React from 'react';

const ProjectSelector = ({onSelectDomain})=>
    {
const handleChange= (e) =>
    {
        onSelectDomain(e.target.value)
    };
    return(
 
  <select className='p-2 border-2 rounded-lg text-purple-900 bg-white-900 font-bold' onChange={handleChange}>
   <option value="fullstack" className='font-bold'>FullStack</option>
   <option value="ml" className='font-bold'>Machine Learning</option>
   <option value="ethicalhacking" className='font-bold'>Ethical Hacking</option>
   
  </select>
 




    );




    };

export default ProjectSelector;
