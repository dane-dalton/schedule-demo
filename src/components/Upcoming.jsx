import React from 'react'

import Session from './Session'

import {
  startOfToday,
  parse,
  format,
  isWithinInterval,
  parseISO,
  add,
} from 'date-fns'

function Upcoming({students}) {
  const today = startOfToday()

  function filterUpcomingSchedule(s) {
    return s.schedule.filter(session => isWithinInterval(parseISO(session.startDateTime), {
      start: today,
      end: add(today, { days: 7 })
    }))
  }

  function checkEmpyUpcoming() {
    let boolCheck = false
    students.forEach(student => {
      if (filterUpcomingSchedule(student).length > 0) {
        boolCheck = true
      }
    })
    return boolCheck
  }

  return (
    <div className='md:grid'>
      <div className='md:pr-14'>
        <div className='flex items-center'>
          <h2 className='flex-auto font-semibold text-gray-900'>
            Upcoming Schedule
          </h2>
          <div className='flex-auto font-semibold text-gray-900'>
            Today: {format(today, 'MMM do')}
          </div>
        </div>
      </div>
      <ol className='mt-12 md:mt-0'>
        {checkEmpyUpcoming() ? (
          students.map(student => (
            filterUpcomingSchedule(student).map(session => (
              <Session
                student={student}
                session={session}
                key={session.sessionId}
              />
            ))
          ))
        ) : (
          <div>False</div>
        )}
      </ol>
    </div>
  )
}

export default Upcoming