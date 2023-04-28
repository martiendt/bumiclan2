export const routes = {
  path: '/',
  component: () => import('@/layouts/app/app-index.vue'),
  children: [
    {
      path: '',
      component: () => import('./views/page-index.vue')
    },
    {
      path: 'clash-of-clan',
      component: () => import('./views/page-clash-of-clan.vue')
    },
    {
      path: 'physique',
      component: () => import('./views/page-physique.vue')
    },
    {
      path: 'mental',
      component: () => import('./views/page-mental.vue')
    },
    {
      path: 'health',
      component: () => import('./views/page-health.vue')
    },
    {
      path: 'kpi',
      component: () => import('./views/page-kpi.vue')
    },
    {
      path: 'contribution-meeting',
      component: () => import('./views/page-contribution-meeting.vue')
    },
    {
      path: 'training',
      component: () => import('./views/page-training.vue')
    }
  ]
}
