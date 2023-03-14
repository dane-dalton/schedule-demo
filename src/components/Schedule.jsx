import React from 'react'
import { useState } from 'react'
import Calendar from './Calendar'
import Upcoming from './Upcoming'
import DropdownStudentFilter from './DropdownStudentFilter'
import DropdownSessionType from './DropdownSessionType'
import StudentListAndFilter from './StudentListAndFilter'


import { parents } from '../constants'

import {
  AiOutlineShrink,
  AiOutlineExpand,
  AiOutlineBars,
  AiOutlineCalendar,
} from 'react-icons/ai'
import { Tooltip, Box } from '@mui/material'

function Schedule() {
  const [{ students: [...students] }] = parents
  const [visableStudents, setVisableStudents] = useState(students)
  const [sessionFilter, setSessionFilter] = useState("All Sessions")
  const [toggleScheduleView, setToggleScheduleView] = useState(false)
  const [toggleList, setToggleList] = useState(false)

  // function handleAllStudents() {
  //   setVisableStudents(students)
  // }

  // function handleStudentFilter(s) {
  //   const filteredStudent = students.filter(student => student.name == s)
  //   setVisableStudents(filteredStudent)
  // }

  function handleSelectedStudents(isChecked, student) {
    let newStudentDisplay = visableStudents.slice()
    !isChecked ? newStudentDisplay.push(student) : (newStudentDisplay = newStudentDisplay.filter(s => s !== student))
    setVisableStudents(newStudentDisplay)
  }

  function handleSessionFilter(sType) {
    setSessionFilter(sType)
  }

  function sessionFilterLogic(session) {
    return (session.sessionType == sessionFilter || sessionFilter == "All Sessions")
  }

  return (
    <div className='pt-16'>
      <div className='max-w-md my-4 py-4 px-4 mx-auto sm:px-7 md:px-6 min-h-[384px] border border-gray-900 rounded-xl shadow-xl drop-shadow-xl'>
        <div>
          <ol className='mb-6'>
            {students.map(student => (
              <StudentListAndFilter
                key={student.studentId}
                student={student}
                handleSelectedStudents={handleSelectedStudents}
              />
            ))}
          </ol>
          <div className='flex justify-between'>
            <div className='flex'>
              <button
                type='button'
                onClick={() => setToggleScheduleView(prev => !prev)}
                className='-my-1.5 flex items-center p-1.5 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Toggle schedule</span>
                {toggleScheduleView ? (<AiOutlineShrink className='w-7 h-7' aria-hidden='true' />) : (<AiOutlineExpand className='w-7 h-7' aria-hidden='true' />)}
              </button>
              <button
                type='button'
                onClick={() => setToggleList(prev => !prev)}
                className='-my-1.5 flex justify-start items-center p-1.5 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Toggle schedule</span>
                {toggleScheduleView && (
                  toggleList ?
                    <Tooltip title="List">
                      <Box>
                        <AiOutlineBars className='w-7 h-7' aria-hidden='true' />
                      </Box>
                    </Tooltip>
                    :
                    <Tooltip title="Calendar">
                      <Box>
                        <AiOutlineCalendar className='w-7 h-7' aria-hidden='true' />
                      </Box>
                    </Tooltip>
                )}
              </button>
            </div>
            <div className='flex'>
              <DropdownSessionType handleSessionFilter={handleSessionFilter} />
            </div>
          </div>
          <div className='mt-6'>
            {toggleScheduleView ? (
              <Calendar
                students={visableStudents}
                toggleList={toggleList}
                sessionFilterLogic={sessionFilterLogic}
              />
            ) : (
              <Upcoming
                students={visableStudents}
                sessionFilterLogic={sessionFilterLogic}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule