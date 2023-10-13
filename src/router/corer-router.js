const routes = [
  // Membros
  {
    path: '/member',
    name: 'Member',
    component: () => import('../views/000-core-master/Member.vue'),
  },
  {
    path: '/member/new',
    name: 'Novo Member',
    component: () => import('../views/000-core-master/MemberForm.vue'),
  },
  {
    path: '/member/edit/:id',
    name: 'Editar Member',
    component: () => import('../views/000-core-master/MemberForm.vue'),
    props: true,
  },
  {
    path: '/member/:idFather/social',
    name: 'Member Social',
    component: () => import('../views/000-core-master/MemberSocial.vue'),
    props: true,
  },
  {
    path: '/member/:idFather/social/new',
    name: 'Member Social Novo',
    component: () => import('../views/000-core-master/MemberSocialForm.vue'),
    props: true,
  },
  {
    path: '/member/:idFather/social/edit/:id',
    name: 'Member Social Edit',
    component: () => import('../views/000-core-master/MemberSocialForm.vue'),
    props: true,
  },
  {
    path: '/member/:idFather/character',
    name: 'Personagens',
    component: () => import('../views/000-core-master/Character.vue'),
    props: true,
  },
  {
    path: '/member/:idFather/character/new',
    name: 'Personagens Novo',
    component: () => import('../views/000-core-master/CharacterForm.vue'),
    props: true,
  },
  {
    path: '/member/:idFather/character/edit/:id',
    name: 'Personagens Edit',
    component: () => import('../views/000-core-master/CharacterForm.vue'),
    props: true,
  },

  // Membros
  {
    path: '/team',
    name: 'Times',
    component: () => import('../views/000-core-master/Team.vue'),
  },
  {
    path: '/team/new',
    name: 'Novo Times',
    component: () => import('../views/000-core-master/TeamForm.vue'),
  },
  {
    path: '/team/edit/:id',
    name: 'Editar Times',
    component: () => import('../views/000-core-master/TeamForm.vue'),
    props: true,
  },
  {
    path: '/team/:idFather/member',
    name: 'Membros do Time',
    component: () => import('../views/000-core-master/TeamMember.vue'),
    props: true,
  },
  {
    path: '/team/:idFather/member/new',
    name: 'Membros do Time Novo',
    component: () => import('../views/000-core-master/TeamMemberForm.vue'),
    props: true,
  },
  {
    path: '/team/:idFather/member/edit/:id',
    name: 'Membros do Time Edit',
    component: () => import('../views/000-core-master/TeamMemberForm.vue'),
    props: true,
  },
]

export default routes
