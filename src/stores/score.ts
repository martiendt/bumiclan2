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
          score: 0
        },
        health: {
          score: 100
        },
        kpi: {
          score: 84 * 2
        },
        contributionMeeting: {
          score: 94.45
        },
        training: {
          score: 69.72
        }
      },
      {
        name: 'Kartika',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 81
        },
        health: {
          score: 100
        },
        kpi: {
          score: 93.6 * 2
        },
        contributionMeeting: {
          score: 100
        },
        training: {
          score: 71.67
        }
      },
      {
        name: 'Richmon',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 63
        },
        health: {
          score: 100
        },
        kpi: {
          score: 93 * 2
        },
        contributionMeeting: {
          score: 100
        },
        training: {
          score: 65.09
        }
      },
      {
        name: 'Dewi',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 95
        },
        health: {
          score: 100
        },
        kpi: {
          score: 86.74 * 2
        },
        contributionMeeting: {
          score: 87.5
        },
        training: {
          score: 78.89
        }
      },
      {
        name: 'Yudha',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 54
        },
        health: {
          score: 100
        },
        kpi: {
          score: 85.05 * 2
        },
        contributionMeeting: {
          score: 75.7
        },
        training: {
          score: 56.39
        }
      },
      {
        name: 'Robby',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 72
        },
        health: {
          score: 100
        },
        kpi: {
          score: 88.84 * 2
        },
        contributionMeeting: {
          score: 88.2
        },
        training: {
          score: 68.18
        }
      },
      {
        name: 'Stefani',
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
          score: 78 * 2
        },
        contributionMeeting: {
          score: 93.75
        },
        training: {
          score: 80.42
        }
      },
      {
        name: 'Richwan',
        physique: {
          description: '',
          score: 100
        },
        mental: {
          score: 96
        },
        health: {
          score: 100
        },
        kpi: {
          score: 77.6 * 2
        },
        contributionMeeting: {
          score: 94.45
        },
        training: {
          score: 78.33
        }
      },
      {
        name: 'Martien',
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
          score: 82.41 * 2
        },
        contributionMeeting: {
          score: 63.9
        },
        training: {
          score: 67.08
        }
      }
    ]
  }),
  actions: {}
})
