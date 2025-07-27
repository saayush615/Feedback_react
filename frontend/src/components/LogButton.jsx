import React,{useState, useContext, useEffect} from 'react'
import MyDialog from './MyDialog';
import UserContext from '../context/UserContext';

const LogButton = () => {
    const { isLoggedin, setIsLoggedin, setUserData } = useContext(UserContext);
    const [showForm, setShowForm] = useState(null); // login or register

    useEffect(() => { 
      
     },[])
    
    function handleLogout() {
      fetch('http://localhost:3000/users/logout',{
        method: 'POST',
        credentials: 'include'  // Enables sending and receiving cookies for cross-origin authentication, without this cookies won't be sent and authentication will fail
      })
      .then(() => {
        setIsLoggedin(false);
        setShowForm(null);
        setUserData(null);
      })
      .catch((error) => { 
        console.error(`Logout failed: ${error}`);
       })
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
        <MyDialog showForm={showForm} setShowForm={setShowForm} />
      )
    }
    </div>

  )
}

export default LogButton
