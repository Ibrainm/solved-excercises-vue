<script lang="ts" setup>
import { computed, ref } from 'vue';


const number1 = ref(0);
const number2 = ref(0);
const result = computed(() => number1.value + number2.value);

</script>

<template>    
    <div class="min-h-screen bg-[#050b1a] flex flex-col items-center justify-center p-6 font-sans">
        <!-- Title -->
        <h1 class="title">Input sumator</h1>

        <!-- White card -->
        <div class="white-card">
            
            <!-- Inputs row -->
            <div class="flex items-center space-x-4">
                <input class="input" type="number" v-model="number1">
                <p class="text-plus"><span>+</span></p>
                <input class="input" type="number" v-model="number2">
        </div>

        <!-- result -->
        <div class="flex items-center space-x-3 text-4xl font-bold">
            <span class="text-gray-500"> = </span>
            <span class="text-blue-600 "> {{ result }}</span>
        </div>

        </div>
    </div>
    
</template>


<style scoped>
@reference "tailwindcss";

.container {
    @apply min-h-screen bg-[#050b1a] flex flex-col items-center justify-center p-6 font-sans;
}

.title {
 @apply text-5xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-8;
}

.input {
    @apply w-24 p-3 border-2 border-gray-200 rounded-lg text-center text-xl focus:outline-none focus:border-blue-500;
}

.white-card {
@apply bg-white p-10 rounded-2xl shadow flex flex-col items-center space-y-6
}

.text-plus {
@apply text-2xl font-bold text-gray-700
}

</style>