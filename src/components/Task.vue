<script setup lang="ts">
import { useStore } from "vuex";
import Swal from 'sweetalert2';

const store = useStore();

const props = defineProps({
    task: {
        type: Object,
        required: true,
    },
});
const changeStatus = (task, status) =>{
    const updated_task = {
        id: task.id,
        title: task.title,
        description: task.description,
        status: status
    }
    store.dispatch("updateTask", { ...updated_task })    
}
const deleteTask = async (id) => {
    const result = await Swal.fire({
        title: 'Are you sure you want to delete this task?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    });

    if (result.isConfirmed) {
        store.dispatch("deleteTask", id)
        Swal.fire('Deleted!', 'Task has been deleted.', 'success');
    }
};


</script>

<template>
    <div class="task" >
        <div class="d-flex justify-content-between w-100 h-0">
            <h4 class="m-0">{{ task.title }}</h4>
            <div class="d-flex">
                <router-link class="edit-delete-button" :to="`/task/${task.id}`">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                    </svg>
                </router-link>
                <button class="edit-delete-button" @click="deleteTask(task.id)">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="description">{{ task.description }}</div>
        <div class="d-flex flex-column gap-2">
            <span
                :class="task.status == 'Todo' ? 'text-primary' : task.status == 'Done' ? 'text-success' : 'text-warning'">{{
                task.status }}</span>
            <button class="operation-button" v-if="task.status == 'Todo'" @click="changeStatus(task, 'In Progress')">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="currebluentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                        clip-rule="evenodd" />
                </svg>
                Start Task</button>
            <button class="operation-button" v-if="task.status == 'In Progress'" @click="changeStatus(task, 'Done')">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 21a9 9 0 1 1 0-18c1.052 0 2.062.18 3 .512M7 9.577l3.923 3.923 8.5-8.5M17 14v6m-3-3h6" />
                </svg>
                Mark as completed</button>
        </div>
    </div>
</template>

<style scoped>
.task {
    background-color: lavender;
    height: 350px;
    width: 300px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin: 20px;
}

.task>div {
    height: fit-content;
    align-items: baseline;
}

.description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
}

.edit-delete-button {
    height: unset !important;
    border: unset;
    background-color: unset;
    display: flex;
    padding: unset;
}

.operation-button {
    border: unset;
    background-color: unset;
    width: fit-content;
    padding: 0;
}

@media (max-width: 992px) {
    .task {
        margin: 20px auto 20px auto;
    }
}
</style>