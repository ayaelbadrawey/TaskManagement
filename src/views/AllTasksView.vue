<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Task from '../components/Task.vue'
import PlusTask from '../components/PlusTask.vue'

const store = useStore();
const tasks = computed(() => store.getters.allTasks);
</script>

<template>
  <main class="row">
    <PlusTask class="col-lg-3 col-12"></PlusTask>
    <Task v-for="task in tasks" class="col-lg-3 col-12" :task="task"></Task>
  </main>
</template>
