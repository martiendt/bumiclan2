export const routes = {
  path: '/template',
  component: () => import('@/layouts/app/app-index.vue'),
  children: [
    {
      path: '',
      children: [
        {
          path: '',
          component: () => import('./views/page-index.vue')
        }
      ]
    },
    {
      path: 'element',
      children: [
        {
          path: '',
          component: () => import('./views/element/page-index.vue')
        },
        {
          path: 'alert',
          component: () => import('./views/element/alert/page-alert.vue')
        },
        {
          path: 'avatar',
          component: () => import('./views/element/avatar/page-avatar.vue')
        },
        {
          path: 'badge',
          component: () => import('./views/element/badge/page-badge.vue')
        },
        {
          path: 'breadcrumb',
          component: () => import('./views/element/breadcrumb/page-breadcrumb.vue')
        },
        {
          path: 'button',
          component: () => import('./views/element/button/page-button.vue')
        },
        {
          path: 'button-group',
          component: () => import('./views/element/button-group/page-button-group.vue')
        },
        {
          path: 'card',
          component: () => import('./views/element/card/page-card.vue')
        },
        {
          path: 'divider',
          component: () => import('./views/element/divider/page-divider.vue')
        },
        {
          path: 'starter',
          component: () => import('./views/element/starter/page-starter.vue')
        },
        {
          path: 'mask',
          component: () => import('./views/element/mask/page-mask.vue')
        },
        {
          path: 'progress',
          component: () => import('./views/element/progress/page-progress.vue')
        },
        {
          path: 'skeleton',
          component: () => import('./views/element/skeleton/page-skeleton.vue')
        },
        {
          path: 'spinner',
          component: () => import('./views/element/spinner/page-spinner.vue')
        },
        {
          path: 'tooltip',
          component: () => import('./views/element/tooltip/page-tooltip.vue')
        },
        {
          path: 'typography',
          component: () => import('./views/element/typography/page-typography.vue')
        }
      ]
    },
    {
      path: 'component',
      children: [
        {
          path: 'accordion',
          component: () => import('./views/component/accordion/page-accordion.vue')
        },
        {
          path: 'collapse',
          component: () => import('./views/component/collapse/page-collapse.vue')
        },
        {
          path: 'dropdown',
          component: () => import('./views/component/page-dropdown.vue')
        },
        {
          path: 'menu-list',
          component: () => import('./views/component/page-menu-list.vue')
        },
        {
          path: 'modal',
          component: () => import('./views/component/modal/page-modal.vue')
        },
        {
          path: 'notification',
          component: () => import('./views/component/page-notification.vue')
        },
        {
          path: 'popover',
          component: () => import('./views/component/page-popover.vue')
        },
        {
          path: 'steps',
          component: () => import('./views/component/page-steps.vue')
        },
        {
          path: 'tabs',
          component: () => import('./views/component/tabs/page-tabs.vue')
        },
        {
          path: 'timeline',
          component: () => import('./views/component/page-timeline.vue')
        },
        {
          path: 'treeview',
          component: () => import('./views/component/treeview/page-treeview.vue')
        },
        {
          path: 'table',
          component: () => import('./views/component/page-table.vue')
        },
        {
          path: 'table-advance',
          component: () => import('./views/component/page-table-advance.vue')
        }
      ]
    },
    {
      path: 'form',
      children: [
        {
          path: 'form-layout-1',
          component: () => import('./views/form/page-form-layout-1.vue')
        },
        {
          path: 'form-layout-2',
          component: () => import('./views/form/page-form-layout-2.vue')
        },
        {
          path: 'form-layout-3',
          component: () => import('./views/form/page-form-layout-3.vue')
        },
        {
          path: 'form-layout-4',
          component: () => import('./views/form/page-form-layout-4.vue')
        },
        {
          path: 'form-layout-5',
          component: () => import('./views/form/page-form-layout-5.vue')
        },
        {
          path: 'checkbox',
          component: () => import('./views/form/page-checkbox.vue')
        },
        {
          path: 'datepicker',
          component: () => import('./views/form/page-datepicker.vue')
        },
        {
          path: 'input-group',
          component: () => import('./views/form/page-input-group.vue')
        },
        {
          path: 'input-mask',
          component: () => import('./views/form/page-input-mask.vue')
        },
        {
          path: 'input-text',
          component: () => import('./views/form/page-input-text.vue')
        },
        {
          path: 'radio',
          component: () => import('./views/form/page-radio.vue')
        },
        {
          path: 'range',
          component: () => import('./views/form/page-range.vue')
        },
        {
          path: 'select',
          component: () => import('./views/form/page-select.vue')
        },
        {
          path: 'switch',
          component: () => import('./views/form/page-switch.vue')
        },
        {
          path: 'text-editor',
          component: () => import('./views/form/page-text-editor.vue')
        },
        {
          path: 'textarea',
          component: () => import('./views/form/page-textarea.vue')
        },
        {
          path: 'form-upload',
          component: () => import('./views/form/page-form-upload.vue')
        },
        {
          path: 'form-validation',
          component: () => import('./views/form/page-form-validation.vue')
        }
      ]
    }
  ]
}

// export const pageRoutes = {
//   path: '/page',
//   component: () => import('@/layouts/full-layout.vue'),
//   children: [
//     {
//       path: '',
//       component: () => import('./module-index.vue'),
//       children: [
//         {
//           path: 'signin',
//           component: () => import('./views/page/signin.vue'),
//         },
//       ],
//     },
//   ],
// }
