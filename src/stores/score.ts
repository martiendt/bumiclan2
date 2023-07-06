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
          score: 42
        },
        health: {
          score: 100
        },
        kpi: {
          score: 83.83 * 2
        },
        contributionMeeting: {
          score: 92.85
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
          score: 77
        },
        health: {
          score: 100
        },
        kpi: {
          score: 87.74 * 2
        },
        contributionMeeting: {
          score: 25
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
          score: 89.67 * 2
        },
        contributionMeeting: {
          score: 91.65
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
          score: 41
        },
        health: {
          score: 100
        },
        kpi: {
          score: 83.83 * 2
        },
        contributionMeeting: {
          score: 69.05
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
          score: 0
        },
        health: {
          score: 100
        },
        kpi: {
          score: 82.4 * 2
        },
        contributionMeeting: {
          score: 69.05
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
          score: 74
        },
        health: {
          score: 100
        },
        kpi: {
          score: 76.66 * 2
        },
        contributionMeeting: {
          score: 67.85
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
          score: 36
        },
        health: {
          score: 100
        },
        kpi: {
          score: 81.06 * 2
        },
        contributionMeeting: {
          score: 67.85
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
          score: 89
        },
        health: {
          score: 100
        },
        kpi: {
          score: 83.19 * 2
        },
        contributionMeeting: {
          score: 75
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
          score: 66
        },
        health: {
          score: 0
        },
        kpi: {
          score: 75.67 * 2
        },
        contributionMeeting: {
          score: 39.3
        },
        training: {
          score: 0
        }
      }
    ],
    scores05: [
      {
        name: 'Edwin',
        physique: {
          description: '32x Push Up',
          score: 100
        },
        mental: {
          score: 81
        },
        health: {
          score: 100
        },
        kpi: {
          score: 93.75 * 2
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
          description: '21x Push Up',
          score: 100
        },
        mental: {
          score: 37
        },
        health: {
          score: 100
        },
        kpi: {
          score: 85.95 * 2
        },
        contributionMeeting: {
          score: 52.1
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Richmon',
        physique: {
          description: '34x Push Up',
          score: 100
        },
        mental: {
          score: 77
        },
        health: {
          score: 100
        },
        kpi: {
          score: 80.35 * 2
        },
        contributionMeeting: {
          score: 91.65
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Dewi',
        physique: {
          description: '22x Push Up',
          score: 100
        },
        mental: {
          score: 55
        },
        health: {
          score: 0
        },
        kpi: {
          score: 79.17 * 2
        },
        contributionMeeting: {
          score: 54.15
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Yudha',
        physique: {
          description: '30x Push Up',
          score: 100
        },
        mental: {
          score: 0
        },
        health: {
          score: 100
        },
        kpi: {
          score: 87.87 * 2
        },
        contributionMeeting: {
          score: 85.4
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Robby',
        physique: {
          description: '26x Push Up',
          score: 100
        },
        mental: {
          score: 72
        },
        health: {
          score: 100
        },
        kpi: {
          score: 80.01 * 2
        },
        contributionMeeting: {
          score: 45.85
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Stefani',
        physique: {
          description: '20x Push Up',
          score: 100
        },
        mental: {
          score: 65
        },
        health: {
          score: 100
        },
        kpi: {
          score: 82.53 * 2
        },
        contributionMeeting: {
          score: 56.25
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Richwan',
        physique: {
          description: '30x Push Up',
          score: 100
        },
        mental: {
          score: 93
        },
        health: {
          score: 100
        },
        kpi: {
          score: 84.99 * 2
        },
        contributionMeeting: {
          score: 79.15
        },
        training: {
          score: 0
        }
      },
      {
        name: 'Martien',
        physique: {
          description: '20x Push Up',
          score: 100
        },
        mental: {
          score: 32
        },
        health: {
          score: 100
        },
        kpi: {
          score: 81.42 * 2
        },
        contributionMeeting: {
          score: 64.6
        },
        training: {
          score: 0
        }
      }
    ]
  }),
  actions: {}
})
