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
            level: "Level 2",
            locationType: "virtual"
          },
          {
            sessionId: 2,
            startDateTime: "2023-02-04T13:30",
            endDateTime: "2023-02-04T14:30",
            sessionType: "class",
            level: "Level 2",
            locationType: "virtual"
          },
          {
            sessionId: 3,
            startDateTime: "2023-02-11T13:30",
            endDateTime: "2023-02-11T14:30",
            sessionType: "class",
            level: "Level 2",
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
          {
            sessionId: 9,
            startDateTime: "2023-02-18T13:30",
            endDateTime: "2023-02-18T14:30",
            sessionType: "class",
            level: "Level 2",
            locationType: "virtual"
          },
          {
            sessionId: 10,
            startDateTime: "2023-02-25T13:30",
            endDateTime: "2023-02-25T14:30",
            sessionType: "class",
            level: "Level 2",
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
            level: "Level 4",
            locationType: "virtual"
          },
          {
            sessionId: 6,
            startDateTime: "2023-02-04T13:30",
            endDateTime: "2023-02-04T14:30",
            sessionType: "contest internal",
            level: "Level 4",
            locationType: "virtual"
          },
          {
            sessionId: 7,
            startDateTime: "2023-02-11T13:30",
            endDateTime: "2023-02-11T14:30",
            sessionType: "class",
            level: "Level 4",
            locationType: "virtual"
          },
          {
            sessionId: 8,
            startDateTime: "2023-02-16T17:30",
            endDateTime: "2023-02-16T18:30",
            sessionType: "contest external",
            level: "CML-5",
            locationType: "virtual"
          },
          {
            sessionId: 11,
            startDateTime: "2023-02-18T13:30",
            endDateTime: "2023-02-18T14:30",
            sessionType: "class",
            level: "Level 4",
            locationType: "virtual"
          },
          {
            sessionId: 12,
            startDateTime: "2023-02-25T13:30",
            endDateTime: "2023-02-25T14:30",
            sessionType: "class",
            level: "Level 4",
            locationType: "virtual"
          },
        ]
      }
    ]
  }
]

export const classesListAllLevels = {
  level0: [

  ],
  level1: [
    
  ],
  level2: [
    {
      sessionId: 206,
      startDateTime: "2023-02-13T17:30",
      endDateTime: "2023-02-13T18:30",
      sessionType: "class",
      level: "Level 2",
      locationType: "virtual"
    },
    {
      sessionId: 207,
      startDateTime: "2023-02-14T17:30",
      endDateTime: "2023-02-14T18:30",
      sessionType: "class",
      level: "Level 2",
      locationType: "virtual"
    },
    {
      sessionId: 208,
      startDateTime: "2023-02-15T17:30",
      endDateTime: "2023-02-15T18:30",
      sessionType: "class",
      level: "Level 2",
      locationType: "virtual"
    },
    {
      sessionId: 209,
      startDateTime: "2023-02-18T13:30",
      endDateTime: "2023-02-18T14:30",
      sessionType: "class",
      level: "Level 2",
      locationType: "virtual"
    },
    {
      sessionId: 210,
      startDateTime: "2023-02-20T17:30",
      endDateTime: "2023-02-20T18:30",
      sessionType: "class",
      level: "Level 2",
      locationType: "virtual"
    },
  ],
  level3: [

  ],
  level4: [

  ],
  level5: [

  ],
  cml4: [

  ],
  cml5: [

  ],
}

export const navLinks = [
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