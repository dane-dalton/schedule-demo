export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

//Maybe dive deeper into this at a later point

// export function sortStudentsSchedulesAsc(studentsArr) {
//   let concatedArr = concatStudentsSchedules(studentsArr)
//   return concatedArr.sort()
// }

// function concatStudentsSchedules(studentsArrays) {
//   let newArr = []
//   studentsArrays.forEach(student => {
//     if (newArr.length <= 0) {
//       newArr = [...student.schedule]
//     } else {
//       newArr = newArr.concat(student.schedule)
//     }
//   });
//   return newArr
// }