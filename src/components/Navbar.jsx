import React,{useState} from "react";

const Navbar=()=>{
    const [isOpen ,setIsOpen]=useState(false);
    return (
        <nav className="bg-gradient-to-r from-gray-800 via-purple-900 to-gray-800 text-white ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="text-2xl font-bold">
                        My Portfolio
                    </div></div>
                    <div className="hidden md:flex space-x-6">
                         <a href="Profile" className="hover:text-blue-400">Profile</a>
                        <a href="#About" className="hover:text-blue-400">About</a>
                        
                        <a href="#Skills" className="hover:text-blue-400">Skills</a>
                        <a href="#Projects" className="hover:text-blue-400">Projects</a>
                        {/* <a href="#contact" className="hover:text-blue-400">contact</a> */}
                    </div>
                    <div className="md:hidden">
                        <button
                        onClick={()=>setIsOpen(!isOpen)}
                        className="focus:outline-none text-white"
                        >
                           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                           </svg>
                        </button>
                    </div>
                </div>
                </div> 
                {isOpen && (
        <div className="md:hidden">
            <a href="#Profile" className="block px-4 py-2 text-sm hover:text-blue-400">Profile</a>
          <a href="#About" className="block px-4 py-2 text-sm hover:text-blue-400">About</a>
          <a href="#Skills" className="block px-4 py-2 text-sm hover:text-blue-400">Skills</a>
          <a href="#Projects" className="block px-4 py-2 text-sm hover:text-blue-400">Projects</a>
          
          {/* <a href="#contact" className="block px-4 py-2 text-sm hover:text-blue-400">Contact</a> */}
            </div>
                )}
        </nav>
    )
}
export default Navbar;