import React, {useEffect, useState, useContext} from 'react'
import { useForm } from 'react-hook-form';
import UserContext from '../context/UserContext';

const Form = () => {
      const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { userData } = useContext(UserContext);

   const onSubmit = async (data) => { 
    if (!userData) {
      alert('You must login before submitting form')
      return;
    }
    try {
      const reasult = await postData('http://localhost:3000/comments/',data);
      console.log(reasult);
      reset();
      alert('Comment successful')
    } catch (error) {
      alert(`Comment failed: ${error.message}`);
    }
    }

    async function postData(url,payload) {
      try{
        const response = await fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: userData.id, ...payload })  // The three dots (...) are called the spread operator in JavaScript. 
                                                                  // It "spreads" or expands an object or array into its individual elements.
        })
        if(!response.ok){
          const errorBody = await response.text();
          throw new Error(`${errorBody}`)
        }
        const reasult = await response.json();
        return reasult;
      } catch(error){
        console.error(error);
        throw error;
      }
    }
   
  return (
    <div>
        <form
          className="flex flex-col gap-2 p-2 bg-white rounded-xl mx-auto"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Write your comment..."
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("comment", {  // register your input into the hook by invoking the "register" function
                required: { value: true, message: "Your comment is required" }, // include validation
              })}
            />
            {errors.comment && (
              <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
            )}
          </div>

          <div className='flex flex-row gap-1.5'>

            <div className="flex flex-col w-3/4">
              <select 
              className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
              {...register("categories")}
              >
                <option value="performance">Performace</option>
                <option value="batteryLife">Battery Life</option>
                <option value="display">Display</option>
                <option value="camera">Camera</option>
                <option value="userExperience">User Experience</option>
              </select>
            </div>


            <div className="flex flex-col w-1/4">
              <input
                type="number"
                min={0}
                max={5}
                placeholder="Rating (0-5)"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("rating", {  
                  required: { value: true, message: "Rating is necessary" },  
                  min: { value: 0, message: "Minimum rating is 0" },
                  max: { value: 5, message: "Maximum rating is 5" },
                })}
              />
              {errors.rating && (
                <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
              )}
            </div>
          </div>


          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>

    </div>
  )
}

export default Form
