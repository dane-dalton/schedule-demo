import React from 'react'

import {
  format,
  parseISO,
} from 'date-fns'

// feed in student instead?
function Session({ session }) {
  let startDateTime = parseISO(session.startDateTime)
  let endDateTime = parseISO(session.endDateTime)
  return (
    <li
      className='flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100'
    >
      {/* Potentially student photo here */}
      <div className='flex-auto'>
        <p></p>
        <p className='text-gray-900'>
          <time dateTime={session.startDateTime}>
            {format(startDateTime, 'h:mm a')}
          </time>
          {' CST - '}
        </p>
        <p className='text-gray-900'>
          <time dateTime={session.endDateTime}>
            {format(endDateTime, 'h:mm a')}
          </time>
          {' CST'}
        </p>
      </div>
    </li>
  )
}

export default Session