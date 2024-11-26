<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed } from "vue";
import { useStore } from "vuex";
import Swal from 'sweetalert2';

const route = useRoute();
const router = useRouter();
const store = useStore();

const taskId = Number(route.params.id);
const task = computed(() => store.getters.getTaskById(taskId));

const updateTask = () => {
    store.dispatch("updateTask", { ...task });
    Swal.fire({
        title: 'Task Updated!',
        text: 'Your task has been successfully updated.',
        icon: 'success',
        confirmButtonText: 'OK',
    });
    router.push('/');
};
</script>

<template>
    <div class="form-container">
        <h3 class="text-center my-3">Update Your Task</h3>
        <form @submit.prevent="updateTask" class="d-flex flex-column">
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
                <button type="submit" class="btn btn-success w-25">Update Task</button>
                <router-link to="/" class="btn btn-light w-25 text-center align-self-center p-2">
                    Back
                </router-link>
            </div>
        </form>
    </div>
</template>

<!-- <style scoped>
.custom-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

textarea {
    height: 150px;
}

.custom-input:focus {
    outline: none;
}
</style> -->
