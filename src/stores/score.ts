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
          score: 60
        },
        health: {
          score: 100
        },
        kpi: {
          score: 82.5 * 2
        },
        contributionMeeting: {
          score: 94.45
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Kartika',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 93
        },
        health: {
          score: 100
        },
        kpi: {
          score: 77.14 * 2
        },
        contributionMeeting: {
          score: 100
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Richmon',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 92
        },
        health: {
          score: 100
        },
        kpi: {
          score: 89.67 * 2
        },
        contributionMeeting: {
          score: 82.5
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
          score: 92
        },
        health: {
          score: 100
        },
        kpi: {
          score: 86.66 * 2
        },
        contributionMeeting: {
          score: 100
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
          score: 59
        },
        health: {
          score: 100
        },
        kpi: {
          score: 93.07 * 2
        },
        contributionMeeting: {
          score: 100
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Robby',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 55
        },
        health: {
          score: 100
        },
        kpi: {
          score: 83 * 2
        },
        contributionMeeting: {
          score: 88.9
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Stefani',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 75
        },
        health: {
          score: 100
        },
        kpi: {
          score: 86.74 * 2
        },
        contributionMeeting: {
          score: 83.35
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Richwan',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 95
        },
        health: {
          score: 100
        },
        kpi: {
          score: 82.26 * 2
        },
        contributionMeeting: {
          score: 100
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Martien',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 82
        },
        health: {
          score: 100
        },
        kpi: {
          score: 87.73 * 2
        },
        contributionMeeting: {
          score: 61.15
        },
        training: {
          score: 0
        }
      }
    ]
  }),
  actions: {}
})
