import React from 'react'

export const Friend = () => {
  return (
    <div className='container'>
      <div className="w-[350px] h-[500px] border-2 border-[#074173] rounded-lg mt-10 flex flex-col gap-6 p-5 ">
        <h2 className='text-lg font-medium font-poppins mt-5 text-center'>People You may know</h2>
           <div className="singel_users flex justify-between mb-5 ">
             <div className='flex items-center gap-5'> 
                <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full overflow-hidden">
                 <img src="" alt="user photo" />
                 </div>
                 <h2 className='text-lg font-semibold'>lkhvvb</h2>
             </div>
             <div className="butts">
                 <button className='rounded-lg py-2 px-5 bg-[#074173] text-xl text-white font-normal'>Add</button>
             </div>
         </div>
      </div>
    </div>
  )
}
