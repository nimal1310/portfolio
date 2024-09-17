import React from "react";


const project={
  fullstack:[  {title:'Chrome Page Clone',
  description:(<>The project is about cloning of Google search engine page with all the functionalities using tech stacks like 
  <span className="text-purple-900 hover:underline"> HTML,CSS </span>for template creation and 
  <span className="text-purple-900 hover:underline"> JS </span>for adding functionalities to webpage
  <br></br><br></br>
  <h1 className="italic font-bold">YEAR:2022</h1>
  </>),},
 {title:"Weather Application Using API",
 description:(<>This project is created to get the weather details of different parts of the world using 
 <span className="text-purple-900"> weather API.</span>
 <br></br><br></br>
 <h1 className="italic font-bold">YEAR:2022</h1>
 </>),},
 
 {
    title:'Portfolio Website',
    description:(<> 
    This project will display our skills and projects details in a digital & attractive format rather than in a simple white paper resume.
    <br></br>
    
    <h1><span className="font-bold">Usecase:</span> Creating easily accessible digital resume.</h1>
    <h1 className="font-bold">Tech:</h1>
    <span className="text-purple-900 hover:underline">React.js,Node.js,Tailwind Css</span>
    <h1 className="italic font-bold pt-2">YEAR:2024</h1>
    </>

    ),
 }

  ],
  ml:[{title:'Email Notification Application',
  description:(<>This is an automation project which enable the user to receive message from the ML application that contain the information of important events data,time and location.In which the NLP technolgoy analysis and extract the information from the user mail through an API call based on the priority of the message the applicaiton genarete a event alert to the user. 
  <br></br><br></br>
  <h1><span className="font-bold">Usecase:</span> To provide alert to user by analysing social media chats of the user.</h1><br></br>
  <span className="text-purple-900 hover:underline">ML,NLP,Firebase,Android studio</span>
  <h1 className="italic pt-2 font-bold">YEAR:2024</h1>
  </>),},

{title:"Hospital Readmission Prediction",
 description:(<>
 This project help the hospital management to predict the readmission rate of the patients using machine learning model trained with hospital data. It reduce the count of readmission in patients and also improve the treatment facility in hospital.
 <br></br><br></br>
 <h1 className="font-bold">Tech:</h1>
<span className="text-purple-900 hover:underline"> SVM model,Scikit Learn</span>
<span className="text-purple-900 hover:underline"> HTML,Css,Flask,Js</span>

<h1 className="italic pt-2 font-bold">YEAR:2024</h1>
 </>)
},


  ],
  ethicalhacking:[{title:'Network Intrusion Detection Project',
  description:(<>This project is about identifying and detecting intrusion or cyber attack carried out by attacker over network.It use the power of machine learning to identify the patterns present in past similar type of data and detect the anomaly in realtime network traffic.
  <h1><span className="font-bold">Usecase:</span>Detect the network anomaly using Machine Learning.</h1>
  <h1 className="font-bold">Tech:</h1>
  <span className="text-purple-900 hover:underline"> wireshark,Pcap file,ML model</span>
 <h1 className="italic pt-2 font-bold">On Going....</h1>
  </>),

}],
}

const ProjectSection =({domain})=>
    {
        const filteredProjects=project[domain];
        return(
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
             {filteredProjects.map((project,index)=>(
             <div key={index} className="p-4 bg-gray-500 text-white rounded-lg shadow-lg"> 
             <h2 className="text-xl font-bold p-2"> {project.title}</h2>
             <p>{project.description}</p>
             </div>
            ))}

            </div>
        )
    }
export default ProjectSection;