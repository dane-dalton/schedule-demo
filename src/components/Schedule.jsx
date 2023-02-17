import React from 'react'
import Calendar from './Calendar'
import Upcoming from './Upcoming'
import DropdownComponent from './DropdownComponent'
import Modal from './Modal'
import { useState } from 'react'

import { parents } from '../constants'

import { AiOutlineShrink, AiOutlineExpand, AiOutlineBars, AiOutlineTable } from 'react-icons/ai'

function Schedule() {
  const [{ students: [...students] }] = parents
  const [visableStudents, setVisableStudents] = useState(students)
  const [toggleSchedule, setToggleSchedule] = useState(false)
  const [toggleList, setToggleList] = useState(false)

  function handleAllStudents() {
    setVisableStudents(students)
  }

  function handleStudentFilter(s) {
    const filteredStudent = students.filter(student => student.name == s.name)
    setVisableStudents(filteredStudent)
  }

  return (
    <div className='pt-16'>
      <div className='max-w-md px-4 mx-auto sm:px-7 md:px-6'>
        <div>
          <div className='flex justify-between'>
            <div className='flex'>
              <button
                type='button'
                onClick={() => setToggleSchedule(prev => !prev)}
                className='-my-1.5 flex items-center p-1.5 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Toggle schedule</span>
                {toggleSchedule ? (<AiOutlineShrink className='w-7 h-7' aria-hidden='true' />) : (<AiOutlineExpand className='w-7 h-7' aria-hidden='true' />)}
              </button>
              <button
                type='button'
                onClick={() => setToggleList(prev => !prev)}
                className='-my-1.5 flex justify-start items-center p-1.5 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Toggle schedule</span>
                {toggleSchedule && (
                  toggleList ? <AiOutlineBars className='w-7 h-7' aria-hidden='true' /> : <AiOutlineTable className='w-7 h-7' aria-hidden='true' />
                )}
              </button>
              <Modal />
            </div>

            <DropdownComponent students={students} handleStudentFilter={handleStudentFilter} handleAllStudents={handleAllStudents} />
          </div>

          <div className='mt-6'>
            {toggleSchedule ? (
              <Calendar 
                students={visableStudents} 
                toggleList={toggleList}
              />
              ) : (
                <Upcoming students={visableStudents} />
              )}
          </div>
        </div>
      </div>

    </div>

  )
}

export default Schedule