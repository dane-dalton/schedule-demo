import React from 'react'
import { eachDayOfInterval, endOfMonth, format, startOfMonth, startOfToday } from 'date-fns'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

function Calendar() {
  let today = startOfToday()

  let newDays = eachDayOfInterval({ start: startOfMonth(today), end: endOfMonth(today) })

  return (
    <div>
      <div>
        <div className='w-96 flex items-center'>
          <h2 className='flex-auto font-semibold text-gray-900'>
            {format(today, 'MMM yyyy')}
          </h2>
          <button>
            <span className='sr-only'>Previous month</span>
            <AiOutlineLeft className='w-5 h-5' aria-hidden='true' />
          </button>
          <button>
            <span className='sr-only'>Previous month</span>
            <AiOutlineRight className='w-5 h-5' aria-hidden='true' />
          </button>
        </div>
        <div>
          <div className='w-96 grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500'>
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
        </div>
      </div>

      <div className='w-96 h-96 mt-2 text-sm grid grid-cols-7'>
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