import React, { useContext } from 'react'
import UserContext  from "../context"
import Hero from './Hero';
import Ours from './Ours';
import { Outlet } from 'react-router';
export default function Home() {
  {console.log("i am in home fun")}
  const ans = useContext(UserContext);
    const handleclick =()=>{
      console.log(ans)
    }
    
  return (
    <>
    <div className='bg-black'>
      <Hero/>
    </div>
    
    </>
  )
}




