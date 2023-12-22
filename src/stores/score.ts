import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => ({
    scores: [
      {
        name: 'Edwin',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 82
        },
        health: {
          score: 100
        },
        kpi: {
          score: 85 * 2
        },
        contributionMeeting: {
          score: 94.45
        },
        training: {
          score: 81.4
        }
      },
      {
        name: 'Kartika',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 86
        },
        health: {
          score: 0
        },
        kpi: {
          score: 88.1 * 2
        },
        contributionMeeting: {
          score: 100
        },
        training: {
          score: 78.5
        }
      },
      {
        name: 'Richmon',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 0
        },
        health: {
          score: 0
        },
        kpi: {
          score: 0
        },
        contributionMeeting: {
          score: 0
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Dewi',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 0
        },
        health: {
          score: 0
        },
        kpi: {
          score: 0
        },
        contributionMeeting: {
          score: 0
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Yudha',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 0
        },
        health: {
          score: 0
        },
        kpi: {
          score: 0
        },
        contributionMeeting: {
          score: 0
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Robby',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 70
        },
        health: {
          score: 100
        },
        kpi: {
          score: 78 * 2
        },
        contributionMeeting: {
          score: 88.9
        },
        training: {
          score: 71.4
        }
      },
      {
        name: 'Stefani',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 86
        },
        health: {
          score: 100
        },
        kpi: {
          score: 85.54 * 2
        },
        contributionMeeting: {
          score: 83.35
        },
        training: {
          score: 80
        }
      },
      {
        name: 'Richwan',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 92
        },
        health: {
          score: 100
        },
        kpi: {
          score: 78.26 * 2
        },
        contributionMeeting: {
          score: 94.45
        },
        training: {
          score: 40
        }
      },
      {
        name: 'Martien',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 69
        },
        health: {
          score: 100
        },
        kpi: {
          score: 82.4 * 2
        },
        contributionMeeting: {
          score: 72.25
        },
        training: {
          score: 64.2
        }
      }
    ]
  }),
  actions: {}
})
