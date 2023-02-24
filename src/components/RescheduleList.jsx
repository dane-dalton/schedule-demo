import React from 'react'

import {
  format,
  parseISO,
} from 'date-fns'

function RescheduleList({ session }) {
  const startDateTime = parseISO(session.startDateTime)
  const endDateTime = parseISO(session.endDateTime)
  return (
    <div className='flex-auto flex justify-between py-4 px-4'>
      <p className='text-gray-900 font-semibold'>
        <time dateTime={session.startDateTime}>
          {format(startDateTime, 'MMM dd')}
        </time>
      </p>
      <div className='flex'>
        <p className='text-gray-900'>
          <time dateTime={session.startDateTime}>
            {format(startDateTime, 'h:mma')}
          </time>
          {' - '}
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

export default RescheduleList