import React from 'react'

const CommentBox = () => {
  
  
  return (
    <div className=' bg-gray-300 w-full my-2 rounded-md'>
      {/* username and star */}
      <div className='px-3 pt-3 flex flex-row justify-between'>
        <h2 className='text-sm font-bold'>ABCD</h2>
        <p>⭐⭐⭐⭐⭐</p>
      </div>

      {/* display comment */}
      <div className='p-3'>
        <p className='text-l'>Great Product with great feature Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corrupti minima adipisci vitae quae atque id veniam explicabo, saepe natus! Temporibus tenetur impedit nostrum veritatis quod dolor vero expedita aperiam?</p>
      </div>

      {/* horizontal rule */}
      <hr className='border-t border-gray-400 mx-3' />

      {/* Edit and Delete button */}
      <div >
        <button className='m-2 px-3 bg-white border rounded-xl cursor-pointer hover:bg-gray-100'>Edit</button>
        <button className='m-2 px-3 bg-white border rounded-xl cursor-pointer hover:bg-gray-100'>Delete</button>
      </div>
    </div>
  )
}

export default CommentBox
