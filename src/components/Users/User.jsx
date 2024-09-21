import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue , set, push  } from "firebase/database";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const User = () => {
  // ========== get data from redux
  const sliceUser = useSelector((state)=>state.counter.value)
  console.log(sliceUser)
  // ========== variables 
  const [allUsers , setAllUsers] =useState([])

  // ========== firebase variables
     const db = getDatabase();
    //  =============== realtime database
    useEffect(()=>{
      const starCountRef = ref(db, 'Allusers/');
      onValue(starCountRef, (snapshot) => {
        let merry = []
        snapshot.forEach((item)=>{
         if(item.val().uid !=sliceUser.uid){
          merry.push({...item.val(), key:item.key})
         } 
        })
        setAllUsers(merry)
    });
    }, [])
    // ====== function part
    const handleAdd =(items)=>{
      set(push(ref(db, 'friendrequest/')), {
       senderId : sliceUser.uid,
       senderName : sliceUser.displayName,
       senderImage : sliceUser.photoURL,
       receiverId : items.uid,
       receiverName :items.userName,
       receiverPhoto :items.userPhoto,
      });
    }
      //  ============== console part

  return (
    <div className='container  flex justify-center items-center'>
      <div className="px-8 py-3 bg-[#074173] bg-opacity-50 h-[500px] border-2 border-[#074173] rounded-lg mt-10 flex flex-col gap-6 p-5 ">
        <h2 className='text-lg font-medium font-poppins mt-5 text-center'>People You may know</h2>

        {
          allUsers.map((item)=>(
            <div key={item.key} className="singel_users flex justify-between gap-10 mb-5 ">
             <div className='flex items-center gap-5'> 
                <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full overflow-hidden">
                 <img src={item.userPhoto} alt="user photo" />
                 </div>
                 <h2 className='text-lg font-semibold'>{item.userName} </h2>
             </div>
             <div className="">
                <button onClick={()=> handleAdd(item)} className='rounded-lg py-2 px-5 bg-[#074173] text-xl active:scale-95 transition-all text-white font-normal'>Add friend</button>
             </div>
         </div>
          ))
        }
          <Link to="/friendRequPage" className="text-right transition-all hover:text-white text-lg underline">See friend requests</Link> 
      </div>
    </div>
  )
}
