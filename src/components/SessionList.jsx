import React from 'react'

import {
  format,
  parseISO,
} from 'date-fns'

function SessionList({ student, session }) {
  const startDateTime = parseISO(session.startDateTime)
  const endDateTime = parseISO(session.endDateTime)
  return (
    <li
      className='flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 border border-gray-500 text-sm'
    >
      {/* Potentially student photo here */}
      <div className='flex-auto grid grid-cols-2 justify-items-center'>
        <p className='text-gray-900 font-semibold'>{student.name}</p>
        <p className='text-gray-900 font-semibold'>
          <time dateTime={session.startDateTime}>
            {format(startDateTime, 'MM/dd')}
          </time>
        </p>
        <p className='self-center'>{session.level}</p>
        <div>
          <p className='text-gray-900'>
            <time dateTime={session.startDateTime}>
              {format(startDateTime, 'h:mma')}
            </time>
            {' CST - '}
          </p>
          <p className='text-gray-900'>
            <time dateTime={session.endDateTime}>
              {format(endDateTime, 'h:mma')}
            </time>
            {' CST'}
          </p>
        </div>

      </div>
    </li>
  )
}

export default SessionList