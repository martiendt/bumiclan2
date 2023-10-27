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
          score: 94
        },
        health: {
          score: 100
        },
        kpi: {
          score: 86.66 * 2
        },
        contributionMeeting: {
          score: 37.5
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
          score: 97
        },
        health: {
          score: 100
        },
        kpi: {
          score: 88.66 * 2
        },
        contributionMeeting: {
          score: 60.7
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
          score: 72
        },
        health: {
          score: 100
        },
        kpi: {
          score: 87.01 * 2
        },
        contributionMeeting: {
          score: 92.85
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
          score: 61
        },
        health: {
          score: 100
        },
        kpi: {
          score: 87.15 * 2
        },
        contributionMeeting: {
          score: 53.55
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
          score: 61
        },
        health: {
          score: 100
        },
        kpi: {
          score: 87.25 * 2
        },
        contributionMeeting: {
          score: 66.95
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
          score: 71
        },
        health: {
          score: 100
        },
        kpi: {
          score: 81.66 * 2
        },
        contributionMeeting: {
          score: 100
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
          score: 71
        },
        health: {
          score: 100
        },
        kpi: {
          score: 81.26 * 2
        },
        contributionMeeting: {
          score: 86.6
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
          score: 84
        },
        health: {
          score: 100
        },
        kpi: {
          score: 79.4 * 2
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
          score: 0
        },
        mental: {
          score: 45
        },
        health: {
          score: 100
        },
        kpi: {
          score: 76.45 * 2
        },
        contributionMeeting: {
          score: 74.1
        },
        training: {
          score: 0
        }
      }
    ]
  }),
  actions: {}
})
