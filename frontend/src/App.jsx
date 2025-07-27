import { useEffect, useState, useContext } from 'react'
import './App.css'
import ProductName from './components/ProductName'
import LogButton from './components/LogButton'
import Rating from './components/Rating'
import Header from './components/Header'
import Form from './components/Form'
import Comments from './components/Comments'
import UserContext from './context/UserContext'

function App() {
  const { setIsLoggedin, setUserData } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    const checkSession = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/users/check-session',{
          method: 'GET',
          credentials: 'include'  // Enables sending cookies for authentication
        })

        const data = await response.json();
        if (data.authenticated) {
          setIsLoggedin(true);
          setUserData(data.user);
        }
        else{
          setIsLoggedin(false);
          setUserData(null);
        }
      } catch (error) {
        // Only log actual errors (like network failures)
        console.error('Session check failed:', error);
        setIsLoggedin(false);
        setUserData(null);
      }
      finally{
        setIsLoading(false);
      }
    }
    checkSession();
   },[])


  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
       {/* h-auto: Height automatically adjusts to fit the content inside the container */}
       {/* // overflow-hidden: Hides any content that extends beyond the container's boundaries (prevents scrollbars) */}
      <div className='flex h-auto overflow-hidden'>
        <div className='w-1/4 bg-custom-red'>
          <ProductName />
          <LogButton />
          <Rating />
        </div>
        <div className='w-3/4'>
          <Header />
          <div className='bg-white m-2 p-4 rounded-2xl'>
            <Form />
            <Comments />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
