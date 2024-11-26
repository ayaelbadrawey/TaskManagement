import { createRouter, createWebHistory } from 'vue-router'
import AllTasksView from '../views/AllTasksView.vue'
import CreateTaskView from '../views/CreateTaskView.vue'
import TodoTasksView from '../views/TodoTasksView.vue'
import InProgressTasksView from "../views/InProgressTasksView.vue";
import CompletedTasksView from "../views/CompletedTasksView.vue";
import TaskDetailsView from "../views/TaskDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "All Tasks",
      component: AllTasksView,
    },
    {
      path: "/todo",
      name: "Todo Tasks",
      component: TodoTasksView,
    },
    {
      path: "/inprogress",
      name: "In-Progress Tasks",
      component: InProgressTasksView,
    },
    {
      path: "/completed",
      name: "Completed Tasks",
      component: CompletedTasksView,
    },
    {
      path: "/add-task",
      name: "Create New Task",
      component: CreateTaskView,
    },
    {
      path: "/task/:id",
      name: "Task Details",
      component: TaskDetailsView,
    },
  ],
});

export default router
