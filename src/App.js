import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/home';
import ProjectSection from './components/ProjectSection';
import ProjectSelector from './components/ProjectSelector';
import Skill from './components/skillSection';
// import { HR } from "flowbite-react";
// import Matrix from './components/matrix_animation';
import Certification from './components/certification';
import About from './components/about';

function App() {

  const [selectedDomain,setSelectedDomain]=useState('fullstack');
  const handleDomainSelect=(domain)=>{
    setSelectedDomain(domain);
  };
  return (
    <div className="h-full bg-gradient-to-b from-black via-gray-900 to-gray-500" >
    <Navbar/>
    <Home />
   
    <section id="About"className='min-h-screen p-10 bg-gray-800 text-white rounded-lg m-5 shadow-xl shadow-purple-500 text-justify' >
      <h1 className='text-4xl pb-2'>About Section</h1>
      < About/>
    </section>
    <button onClick={()=>window.scrollTo(0,0)} className='bg-purple-500 p-2 rounded text-white ml-5 '> Go Back</button>

    <br></br>



   
    <section id="Skills"className='min-h-screen p-10 m-5 bg-gray-800 text-white rounded-lg shadow-xl shadow-purple-500  text-justify' >
      <h1 className='text-4xl pb-2'>Skills:</h1>
      <br></br>
      <br></br>
      <h1 className='font-bold text-2xl text-purple-900'>PROGRAMMING SKILL</h1><br></br>
       <Skill />
       <br></br>
       <hr></hr>

       <h1 className='font-bold text-2xl text-purple-900 pt-2' >INTERNSHIPS </h1>
       <Certification/>
    </section>
    <button onClick={()=>window.scrollTo(0,0)} className='bg-purple-500 p-2 rounded text-white ml-5 '> Go Back</button>
    <br></br>






    <section id="Projects"className='min-h-screen p-10 m-5 bg-gray-800  rounded-lg shadow-xl shadow-purple-500 ' >
      <div className='container mx-auto p-4'>
        <h1 className='text-4xl text-white mb-6'>My Projects</h1>
     <ProjectSelector onSelectDomain={handleDomainSelect} />
     <ProjectSection domain={selectedDomain} />
     </div>
    </section>
    <button onClick={()=>window.scrollTo(0,0)} className='bg-purple-500 p-2 rounded text-white ml-5 '> Go Back</button>
    <br></br>
   
   
    </div>
    
  );
}

export default App;
