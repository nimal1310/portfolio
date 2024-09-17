import React from 'react';

const UserCard=()=> {
    
    return (
        // <div className='max-w-sm bg-cyan-800 rounded-lg overflow-hidden shadow-lg p-4 sm:max-w-full '>
        //     <div className='flex items-center justify-start h-screen'>
        //         <div className='max-w-sm bg-cyan-800 text-white rounded-lg shadow-lg p-4 mx-auto sm:max-w-full md:max-w-md lg:max-w-sm'>
        //         {/* <img className="w-full rounded-full h-48 mx-auto" src="/path-to-image.jp" alt="User" /> */}
        //         <div className='text-center mt-4'>
        //             <h2 className='text-xl font-bold text-white'>Nimal</h2>
        //             <p className='text-gray-400'>Full stack development</p>
        //             <p className='text-gray-400 mt-2'>Location:kancheepuram</p>
        //         </div>
        //     </div>
        // </div>


    
        <div className='flex items-center justify-start h-screen w-full mx-auto '>
            <div className='h-full max-w-sm bg-gradient-to-r from-gray-800 via-purple-900 to-gray-800 text-white rounded-lg shadow-lg lg:w-1/4 sm:p-8 md:p-8 w-1/2'>
            <div className='bg-gray-900 p-2 rounded-lg'>
                <img src="/images/id.jpeg" alt="person_id " className='w-full h-auto max-w-sm p-2  rounded-lg shadow-lg transition-transform duration-50 hover:scale-105' />
                </div>
                <div className='text-center mt-4 p-4 transition-opacity duration-50 hover:opacity-75'>
                <p className='text-xl font-bold'>Nimal N</p>
                <p className='text-sm text-gray-200'>Full stack developer</p>
                <p classname='text-sm text-gray-200'>Location : Kancheepuram</p>
                </div>
            </div>
        </div>
    );
    
};

export default UserCard;
