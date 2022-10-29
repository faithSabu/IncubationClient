import React from 'react'
import './HomePage.css'
import {useNavigate} from 'react-router-dom'
// import HomeImg from '../../Assets/home.avif'

function HomePage(props) {
  const navigate = useNavigate();
  return (
    <section className="home">
      <div className='mr-20 pt-5'>
      <p onClick={()=>{
        navigate('/login')
      }} className='text-white text-right cursor-pointer'>Sign In</p>
      </div>
    <div className="justify-center text-center pt-40">
      {/* <img className="w-full h-full object-cover relative" src={HomeImg} alt="" /> */}
      <h1 className='text-white  text-4xl font-thin'>Welcome User</h1>
      <h1 className='text-white mt-20 text-6xl font-//#endregion block'>Book Your Seats Today</h1>
      {/* <img className="inline-block animate-bounce ease duration-300 bg-black mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4r5aEwBVBsp-r4L5bgqHuH7UKGNZTX_QgTA&usqp=CAU" alt="" /> */}
      
    <h1 onClick={()=>{
      navigate('/applicationForm')
    }} className="text-2xl underline text-gray-500 mt-20 hover:text-white transition ease-in-out cursor-pointer">Register</h1>
    </div>
     </section>
  )
}

export default HomePage
