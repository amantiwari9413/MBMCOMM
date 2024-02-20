import React from 'react'
import UserContext from '../context'
import { useContext } from 'react'
import { UserContextProvider } from '../context'
import { database } from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
export default function Profile() {
  
  const handleclick= ()=>{
    const userRef = doc(database,'user/kunal')
    console.log(userRef)
    const data={
      Name:"kunal",
      Age:20,
      class:21
    }
  }
  const {UserDtail}=useContext(UserContext)
  return (
    <>


<div class="container mx-auto px-4 py-8">
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
    <div class="md:flex">
      <div class="md:flex-shrink-0 md:self-center">
        <img class="h-48 w-48 object-cover rounded-full border-4 border-black" src="/img/store.jpg" alt="User profile photo"/>
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
        <div class="mt-2 flex items-center">
          <input class="w-full border-2 border-black p-2 rounded-md focus:outline-none focus:border-black shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" type="text" placeholder="Enter your name"/>
        </div>
        <div class="mt-2 flex items-center">
          <input class="w-full border-2 border-black p-2 rounded-md focus:outline-none focus:border-black shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" type="tel" placeholder="Enter your phone number"/>
        </div>
        <div class="mt-2 flex items-center">
          <input class="w-full border-2 border-black p-2 rounded-md focus:outline-none focus:border-black shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" type="text" placeholder="Enter your branch name"/>
        </div>
        <div class="mt-2 flex items-center">
          <input class="w-full border-2 border-black p-2 rounded-md focus:outline-none focus:border-black shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" type="number" placeholder="Enter your passout year"/>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <button class="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-110">Save</button>
          <button class="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-110">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>









    </>
    
  )
}
//     <div class="bg-gray-900 text-white flex justify-center items-center h-screen">
//      <div class="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
//          <h2 class="text-2xl font-semibold mb-4">User Profile Details</h2>
//          <div class="mb-4 flex justify-center items-center">
//             <div class="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
//                 <img src="placeholder.jpg" alt="Profile Photo" class="w-full h-full object-cover" />
//             </div>
//         </div>
//          <div class="mb-4">
//              <label for="name" class="block text-gray-400">Name</label>
//              <input type="text" id="name" class="w-full bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 transition-colors"/>
//          </div>
//          <div class="mb-4">
//              <label for="phone" class="block text-gray-400">Phone Number</label>
//              <input type="tel" id="phone" class="w-full bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 transition-colors"/>
//          </div>
//          <div class="mb-4">
//              <label for="branch" class="block text-gray-400">Branch Name</label>
//              <input type="text" id="branch" class="w-full bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 transition-colors"/>
//          </div>
//          <div class="mb-4">
//              <label for="passoutyear" class="block text-gray-400">Passout Year</label>
//              <input type="text" id="passoutyear" class="w-full bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 transition-colors"/>
//          </div>
//          <div class="mb-4">
//              <label for="profile-photo" class="block text-gray-400">Profile Photo</label>
//              <input type="file" id="profile-photo" accept="image/*" class="hidden"/>
//              <label for="profile-photo" class="cursor-pointer block bg-gray-700 rounded-md px-4 py-2 text-center transition-colors hover:bg-gray-600">
//                  Upload Photo
//              </label>
//          </div>
//          <button class="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition-colors">Save</button>
//      </div>
// </div>