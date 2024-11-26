<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const store = useStore();
const router = useRouter();

const task = reactive({
    title: "",
    description: "",
    status: "",
});

const createTask = () => {
    store.dispatch("addTask", { ...task });
    task.title = "";
    task.description = "";
    task.status = "";
    Swal.fire({
        title: 'Task Created!',
        text: 'Your task has been successfully added.',
        icon: 'success',
        confirmButtonText: 'OK',
    });
    router.push('/');
};
</script>

<template>
    <div class="form-container">
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
                    <option value="Todo">Todo</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div class="d-flex flex-row justify-content-lg-center justify-content-between gap-2 btn-container">
                <button type="submit" class="btn btn-success w-25 ">Create Task</button>
                <router-link to="/" class="btn btn-light w-25 text-center align-self-center p-2">
                    Back
                </router-link>
            </div>
        </form>
    </div>
</template>

<style>
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
@media (max-width: 992px) {
    .form-container {
        padding: 10px 25px 10px 25px;
    }
    .btn-container > button{
        width: 50% !important;
    }
    .btn-container > a{
        width: 50% !important;
    }
}
</style>
