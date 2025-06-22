import { useState } from 'react'
import './App.css'
import ProductName from './components/ProductName'
import LogButton from './components/LogButton'
import Rating from './components/Rating'
import Header from './components/Header'

function App() {

  return (
    <>
    <div className='flex'>
      <div className='w-1/4'>
        <ProductName />
        <LogButton />
        <Rating />
      </div>
      <div>
        <Header />
      </div>
    </div>
    </>
  )
}

export default App
