import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
      const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

   const onSubmit = (data) => { 
    console.log(data);
    reset();
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
              {...register("select")}
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
