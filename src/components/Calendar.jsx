import React from 'react'
import { useState } from 'react'
import { classNames } from '../util/class-names'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isToday,
  startOfMonth,
  startOfWeek,
  startOfToday,
  isEqual,
  isSameMonth,
  parse,
  add,
} from 'date-fns'

function Calendar() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let newDays = eachDayOfInterval({ 
    start: startOfWeek(startOfMonth(firstDayCurrentMonth)), 
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)) 
  })

  function previousMonth() {
    let firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayPreviousMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  return (
    <div>
      <div>
        <div className='w-96 flex items-center'>
          <h2 className='flex-auto font-semibold text-gray-900'>
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
          </h2>
          <button
            onClick={previousMonth}
          >
            <span className='sr-only'>Previous month</span>
            <AiOutlineLeft className='w-5 h-5' aria-hidden='true' />
          </button>
          <button
            onClick={nextMonth}
          >
            <span className='sr-only'>Next month</span>
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
              onClick={() => setSelectedDay(day)}
              className={classNames(
                isEqual(day, selectedDay) && 'text-white',
                !isEqual(day, selectedDay) &&
                  isToday(day) &&
                  'text-red-500',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  'text-gray-900',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  'text-gray-400',
                isEqual(day, selectedDay) && 
                  isToday(day) && 
                  'bg-red-500',
                isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  'bg-gray-900',
                !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                (isEqual(day, selectedDay) || isToday(day)) &&
                'font-semibold',
                'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
              )}
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