import React, {useEffect} from 'react'
import CommentBox from './CommentBox'

const Comments = () => {

  useEffect(() => {
    // getData();
  }, [])

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3000/comments/');
      if (!response.ok) {
        throw new Error("Error in fetching the comment");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(`${error}`);
    }
  }

    const commentBoxes = Array(10).fill().map((_, index) => (
    <CommentBox key={index} />
  ));
  return (
    // overflow-y-auto: Shows vertical scrollbar only when content exceeds the container height

    // max-h-[calc(100vh-23rem)]: Sets a maximum height limit by calculating viewport height minus 23rem
// 1rem equals the font-size of the root element (typically 16px in browsers)
// So 23rem is approximately 368px (23 × 16px) - this ensures the comment section doesn't exceed this height
    <div className='bg-white mt-3 p-2 max-h-[calc(100vh-23rem)] overflow-y-auto '>
      {commentBoxes}
    </div>
  )
}

export default Comments
