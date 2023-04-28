import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => ({
    scores: [
      {
        name: 'Edwin',
        physique: {
          description: '48x Sit Up',
          score: 100
        },
        mental: {
          score: 0
        },
        health: {
          score: 100
        },
        kpi: {
          score: 84.5
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
          description: '0x Sit Up',
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
        name: 'Richmon',
        physique: {
          description: '0x Sit Up',
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
          description: '0x Sit Up',
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
          description: '41x Sit Up',
          score: 100
        },
        mental: {
          score: 22
        },
        health: {
          score: 0
        },
        kpi: {
          score: 83.78
        },
        contributionMeeting: {
          score: 71.4
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Robby',
        physique: {
          description: '0x Sit Up',
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
        name: 'Stefani',
        physique: {
          description: '33x Sit Up',
          score: 100
        },
        mental: {
          score: 70
        },
        health: {
          score: 100
        },
        kpi: {
          score: 79.56
        },
        contributionMeeting: {
          score: 42.9
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Richwan',
        physique: {
          description: '0x Sit Up',
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
        name: 'Martien',
        physique: {
          description: '17x Sit Up',
          score: 0
        },
        mental: {
          score: 40
        },
        health: {
          score: 0
        },
        kpi: {
          score: 68.66
        },
        contributionMeeting: {
          score: 28.6
        },
        training: {
          score: 0
        }
      }
    ]
  }),
  actions: {}
})
