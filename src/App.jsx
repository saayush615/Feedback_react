import { useState } from 'react'
import './App.css'
import ProductName from './components/ProductName'
import LogButton from './components/LogButton'
import Rating from './components/Rating'
import Header from './components/Header'
import Form from './components/Form'

function App() {

  return (
    <>
    <div className='flex'>
      <div className='w-1/4'>
        <ProductName />
        <LogButton />
        <Rating />
      </div>
      <div className='w-3/4'>
        <Header />
      </div>
      <Form />
    </div>
    </>
  )
}

export default App
