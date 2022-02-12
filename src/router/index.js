import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id',
      component: () => import("../views/WelcomeMessageApp.vue"),
      children: [
        {
          path: '/category',
          component: () => import("../views/NewCategory.vue")
        },
        {
          path: '/contact',
          component: () => import("../views/Contacts.vue")
        },
        {
          path: '/all-message',
          component: () => import("../views/NewMessage.vue")
        }
      ]
    },
    {
      path: '/write-message',
      component: () => import("../views/WriteMessage.vue")
    },
  ]
})

export default router
