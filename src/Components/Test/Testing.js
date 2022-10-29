// import React from 'react'








// function Testing() {
//     return (
//         <section className="h-full w-full flex   justify-center">
//             <form class="w-full max-w-lg mt-32">
//                 <h1 className="mb-10 font-normal text-slate-500 text-4xl">Signup</h1>
//                 <div class="flex flex-wrap -mx-3 mb-6 ">
//                     <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//                             First Name
//                         </label>
//                         <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="fname"
//                              type="text" placeholder="Jane" />
//                         {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
//                     </div>
//                     <div class="w-full md:w-1/2 px-3">
//                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
//                             Last Name
//                         </label>
//                         <input  required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lname" id="grid-last-name" type="text" placeholder="Doe" />
//                     </div>
//                 </div>
//                 <div class="flex flex-wrap -mx-3 mb-6 ">
//                     <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//                             Email
//                         </label>
//                         <input  required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="email" type="text" placeholder="@gmail.com" />
//                         <p class="text-red-500 text-xs italic"></p>
//                     </div>
//                     <div class="w-full md:w-1/2 px-3">
//                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
//                             Phone Number
//                         </label>
//                         <input  required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="mobile" id="grid-last-name" type="text" placeholder="Number" />
//                     </div>
//                 </div>
//                 <div class="flex flex-wrap -mx-3 mb-6">
//                     <div class="w-full px-3">
//                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
//                             Password
//                         </label>
//                         <input  required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" id="grid-password" type="password" placeholder="******************" />
//                         <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
//                     </div>
//                 </div>
//                 <div class="flex flex-wrap justify-center -mx-3 mb-2">
//                     <button type="submit" className="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-2/4"
//                          >Submit</button>
//                     {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
//         State
//       </label>
//       <div class="relative">
//         <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//           <option>New Mexico</option>
//           <option>Missouri</option>
//           <option>Texas</option>
//         </select>
//         <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//           <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//         </div>
//       </div>
//     </div> */}
//                 </div>
//             </form>
//         </section>
//     )
// }

// export default Testing





import React,{useEffect,useState} from 'react'
// import axios from '../../Config/baseUrl'
// import {useNavigate} from 'react-router-dom'

function Testing() {
// const navigate=useNavigate()
const [name,setName] =useState('')
const [email,setEmail] =useState('')
const [mobNumber,setMobNummber] =useState('')
const [password,setPassword] =useState('')
const [emailexist, setEmailErr]=useState(false)
const [mobexist,setMobErr]=useState(false)
//const [,set] =useState('')
const handleSubmit=async(e)=>{
   e.preventDefault()
//    const data=await axios({
//       method:'post',
//       url:'/signup',
//       data:{
//          name,email,mobNumber,password

//       }
//    })
let data = 'hai'
   const {emailerr,moberr}=data.data.response
   console.log(emailerr,moberr);
   if(emailerr||moberr){
      if(emailerr)
      setEmailErr(emailerr)
      if(moberr)
      setMobErr(moberr)
    }
    else{
// navigate('/login')
    }



}



  return (
    
   <div className=''>
       <div className="flex items-center justify-center p-12">
  
   <div className="mx-auto w-full max-w-[550px]">
      <form onSubmit={handleSubmit} >
         <div className="mb-5">
            <label
               for="name"
               className="mb-3 block text-base font-medium text-[#07074D]"
               >
         Full Name
            </label>
            <input
               type="text"
               name="name"
               id="name"
               value={name}
               onChange={(e)=>{
                  setName(e.target.value)
                  setMobErr(false)
               
               }}
               placeholder="Full Name"
               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
         </div>
         <div className="mb-5">
            <label
               for="email"
               className="mb-3 block text-base font-medium text-[#07074D]"
               >
            Email Address
            </label>
            <input
               type="email"
               name="email"
               id="email"
               value={email}
               onChange={(e)=>{
                  setEmail(e.target.value)
               setEmailErr(false)
               }}
               placeholder="example@domain.com"
               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
                { emailexist? <label
               for="email"
               className="mb-3 block text-base font-medium text-red-500">
            This E-mail is already registered
            </label>:null }
         </div>
         <div className="mb-5">
            <label
               for="subject"
               className="mb-3 block text-base font-medium text-[#07074D]"
               >
           Mobile Number
            </label>
            <input
               type="number"
               name="subject"
               id="subject"
               value={mobNumber}
               onChange={(e)=>{
                  setMobNummber(e.target.value)
                  setMobErr(false)
               
               }}
               placeholder="Enter your Mobile Number "
               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
              {mobexist && <label
               for="subject"
               className="mb-3 block text-base font-medium text-red-500">
               
         This number is already registered
            </label>}
         </div>
         <div className="mb-5">
            <label
               for="subject"
               className="mb-3 block text-base font-medium text-[#07074D]"
               >
        Password
            </label>
            <input
               type="password"
               name="subject"
               id="subject"
               value={password}
               onChange={(e)=>{setPassword(e.target.value)}}
               placeholder="Enter your Password"
               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
         </div>
         
         <div className='flex justify-center'>
            <button
               className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
            </button>
         </div>
      </form>
   </div>
</div>

   </div>
  )
}

export default Testing