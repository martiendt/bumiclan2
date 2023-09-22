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
          score: 63
        },
        health: {
          score: 0
        },
        kpi: {
          score: 83
        },
        contributionMeeting: {
          score: 61.25
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Kartika',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 80
        },
        health: {
          score: 100
        },
        kpi: {
          score: 74.14 * 2
        },
        contributionMeeting: {
          score: 67.5
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Richmon',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 79
        },
        health: {
          score: 100
        },
        kpi: {
          score: 85.67 * 2
        },
        contributionMeeting: {
          score: 81.25
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Dewi',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 78
        },
        health: {
          score: 100
        },
        kpi: {
          score: 84.99 * 2
        },
        contributionMeeting: {
          score: 67.5
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Yudha',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 38
        },
        health: {
          score: 100
        },
        kpi: {
          score: 75.94 * 2
        },
        contributionMeeting: {
          score: 45
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
          score: 62
        },
        health: {
          score: 100
        },
        kpi: {
          score: 80.5 * 2
        },
        contributionMeeting: {
          score: 67.5
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
          score: 77
        },
        health: {
          score: 100
        },
        kpi: {
          score: 80.4 * 2
        },
        contributionMeeting: {
          score: 81.25
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Richwan',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 94
        },
        health: {
          score: 100
        },
        kpi: {
          score: 79.06 * 2
        },
        contributionMeeting: {
          score: 93.75
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Martien',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 50
        },
        health: {
          score: 100
        },
        kpi: {
          score: 80.33 * 2
        },
        contributionMeeting: {
          score: 71.25
        },
        training: {
          score: 0
        }
      }
    ]
  }),
  actions: {}
})
