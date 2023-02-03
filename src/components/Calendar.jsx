import React from 'react'
import { eachDayOfInterval, endOfMonth, format, startOfMonth, startOfToday } from 'date-fns'

function Calendar() {
  let today = startOfToday()

  let newDays = eachDayOfInterval({ start: startOfMonth(today), end: endOfMonth(today) })

  return (
    <div>
      <h1>
        {format(today, 'MMM yyyy')}
      </h1>
      <div className='w-96 h-96 grid grid-cols-7'>
        {newDays.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className='border-t border-gray-200'
          >
            <button
              type='button'
              className='mx-auto flex h-8 w-8 items-center justify-center rounded-full'
              >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                  {format(day, 'd')}
                </time>
              </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar