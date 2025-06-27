import React from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
      const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

   const onSubmit = (data) => console.log(data)

   
  return (
    <div>
      
    </div>
  )
}

export default Form
