import React,{useState} from 'react'
import MyDialog from './MyDialog';

const LogButton = () => {
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [showForm, setShowForm] = useState(null); // login or register

    function handleLogout() {
      setIsLoggedin(false);
      setShowForm(null);
    }
  return (
    <div className='bg-white rounded-2xl p-3 my-3 flex flex-col items-center'>
      { !isLoggedin && (
        <button 
           className='bg-blue-500 w-3/4 px-8 py-3 my-2 rounded-xl cursor-pointer hover:bg-blue-400'
           onClick={() => { 
             setShowForm('register');
            }}
        >
            Register
        </button>)
      }
      <button 
        className='bg-gray-500 w-3/4 px-8 py-3 rounded-xl cursor-pointer hover:bg-gray-400'
        onClick={() => { 
          if(isLoggedin) handleLogout();
          else setShowForm('login');
         }}
        >
          {isLoggedin ? 'Logout' : 'Login'}
      </button>
      { !isLoggedin && (
        <MyDialog showForm={showForm} setShowForm={setShowForm} setIsLoggedin={setIsLoggedin} />
      )
    }
    </div>

  )
}

export default LogButton
