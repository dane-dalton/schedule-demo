import React from 'react'
import { useState } from 'react'

import { sessionTypes } from '../constants'

function DropdownSessionType({ handleSessionFilter }) {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [dropdownName, setDropdownName] = useState('All Sessions')

  function handleNameClick(n) {
    setDropdownName(n)
  }

  return (
    <div 
      className="inline-flex bg-white border rounded-md"
      onClick={() => { setToggleDropdown(prev => !prev) }}  
    >
      <div
        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
      >
        {dropdownName}
      </div>
      <div className='relative'>
        <button
          type="button"
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {toggleDropdown && (
          <div className="absolute right-0 z-10 w-56 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
            <div
              onClick={() => setToggleDropdown(prev => !prev)}
              className="p-2"
            >
              <button
                type='button'
                onClick={() => {
                  handleSessionFilter('All Sessions');
                  handleNameClick('All Sessions')
                  }}
                className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
              >
                All Sessions
              </button>
              {sessionTypes.map((session, sessionIdx) => (
                <button
                  type="button"
                  key={sessionIdx}
                  onClick={() => {
                    handleSessionFilter(session.toLowerCase());
                    handleNameClick(session)
                  }}
                  className="block px-4 py-2 text-sm border-t-gray-200 text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                >
                  {session}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownSessionType