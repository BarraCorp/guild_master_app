import { createRouter, createWebHistory } from 'vue-router'
import coreRoutes from './corer-router'
import debugRoutes from './debug-router'

import Home from '../views/Home.vue'

const routes = [
  ...coreRoutes,
  ...debugRoutes,
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/rescue',
    name: 'Rescue',
    component: () => import('../views/RescuePassword.vue'),
  },

  // Raças
  {
    path: '/race',
    name: 'Race',
    component: () => import('../views/998-wow-database/Race.vue'),
  },
  {
    path: '/race/new',
    name: 'Novo Race',
    component: () => import('../views/998-wow-database/RaceForm.vue'),
  },
  {
    path: '/race/edit/:id',
    name: 'Editar Race',
    component: () => import('../views/998-wow-database/RaceForm.vue'),
    props: true,
  },
  // Class
  {
    path: '/class',
    name: 'Class',
    component: () => import('../views/998-wow-database/Class.vue'),
  },
  {
    path: '/class/new',
    name: 'Novo Class',
    component: () => import('../views/998-wow-database/ClassForm.vue'),
  },
  {
    path: '/class/edit/:id',
    name: 'Editar Class',
    component: () => import('../views/998-wow-database/ClassForm.vue'),
    props: true,
  },

  // Usuários
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('../views/999-fundacao/Usuarios.vue'),
  },
  {
    path: '/usuarios/new',
    name: 'Novo Usuário',
    component: () => import('../views/999-fundacao/UsuariosForm.vue'),
  },
  {
    path: '/usuarios/edit/:id',
    name: 'Editar Usuário',
    component: () => import('../views/999-fundacao/UsuariosForm.vue'),
    props: true,
  },
  // Grupos do Usuário
  {
    path: '/usuarios/:idFather/group',
    name: 'Grupos Usuario',
    component: () => import('../views/999-fundacao/UserGroup.vue'),
    props: true,
  },
  {
    path: '/usuarios/:idFather/group/new',
    name: 'Grupos Usuario Novo',
    component: () => import('../views/999-fundacao/UserGroupForm.vue'),
    props: true,
  },
  {
    path: '/usuarios/:idFather/group/edit/:id',
    name: 'Grupos Usuario Edit',
    component: () => import('../views/999-fundacao/UserGroupForm.vue'),
    props: true,
  },
  // Formulários
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/999-fundacao/Form.vue'),
  },
  {
    path: '/form/new',
    name: 'Novo Form',
    component: () => import('../views/999-fundacao/FormForm.vue'),
  },
  {
    path: '/form/edit/:id',
    name: 'Edit Form',
    component: () => import('../views/999-fundacao/FormForm.vue'),
    props: true,
  },
  // Campos
  {
    path: '/form/:idFather/field',
    name: 'Field',
    component: () => import('../views/999-fundacao/Field.vue'),
    props: true,
  },
  {
    path: '/form/:idFather/field/new',
    name: 'Field Novo',
    component: () => import('../views/999-fundacao/FieldForm.vue'),
    props: true,
  },
  {
    path: '/form/:idFather/field/edit/:id',
    name: 'Field Edit',
    component: () => import('../views/999-fundacao/FieldForm.vue'),
    props: true,
  },
  // Planos
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('../views/999-fundacao/Plan.vue'),
  },
  {
    path: '/plan/new',
    name: 'Novo Plan',
    component: () => import('../views/999-fundacao/PlanForm.vue'),
  },
  {
    path: '/plan/edit/:id',
    name: 'Edit Plan',
    component: () => import('../views/999-fundacao/PlanForm.vue'),
    props: true,
  },
  //Grupos
  {
    path: '/group',
    name: 'Group',
    component: () => import('../views/999-fundacao/Group.vue'),
  },
  {
    path: '/group/new',
    name: 'Novo Group',
    component: () => import('../views/999-fundacao/GroupForm.vue'),
  },
  {
    path: '/group/edit/:id',
    name: 'Edit Group',
    component: () => import('../views/999-fundacao/GroupForm.vue'),
    props: true,
  },
  // Acesso dos Grupos
  {
    path: '/group/:idFather/acl',
    name: 'ACL',
    component: () => import('../views/999-fundacao/ACL.vue'),
    props: true,
  },
  {
    path: '/group/:idFather/acl/new',
    name: 'ACL Novo',
    component: () => import('../views/999-fundacao/ACLForm.vue'),
    props: true,
  },
  {
    path: '/group/:idFather/acl/edit/:id',
    name: 'ACL Edit',
    component: () => import('../views/999-fundacao/ACLForm.vue'),
    props: true,
  },
  // Programas
  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/999-fundacao/Program.vue'),
  },
  {
    path: '/program/new',
    name: 'Novo Program',
    component: () => import('../views/999-fundacao/ProgramForm.vue'),
  },
  {
    path: '/program/edit/:id',
    name: 'Edit Program',
    component: () => import('../views/999-fundacao/ProgramForm.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
