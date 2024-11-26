<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const task = reactive({
    title: "",
    description: "",
    status: "todo",
});

store.dispatch("addTask", { ...task });
// Form submission handler
const createTask = () => {
    console.log("Task created:", task);

    // Show success alert
    alert(`Task Created!\nTitle: ${task.title}\nDescription: ${task.description}\nStatus: ${task.status}`);

    // Reset form values
    task.title = "";
    task.description = "";
    task.status = "todo";
};
</script>

<template>
    <div>
        <h3 class="text-center my-3">Create New Task</h3>
        <form @submit.prevent="createTask" class="d-flex flex-column">
            <div class="d-flex flex-column gap-1 align-items-baseline mb-5">
                <label for="title" class="fs-5">Title</label>
                <input type="text" id="title" v-model="task.title" class="custom-input"
                    placeholder="Please write your task title here" required />
            </div>
            <div class="d-flex flex-column gap-1 align-items-baseline mb-5">
                <label for="description" class="fs-5">Description</label>
                <textarea id="description" v-model="task.description" class="custom-input"
                    placeholder="Please write your task description here" required></textarea>
            </div>
            <div class="d-flex flex-column gap-1 align-items-baseline mb-5">
                <label for="status" class="fs-5">Status</label>
                <select id="status" v-model="task.status" class="custom-input" required>
                    <option value="todo">To Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div class="d-flex flex-row justify-content-center gap-2">
                <button type="submit" class="btn btn-primary w-25">Create Task</button>
                <router-link to="/" class="btn btn-light w-25 text-center align-self-center p-2">
                    Back
                </router-link>
            </div>
        </form>
    </div>
</template>

<style scoped>
.custom-input{
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
textarea{
    height: 150px;
}
.custom-input:focus{
    outline: none;
}
</style>
