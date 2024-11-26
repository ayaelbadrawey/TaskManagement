<template>
    <div class="sidebar mx-4 py-3">
        <h3>Task-Management</h3>
        <div class="tasks-container">
            <router-link to="/" class="px-2">
                <div class="nav-task">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                            d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
                    </svg>
                    <span>All Tasks</span>
                </div>
            </router-link>
            <router-link to="/todo" class="px-2">
                <div class="nav-task">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                    </svg>
                    <span>Todo Tasks</span>
                </div>
            </router-link>
            <router-link to="/inprogress" class="px-2">
                <div class="nav-task">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>In-Progress Tasks</span>
                </div>
            </router-link>
            <router-link to="/completed" class="px-2">
                <div class="nav-task">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>Completed Tasks</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    background-color: #eee;
    gap: 10px;
    border-radius: 6px;
    height: 100vh;
}

.tasks-container {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.nav-task{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 0 5px 0;
}
.router-link-active{
    background-color: #ddd;
    border-radius: 5px;
}
.router-link-active > div> span {
    font-weight: 600;
}
@media (max-width: 992px) {
    .sidebar{
        height: fit-content;
    }
}
</style>