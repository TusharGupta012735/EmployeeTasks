import React, { useState } from 'react'

const Login = (event) => {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const SubmitHandler = (event)=>{
      event.preventDefault()
      console.log("Email is", email)
      console.log("Password is", password)

      setEmail("")
      setPass("")
  }
  const emailInput = (e) =>{
    setEmail(e.target.value)
  }
  const passInput = (e) =>{
    setPass(e.target.value)
  }
  return (

    <div className='flex items-center justify-center w-screen h-screen'>
        <div className='p-20 border-2 rounded-2xl border-emerald-400'>
            <form className='flex flex-col items-center justify-center' onSubmit={(event)=>{
              SubmitHandler(event)
            }}>
                <input onChange={(e)=>{emailInput(e)}}
                value={email}
                className='w-72 px-5 py-3 text-xl text-white bg-transparent border-2 rounded-full outline-none border-emerald-400 placeholder:text-gray-400' 
                type="email" placeholder='Enter your email' required/>
                
                <input onChange={(e)=>{passInput(e)}}
                value={pass}
                className='w-72 px-5 py-3 mt-4 text-xl text-white bg-transparent border-2 rounded-full outline-none border-emerald-400 placeholder:text-gray-400' 
                type="password" placeholder='Enter password' required/>
                
                <button
                className='w-72 px-5 py-4 mt-5 text-xl border-2 border-none rounded-full outline-none  bg-emerald-600 placeholder:text-white'
                >Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login