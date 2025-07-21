import React,{useState, useEffect} from 'react'
import Select from 'react-select'

const options = [
  { value: 'performance', label: 'Performance' },
  { value: 'batteryLife', label: 'Battery Life' },
  { value: 'display', label: 'Display' },
  { value: 'camera', label: 'Camera' },
  { value: 'userExperience', label: 'User Experience' },
];


const Header = () => {
    const [selectedOption, setSelectedOption] = useState([]);

    // useEffect(() => {
    //   console.log(selectedOption)
    // }, [selectedOption])
    

  return (
    <div className='bg-purple-500 mx-2 p-4 rounded-2xl'>
      <div className='flex items-center'>
        <p>sort by:</p>
        <div className='m-2 w-3/4'>
          <Select
            isMulti
            value={selectedOption} // expects an option object or null
            onChange={setSelectedOption}
            options={options}
            placeholder='Categories'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
