import React from 'react'

import { parents } from '../constants/index'

import {
  startOfToday,
  parse,
  format,
} from 'date-fns'

const [{ students : [...students] }] = parents

function Upcoming() {
  let today = startOfToday()
  let todayParsed = parse(format(today, 'MMM-yyyy'), 'MMM-yyyy', new Date())

  return (
    <div>
      <div>
        <div>
          <h2 className='flex-auto font-semibold text-gray-900'>
            Upcoming Schedule
          </h2>
          <div>
            {format(todayParsed, 'MMMM yyyy')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcoming