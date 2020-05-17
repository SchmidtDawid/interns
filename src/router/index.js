import Vue from 'vue';
import VueRouter from 'vue-router';
import ShowInterns from '../views/ShowInterns.vue';
import AddIntern from '../views/AddIntern.vue';
import EditIntern from '../views/EditIntern.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ShowInterns',
    component: ShowInterns,
  },
  {
    path: '/intern/add',
    name: 'AddIntern',
    component: AddIntern,
  },
  {
    path: '/intern/:id/edit',
    name: 'EditIntern',
    component: EditIntern,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
