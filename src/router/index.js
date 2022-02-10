import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("../views/WelcomeMessageApp.vue")
    },
    {
      path: '/write-message',
      component: () => import("../views/WriteMessage.vue")
    },
    {
      path: '/category',
      component: () => import("../views/NewCategory.vue")
    },
    {
      path: '/contact',
      component: () => import("../views/Contacts.vue")
    }
  ]
})

export default router
