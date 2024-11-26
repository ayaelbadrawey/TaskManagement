<template>
    <router-link to="/add-task" class="plus-task">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="50" height="50" fill="none" viewBox="0 0 24 24">
                <path stroke="grey" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 12h14m-7 7V5" />
            </svg>
    </router-link>
</template>

<style scoped>
.plus-task {
    background-color: #eee;
    height: 350px;
    width: 300px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;
}
@media (max-width: 992px) {
    router-link {
        width: 100% !important;
    }
    .plus-task{
        margin: 20px auto 20px auto;
    }
}
</style>