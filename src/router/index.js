import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio';
import Contacto from '@/components/Contacto';
import Libro from '@/components/Libro';
import Categoria from '@/components/Categorias';
import Login from '@/components/Login';
import Registro from '@/components/Registro';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto,
    },
    {
      path: '/libros/:id',
      name: 'Libro',
      component: Libro,
    },
    {
      path: '/categorias/:categoria',
      name: 'Categoria',
      component: Categoria,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro,
    },
  ],
});
