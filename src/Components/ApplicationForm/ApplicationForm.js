import React from 'react'

function ApplicationForm() {
  return (
    <div className='bg-gray-700 text-white lg:px-56 px-28 py-10 mx-20 rounded-lg'>
      <div className='py-5'>
        <h1 className='text-center font-bold lg:text-4xl text-3xl mx-10 uppercase font-serif'>Application Form</h1>
        <form className='mt-11'>
          <div className='md:flex justify-around gap-x-[150px] mt-10'>
            <div className='flex-col w-full'>
              <label className='' htmlFor="">Name</label>
              <input name='name' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
            <div className='flex-col w-full md:m-0 mt-5'>
              <label className='' htmlFor="">Address</label>
              <input name='address' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
          </div>
          <div className='md:flex justify-around gap-x-[150px] mt-10'>
            <div className='flex-col w-full'>
              <label className='' htmlFor="">City</label>
              <input name='city' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
            <div className='flex-col w-full md:m-0 mt-5'>
              <label className='' htmlFor="">State</label>
              <input name='state' className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
          </div>
          <div className='md:flex justify-around gap-x-[150px] mt-10'>
            <div className='flex-col w-full'>
              <label className='' htmlFor="">Email</label>
              <input className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
            <div className='flex-col w-full md:m-0 mt-5'>
              <label className='' htmlFor="">Phone Number</label>
              <input className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
          </div>
          <div className='md:flex justify-around gap-x-[150px] mt-10'>
            <div className='flex-col w-full'>
              <label className='' htmlFor="">Company Name</label>
              <input className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
            <div className='flex-col w-full md:m-0 mt-5'>
              <label className='' htmlFor="">Company Logo</label>
              <input className='text-gray-800 focus:text-white w-full py-3 rounded-lg mt-3 focus:bg-gray-800 focus:outline-none pl-2' type="text" />
            </div>
          </div>
          <div className='mt-5'>
            <label htmlFor="">1. Describe your team and background</label>
            <textarea className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">2. Describe your company and products</label>
            <textarea className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">3. Describe the problem you are trying to solve</label>
            <textarea className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">4. What is unique about your solution?</label>
            <textarea className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">5. What is your value proposition for the customer?</label>
            <textarea className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">6. What are your competitors and what is your competitve advantage?</label>
            <textarea className='text-gray-800 focus:text-white w-full mt-4 rounded-lg  focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">7. Explain your revenue model</label>
            <textarea className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">8. What is the potential market size of the product?</label>
            <textarea className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-5'>
            <label htmlFor="">9. How do you market or plan to market your products?</label>
            <textarea className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='mt-6 flex-col'>
            <label htmlFor="">Type of Incubation needed</label>
            <div className='m-3'>
              <input id='physical' name='typeOfIncubation' type="radio" />
              <label htmlFor="physical">Physical Incubation</label>
            </div>
            <div className='m-3'>
              <input id='virtual' name='typeOfIncubation' type="radio" />
              <label htmlFor="virtual">Virtual Incubation</label>
            </div>
          </div>
          <div className='mt-5'>
            <label htmlFor="">10. Upload a detailed business proposal</label>
            <textarea className='text-gray-800 focus:text-white w-full mt-4 rounded-lg focus:bg-gray-800 focus:outline-none p-2' />
          </div>
          <div className='text-center'>
          <button className='my-5 py-2 px-20 bg-blue-600 shadow-lg shadow-blue-100/10 hover:shadow-blue-500/40 text-white font-semibold rounded-lg'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplicationForm