import React,{useState} from 'react'

const ProductName = () => {
    const [readmore, setReadmore] = useState(false)
  return (
    <div className=' bg-purple-500 text-black rounded-2xl p-3'>
      <h2 className='text-3xl font-bold'>Nova X7 Pro 5G</h2>
      <p><b>Category</b>: Electronics </p>
      <p><b>Seller</b>: TechWorld India</p>
      <p><b>Descitpion</b>: {
        readmore ? 'The Nova X7 Pro 5G is a sleek and powerful smartphone featuring a 6.8" AMOLED display, 108MP AI triple camera system, Snapdragon 8 Gen 1 processor, and a 5000mAh battery with 65W fast charging. Designed for performance and style, it delivers a smooth multitasking and gaming experience with ultra-fast 5G connectivity.' : 'The Nova X7 Pro 5G is a sleek and powerful smartphone...'
      }</p>
      <span
      className='text-blue-700 hover:text-blue-900 hover:underline font-bold cursor-pointer'
      onClick={() => { setReadmore(!readmore) }}
      >
        Read {readmore ? 'less' : 'more'}
      </span>
    </div>
  )
}

export default ProductName
