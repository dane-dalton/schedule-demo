import { compareAsc } from "date-fns";

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function sortStudentsSchedulesAsc(studentsArr) {
  let concatedArr = concatStudentsSchedules(studentsArr)

  return concatedArr.sort(compareAsc(a.startDateTime, b.startDateTime))
}

function concatStudentsSchedules(studentsArrays) {
  let newArr = []
  studentsArrays.forEach(student => {
    if (newArr.length <= 0) {
      newArr = [...student.schedule]
    } else {
      newArr = newArr.concat(student.schedule)
    }
  });
  return newArr
}