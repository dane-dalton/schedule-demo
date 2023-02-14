import React from 'react'
import { useState } from 'react'

import { classNames } from '../util/class-names'
import { parents } from '../constants/index'
import Session from './Session'

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isToday,
  startOfWeek,
  startOfToday,
  isEqual,
  isSameMonth,
  parse,
  parseISO,
  add,
  isSameDay,
} from 'date-fns'

const [{ students: [...students] }] = parents
console.log(students)

students.forEach((student) => {
  console.log(student.schedule)
})

function Calendar() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let daysOfMonth = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth))
  })

  function filterSelectedDaySchedule(s) {
    return s.schedule.filter(session => isSameDay(parseISO(session.startDateTime), selectedDay))
  }

  function checkEmptyDay() {
    let boolCheck = false
    students.forEach(student => {
      if (filterSelectedDaySchedule(student).length > 0) {
        boolCheck = true
      }
    })
    return boolCheck
  }

  function previousMonth() {
    let firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayPreviousMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  return (
    <div className='pt-16'>
      <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'>
        <div className='md:grid md:grid-cols-2 md:divide-x md:divide-gray-200'>
          <div className='md:pr-14'>
            <div className='flex items-center'>
              <h2 className='flex-auto font-semibold text-gray-900'>
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type='button'
                onClick={previousMonth}
                className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Previous month</span>
                <AiOutlineLeft className='w-5 h-5' aria-hidden='true' />
              </button>
              <button
                type='button'
                onClick={nextMonth}
                className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Next month</span>
                <AiOutlineRight className='w-5 h-5' aria-hidden='true' />
              </button>
            </div>
            <div className='grid grid-cols-7 mt-8 text-xs leading-6 text-center text-gray-500'>
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className='mt-2 text-sm grid grid-cols-7'>
              {daysOfMonth.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx > 6 && 'border-t border-gray-200',
                    'py-1.5'
                  )}
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
                  <div className='w-1 h-1 mx-auto mt-1'>
                    {students.some(student => student.schedule.some(session => isSameDay(day, parseISO(session.startDateTime)))
                    ) && (
                        <div className='w-1 h-1 rounded-full bg-sky-500'></div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className='mt-12 md:mt-0 md:pl-14'>
            <h2 className='font-semibold text-gray-900'>
              Schedule for <time dateTime={format(selectedDay, 'yyy-MM-dd')}>{format(selectedDay, 'MMM dd, yyyy')}</time>
            </h2>
            <ol>
              {checkEmptyDay() ? (
                students.map(student => (
                  filterSelectedDaySchedule(student).map(session => (
                    <Session
                      student={student}
                      session={session}
                      key={session.sessionId}
                    />
                  ))
                ))
              ) : (
                <p>No sessions today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Calendar