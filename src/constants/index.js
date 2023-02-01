export const parents = [
  {
    parentId: "1",
    firstName: "Mary",
    lastName: "Wells",
    username: "mWells1",
    password: "123Mary",
    students: [
      {
        studentId: "33",
        name: "Thomas Wells",
        schedule: [
          {
            date: "1/28/23",
            startEndTime: "1:30-2:30 CST",
            sessionType: "class",
            level: "2",
            locationType: "virtual"
          },
          {
            date: "2/4/23",
            startEndTime: "1:30-2:30 CST",
            sessionType: "class",
            level: "2",
            locationType: "virtual"
          },
          {
            date: "2/11/23",
            startEndTime: "1:30-2:30 CST",
            sessionType: "class",
            level: "2",
            locationType: "virtual"
          },
          {
            date: "2/14/23",
            startEndTime: "5:30-6:30 CST",
            sessionType: "contest external",
            level: "CML-4",
            locationType: "virtual"
          },
        ]
      },
      {
        studentId: "56",
        name: "Meghan Wells",
        schedule: [
          {
            date: "1/28/23",
            startEndTime: "1:30-2:30 CST",
            sessionType: "class",
            level: "4",
            locationType: "virtual"
          },
          {
            date: "2/4/23",
            startEndTime: "1:30-2:30 CST",
            sessionType: "contest internal",
            level: "4",
            locationType: "virtual"
          },
          {
            date: "2/11/23",
            startEndTime: "1:30-2:30 CST",
            sessionType: "class",
            level: "4",
            locationType: "virtual"
          },
          {
            date: "2/16/23",
            startEndTime: "4:20-5:20 CST",
            sessionType: "contest external",
            level: "CML-5",
            locationType: "virtual"
          },
        ]
      }
    ]
  }
]

export const  navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "students",
    title: "Students",
  },
  {
    id: "profile",
    title: "Profile"
  }
]