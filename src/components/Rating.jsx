import React from 'react'

const Rating = () => {
    const categories = [
        {para: 'Performance', rating: 3},
        {para: 'Battery Life', rating: 4},
        {para: 'Display', rating: 3},
        {para: 'Camera', rating: 2},
        {para: 'User Experience', rating: 3},
    ]

    // acc = accumulator (starts from 0)
    // start with 0 as the initial value
    const totalRating = categories.reduce((acc,item) => (acc + item.rating),0)
    const avgRating = totalRating / categories.length
  return (
    <div className='bg-white rounded-2xl p-3 '>
      <div className='flex justify-between'>
        <h3 className='text-xl font-bold'>Rating</h3>
        <span className='text-2xl'>
          {
            Array.from({ length: 5}).map((_,i) => (
              <span key={i} className={i < avgRating ? 'text-yellow-400' : 'text-gray-300'}>
                  ★
              </span>
            ))
          }</span>

      </div>
      <div className='my-2'>
        <h4 className='mb-1'>CATEGORIES</h4>
        <ul>
        {
            categories.map((item, index) => (
            <li className='flex justify-between' key={item.para}>
                {++index}. {item.para}
                <span>
                    {
                      // Array.from({ length: 5 }) -> ✅ Creates an array with 5 empty slots: [undefined, undefined, undefined, undefined, undefined]
                      // ✅ The first argument (_) is the value (which is undefined here, so we ignore it)
                        Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < item.rating ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                        </span>
                        ))

                    
                    }</span>
            </li>
            ))
        }
        </ul>

      </div>
    </div>
  )
}

export default Rating
