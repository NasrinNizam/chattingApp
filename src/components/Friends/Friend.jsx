import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';

export const Friend = () => {
  // ========== data get from redux
  const sliceUser= useSelector((state)=>(state.counter.value)) 
  // ========= react variables
  const [friends , setFriends]  = useState([])

  // ========== firebase variables
     const db = getDatabase();
    //  =============== realtime database
    useEffect(()=>{
      const starCountRef = ref(db, 'friends/' );
      onValue(starCountRef, (snapshot) => {
        let arr = []
        snapshot.forEach((item)=>{
          arr.push({...item.val() , key:item.key})
        })
        setFriends(arr)
      });
    } , [])
  
    
  return (
    <div className='container  flex justify-center items-center'>
      <div className="p-5 bg-[#074173] bg-opacity-50 h-[500px] border-2 border-[#074173] rounded-lg mt-10 flex flex-col gap-6 p-5 ">
        <h2 className='text-lg font-medium font-poppins mt-5 text-center'>Friends</h2>

        {
          friends.map((item)=>(
            <div className="flex justify-between gap-8 mb-5 ">
             <div className='flex items-center gap-5'> 
                <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full overflow-hidden">
                 <img src={item.friendPhoto} alt="user photo" />
                 </div>
                 <h2 className='text-lg font-semibold'>{item.friendName} </h2>
             </div>
             <div className="butts">
                 <button className='rounded-lg py-2 px-5 bg-[#074173] text-xl text-white font-normal'>Unfriend</button>
             </div>
         </div>
          ))
        }
           
      </div>
    </div>
  )
}
