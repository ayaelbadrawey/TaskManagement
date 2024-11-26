<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Task from '../components/Task.vue'

const store = useStore();
const completedTasks = computed(() => store.getters.completedTasks);
</script>

<template>
    <main class="row">
        <Task v-for="task in completedTasks" class="col-lg-3 col-12" :task="task"></Task>
    </main>
</template>
