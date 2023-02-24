import React from 'react'

import {
  format,
  parseISO,
} from 'date-fns'

function StudentInfo({ student, session }) {
  const startDateTime = parseISO(session.startDateTime)
  const endDateTime = parseISO(session.endDateTime)
  return (
    <div className='flex-auto grid grid-cols-2 justify-items-center'>
        <p className='text-gray-900 font-semibold'>{student.name}</p>
        <p className='text-gray-900 font-semibold'>
          <time dateTime={session.startDateTime}>
            {format(startDateTime, 'MMM dd')}
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
  )
}

export default StudentInfo