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
          score: 75
        },
        health: {
          score: 100
        },
        kpi: {
          score: 73.61 * 2
        },
        contributionMeeting: {
          score: 40.3
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
          score: 86
        },
        health: {
          score: 100
        },
        kpi: {
          score: 84.67 * 2
        },
        contributionMeeting: {
          score: 21.45
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
          score: 0
        },
        mental: {
          score: 63
        },
        health: {
          score: 100
        },
        kpi: {
          score: 81.33 * 2
        },
        contributionMeeting: {
          score: 77.35
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
          score: 85
        },
        health: {
          score: 100
        },
        kpi: {
          score: 86.4 * 2
        },
        contributionMeeting: {
          score: 85.7
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
          score: 85.19 * 2
        },
        contributionMeeting: {
          score: 91.65
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
          description: '',
          score: 0
        },
        mental: {
          score: 75
        },
        health: {
          score: 100
        },
        kpi: {
          score: 84.5 * 2
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
          description: '',
          score: 100
        },
        mental: {
          score: 19
        },
        health: {
          score: 100
        },
        kpi: {
          score: 84.16 * 2
        },
        contributionMeeting: {
          score: 32.15
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
          description: '',
          score: 100
        },
        mental: {
          score: 93
        },
        health: {
          score: 0
        },
        kpi: {
          score: 181.72
        },
        contributionMeeting: {
          score: 83.35
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
