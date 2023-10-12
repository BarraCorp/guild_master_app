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
]

export default routes
