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
          score: 85.16 * 2
        },
        contributionMeeting: {
          score: 88.9
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
          score: 85
        },
        health: {
          score: 100
        },
        kpi: {
          score: 87.61 * 2
        },
        contributionMeeting: {
          score: 33.35
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
          score: 0
        },
        health: {
          score: 0
        },
        kpi: {
          score: 0 * 2
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
          score: 0 * 2
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
          score: 100
        },
        mental: {
          score: 58
        },
        health: {
          score: 100
        },
        kpi: {
          score: 92.4 * 2
        },
        contributionMeeting: {
          score: 77.8
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
          score: 64
        },
        health: {
          score: 100
        },
        kpi: {
          score: 78.5 * 2
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
          score: 46
        },
        health: {
          score: 100
        },
        kpi: {
          score: 85.56 * 2
        },
        contributionMeeting: {
          score: 88.9
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
          score: 0
        },
        health: {
          score: 0
        },
        kpi: {
          score: 0 * 2
        },
        contributionMeeting: {
          score: 0
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
          score: 81
        },
        health: {
          score: 100
        },
        kpi: {
          score: 90.2 * 2
        },
        contributionMeeting: {
          score: 88.9
        },
        training: {
          score: 0
        }
      }
    ]
  }),
  actions: {}
})
