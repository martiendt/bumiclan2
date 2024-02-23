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
          score: 74
        },
        health: {
          score: 100
        },
        kpi: {
          score: 88 * 2
        },
        contributionMeeting: {
          score: 100
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
          score: 97
        },
        health: {
          score: 100
        },
        kpi: {
          score: 96.33 * 2
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
          score: 100
        },
        mental: {
          score: 76
        },
        health: {
          score: 100
        },
        kpi: {
          score: 88 * 2
        },
        contributionMeeting: {
          score: 94.45
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
          score: 65
        },
        health: {
          score: 100
        },
        kpi: {
          score: 89 * 2
        },
        contributionMeeting: {
          score: 94.45
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
          score: 56
        },
        health: {
          score: 100
        },
        kpi: {
          score: 86.92 * 2
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
          score: 89
        },
        health: {
          score: 100
        },
        kpi: {
          score: 92 * 2
        },
        contributionMeeting: {
          score: 94.45
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Stefani',
        physique: {
          description: '',
          score: 0
        },
        mental: {
          score: 68
        },
        health: {
          score: 100
        },
        kpi: {
          score: 83.2 * 2
        },
        contributionMeeting: {
          score: 93.75
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
          score: 87
        },
        health: {
          score: 100
        },
        kpi: {
          score: 81.6 * 2
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
          score: 83
        },
        health: {
          score: 100
        },
        kpi: {
          score: 88.27 * 2
        },
        contributionMeeting: {
          score: 81.95
        },
        training: {
          score: 0
        }
      }
    ]
  }),
  actions: {}
})
