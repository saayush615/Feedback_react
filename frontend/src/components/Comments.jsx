import React, {useEffect, useContext, useState} from 'react'
import CommentBox from './CommentBox'
import CommentContext from '../context/CommentContext'

const Comments = () => {
  const { comments } = useContext(CommentContext);

  return (
    // overflow-y-auto: Shows vertical scrollbar only when content exceeds the container height

    // max-h-[calc(100vh-23rem)]: Sets a maximum height limit by calculating viewport height minus 23rem
// 1rem equals the font-size of the root element (typically 16px in browsers)
// So 23rem is approximately 368px (23 × 16px) - this ensures the comment section doesn't exceed this height
    <div className='bg-white mt-3 p-2 max-h-[calc(100vh-23rem)] overflow-y-auto '>
      {
        comments.map((comment) => (
          <CommentBox key={comment._id} comment={comment} />
        ))
      }
    </div>
  )
}

export default Comments
