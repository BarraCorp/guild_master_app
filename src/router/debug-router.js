const routes = [
  // Membros
  {
    path: '/debug/team',
    name: 'Debug Team',
    component: () => import('../views/997-debug-pages/Team.vue'),
  },
  {
    path: '/debug/team/view/:id',
    name: 'Debug Team View',
    component: () => import('../views/997-debug-pages/TeamView.vue'),
    props: true,
  },
  {
    path: '/debug/team/view/:idFather/member/new',
    name: 'Debug Team Member New',
    component: () => import('../views/997-debug-pages/TeamMemberNew.vue'),
    props: true,
  },
  {
    path: '/debug/team/new',
    name: 'Debug Team New',
    component: () => import('../views/997-debug-pages/TeamNew.vue'),
  },
]

export default routes
