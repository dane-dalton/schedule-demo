export const parents = [
  {
    parentId: 1,
    firstName: "Mary",
    lastName: "Wells",
    username: "mWells1",
    password: "123Mary",
    students: [
      {
        studentId: 33,
        name: "Thomas Wells",
        schedule: [
          {
            sessionId: 1,
            startDateTime: "2023-01-28T13:30",
            endDateTime: "2023-01-28T14:30",
            sessionType: "class",
            level: "2",
            locationType: "virtual"
          },
          {
            sessionId: 2,
            startDateTime: "2023-02-04T13:30",
            endDateTime: "2023-02-04T14:30",
            sessionType: "class",
            level: "2",
            locationType: "virtual"
          },
          {
            sessionId: 3,
            startDateTime: "2023-02-11T13:30",
            endDateTime: "2023-02-11T14:30",
            sessionType: "class",
            level: "2",
            locationType: "virtual"
          },
          {
            sessionId: 4,
            startDateTime: "2023-02-14T17:30",
            endDateTime: "2023-02-14T18:30",
            sessionType: "contest external",
            level: "CML-4",
            locationType: "virtual"
          },
        ]
      },
      {
        studentId: 56,
        name: "Meghan Wells",
        schedule: [
          {
            sessionId: 5,
            startDateTime: "2023-01-28T13:30",
            endDateTime: "2023-01-28T14:30",
            sessionType: "class",
            level: "4",
            locationType: "virtual"
          },
          {
            sessionId: 6,
            startDateTime: "2023-02-04T13:30",
            endDateTime: "2023-02-04T14:30",
            sessionType: "contest internal",
            level: "4",
            locationType: "virtual"
          },
          {
            sessionId: 7,
            startDateTime: "2023-02-11T13:30",
            endDateTime: "2023-02-11T14:30",
            sessionType: "class",
            level: "4",
            locationType: "virtual"
          },
          {
            sessionId: 8,
            startDateTime: "2023-02-14T17:30",
            endDateTime: "2023-02-14T18:30",
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