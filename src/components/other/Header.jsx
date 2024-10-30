import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = () => {
  // console.log(data)
  // const [userName, setUserName] = useState('')
  // if (!data) {
  //   setUserName('Admin')
  // } else {
  //   setUserName(data.FirstName)
  // }
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload();
  }
  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>userName✨</span> </h1>
        <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 text-lg font-medium rounded-lg'>Log out</button>
    </div>
  )
}

export default Header