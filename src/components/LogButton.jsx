import React,{useState} from 'react'

const LogButton = () => {
    const [isLoggedin, setIsLoggedin] = useState(false)
  return (
    <div className='bg-white rounded-2xl p-3 my-3 flex flex-col items-center'>
      <button className='bg-blue-500 w-3/4 px-8 py-3 rounded-xl cursor-pointer hover:bg-blue-400'>{isLoggedin ? 'Logout' : 'Login'}</button>
      <button className='bg-gray-500 w-3/4 px-8 py-3 my-2 rounded-xl cursor-pointer hover:bg-gray-400'>Register</button>
    </div>
  )
}

export default LogButton
