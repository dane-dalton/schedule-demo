import React from 'react'
import Modal from './RescheduleModal'
import StudentInfo from './StudentInfo'

import { AiOutlineDesktop, AiOutlineTeam } from 'react-icons/ai'
import { Tooltip, Box } from '@mui/material'

function Session({ student, session }) {
  return (
    <li
      className='flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-200 hover:bg-gray-200'
    >
      <StudentInfo student={student} session={session} />
      {(session.locationType == "virtual") ?
          <Tooltip title='Virtual Class'>
            <Box>
              <AiOutlineDesktop className='w-6 h-6' />
            </Box>
          </Tooltip>
          :
          <Tooltip title='In Person Class'>
            <Box>
              <AiOutlineTeam className='w-6 h-6' />
            </Box>
          </Tooltip>
      }
      <Modal student={student} session={session} />
    </li>
  )
}

export default Session