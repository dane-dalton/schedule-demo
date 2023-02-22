import React from 'react'
import Modal from './Modal'
import StudentInfo from './StudentInfo'

function SessionList({ student, session }) {
  return (
    <li
      className='flex items-center px-4 py-2 space-x-4 group rounded-md focus-within:bg-gray-100 hover:bg-gray-100 border border-gray-400 text-sm'
    >
      <StudentInfo student={student} session={session} />
      <Modal student={student} session={session} />
    </li>
  )
}

export default SessionList