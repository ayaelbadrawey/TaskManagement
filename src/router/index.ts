import { createRouter, createWebHistory } from 'vue-router'
import AllTasksView from '../views/AllTasksView.vue'
import CreateTaskView from '../views/CreateTaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "All Tasks",
      component: AllTasksView,
    },
    {
      path: "/add-task",
      name: "Create New Task",
      component: CreateTaskView,
    },
  ],
});

export default router
