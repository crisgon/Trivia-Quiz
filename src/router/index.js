import Vue from 'vue';
import Router from 'vue-router';
import categories from '@/components/Categories/Categories';
import questions from '@/components/Questions/Questions';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Categories',
      component: categories
    },
    {
      path: '/questions',
      name: 'Questions',
      component: questions
    }
  ]
});
