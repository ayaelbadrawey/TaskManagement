// @ts-ignore
import { createStore } from "vuex";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "Todo" | "In Progress" | "Done";
}

interface State {
  tasks: Task[];
}

const store = createStore<State>({
  state: {
    tasks: [],
  },
  mutations: {
    ADD_TASK(state: State, task: Task) {
      state.tasks.push(task);
    },

    UPDATE_TASK(state: State, updatedTask: Task) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    },

    DELETE_TASK(state: State, taskId: number) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  actions: {
    addTask({ commit }: any, task: Omit<Task, "id">) {
      const newTask: Task = {
        ...task,
        id: Date.now(),
      };
      commit("ADD_TASK", newTask);
    },
    updateTask({ commit } : any, updatedTask: Task) {
      commit("UPDATE_TASK", updatedTask);
    },
    deleteTask({ commit } : any, taskId: number) {
      commit("DELETE_TASK", taskId);
    },
  },
  getters: {
    allTasks(state: State): Task[] {
      return state.tasks;
    },
    todoTasks(state: State): Task[] {
      return state.tasks.filter((task) => task.status == "Todo");
    },
    inProgressTasks(state: State): Task[] {
      return state.tasks.filter((task) => task.status == "In Progress");
    },
    completedTasks(state: State): Task[] {
      return state.tasks.filter((task) => task.status == "Done");
    },
    getTaskById:
      (state: State) =>
      (id: number): Task | undefined => {
        return state.tasks.find((task) => task.id === id);
      },
  },
});

export default store;
