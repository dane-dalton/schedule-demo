import React from 'react'
import Calendar from './Calendar'
import Upcoming from './Upcoming'
import DropdownComponent from './DropdownComponent'
import { useState } from 'react'

import { parents } from '../constants'

import { AiOutlineShrink, AiOutlineExpand } from 'react-icons/ai'

function Schedule() {
  const [{ students: [...students] }] = parents
  const [visableStudents, setVisableStudents] = useState(students)
  const [toggleSchedule, setToggleSchedule] = useState(false)

  function handleAllStudents() {
    setVisableStudents(students)
  }

  function handleStudentFilter(s) {
    const filteredStudent = students.filter(student => student.name == s.name)
    setVisableStudents(filteredStudent)
  }

  return (
    <div className='pt-16'>
      <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'>
        <div>
          <div className='flex justify-between'>
            <button
              type='button'
              className='-my-1.5 flex flex-1 justify-start items-center p-1.5 text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Toggle schedule</span>
              <div onClick={() => setToggleSchedule(prev => !prev)} className='self-end'>
                {toggleSchedule ? (<AiOutlineShrink className='w-7 h-7' aria-hidden='true' />) : (<AiOutlineExpand className='w-7 h-7' aria-hidden='true' />)}
              </div>
            </button>
            <DropdownComponent students={students} handleStudentFilter={handleStudentFilter} handleAllStudents={handleAllStudents} />
          </div>

          <div className='mt-6'>
            {toggleSchedule ? (<Calendar students={visableStudents} />) : (<Upcoming students={visableStudents} />)}

          </div>
        </div>
      </div>

    </div>

  )
}

export default Schedule