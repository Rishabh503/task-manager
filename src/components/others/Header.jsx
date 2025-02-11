import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center text-white p-10 justify-between'>
        <p>
        Hello
        {/* <br /> */}
        <br />
        <span className='text-3xl font-medium '>

        User 🏆
        </span>
        </p>

        <button className='bg-red-500 font-medium px-3 py-4 rounded-xl'>
            LoggOut
        </button>
    </div>
  )
}

export default Header