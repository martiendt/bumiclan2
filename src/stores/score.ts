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
          score: 87
        },
        health: {
          score: 100
        },
        kpi: {
          score: 88.5 * 2
        },
        contributionMeeting: {
          score: 71.4
        },
        training: {
          score: 72
        }
      },
      {
        name: 'Kartika',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 30
        },
        health: {
          score: 0
        },
        kpi: {
          score: 77.81 * 2
        },
        contributionMeeting: {
          score: 21.45
        },
        training: {
          score: 86.8
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
          score: 91.67 * 2
        },
        contributionMeeting: {
          score: 78.55
        },
        training: {
          score: 92
        }
      },
      {
        name: 'Dewi',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 51
        },
        health: {
          score: 100
        },
        kpi: {
          score: 85.67 * 2
        },
        contributionMeeting: {
          score: 35.7
        },
        training: {
          score: 80.8
        }
      },
      {
        name: 'Yudha',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 68
        },
        health: {
          score: 100
        },
        kpi: {
          score: 78.94 * 2
        },
        contributionMeeting: {
          score: 71.4
        },
        training: {
          score: 66.8
        }
      },
      {
        name: 'Robby',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 85
        },
        health: {
          score: 100
        },
        kpi: {
          score: 82.5 * 2
        },
        contributionMeeting: {
          score: 64.25
        },
        training: {
          score: 78.4
        }
      },
      {
        name: 'Stefani',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 85
        },
        health: {
          score: 100
        },
        kpi: {
          score: 78.5 * 2
        },
        contributionMeeting: {
          score: 64.3
        },
        training: {
          score: 74.4
        }
      },
      {
        name: 'Richwan',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 89
        },
        health: {
          score: 100
        },
        kpi: {
          score: 83.19 * 2
        },
        contributionMeeting: {
          score: 78.55
        },
        training: {
          score: 78
        }
      },
      {
        name: 'Martien',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 38
        },
        health: {
          score: 100
        },
        kpi: {
          score: 80.32 * 2
        },
        contributionMeeting: {
          score: 64.25
        },
        training: {
          score: 86.8
        }
      }
    ]
  }),
  actions: {}
})
