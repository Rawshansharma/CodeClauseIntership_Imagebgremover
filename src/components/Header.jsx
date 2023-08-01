import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='flex items-center bg-gray-599 '>
            <img width={130} height={100} src="data:image/png;base64,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" alt="" />
             <div className='flex lg:pl-40 sm:pl-5 font-semibold text-gray-600 hide '>
              <a className='hover:underline' href="/">Remove Background</a>
              <a className='pl-10 hover:underline ' href="/">How to use </a>
              <a className='pl-10 hover:underline' href="/">Contact Us</a>
              </div>

        </nav>
    </div>
  )
}

export default Header
