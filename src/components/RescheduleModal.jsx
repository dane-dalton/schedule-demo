import React from "react";
import { useState } from "react";
import StudentInfo from "./StudentInfo";
import RescheduleList from "./RescheduleList";

import { classesListAllLevels } from "../constants";

import { classNames } from "../util";

import { AiOutlineInteraction } from 'react-icons/ai'

import {
  parseISO,
  isAfter,
  isEqual,
} from 'date-fns'

export default function Modal({ student, session }) {
  const [showModal, setShowModal] = useState(false);
  const rightNow = new Date()
  const studentLevel = `level${student.level}`
  const classesSameLevel = classesListAllLevels[studentLevel]

  function filterClassesSameUnit() {
    const sessionStartDateTime = parseISO(session.startDateTime)
    return classesSameLevel.filter(c => (c.unit == session.unit) && (isAfter(parseISO(c.startDateTime), rightNow)) && (!isEqual(parseISO(c.startDateTime), sessionStartDateTime)))
  }

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase px-1.5 py-1.5 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <AiOutlineInteraction className="h-5 w-5" />
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Reschedule
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 py-3 flex-auto font-semibold">
                  <p>Current Session</p>
                </div>
                <div className="relative px-6 py-3 mx-3 mb-3 flex-auto border border-black rounded-2xl">
                  <StudentInfo
                    student={student}
                    session={session}
                  />
                </div>
                <div className="relative px-6 py-3 flex-auto font-semibold">
                  <p>Select A New Session</p>
                </div>
                <div>
                  <ol>
                    {(filterClassesSameUnit().length > 0) ? (
                      filterClassesSameUnit().map((c, cIdx) => (
                        <li
                          key={c.sessionId}
                          className={classNames(
                            cIdx > 0 && 'border-t border-black'
                          )}
                        >
                          <RescheduleList session={c} />
                        </li>
                      ))
                    ) : (
                      <div className="px-4 pb-4">No sessions available for reschedule.</div>
                    )}
                  </ol>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}