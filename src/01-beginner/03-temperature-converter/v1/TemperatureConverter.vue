<script lang="ts" setup>
import { ref } from 'vue';

    
    const celsius = ref(0); 
    const fahrenheit = ref(0)

    const handleCelsiusChange = (valorCelsius: number) => {
        const converter = (valorCelsius * 9/5) + 32
        fahrenheit.value = converter; 
    }

    const handleFahrenheitChange = (valorFahrenheit: number) => {
        const converter = (valorFahrenheit - 32) * 5/9
        celsius.value = converter;

    }

</script>

<template>
    <div class="min-h-screen bg-[#050b1a] flex flex-col items-center justify-center p-6 font-sans">
        <h1 class="title">Temperature converter</h1>
        
        <div class="white-card">
            <div>
                <p class="font-semibold text-gray-700">Celsius(C)</p>
                <input 
                    type="number" 
                    class="input-large" 
                    @change="() => handleCelsiusChange(celsius)" 
                    v-model="celsius"
                >
                <p class="font-semibold text-gray-700">Fahrenheit(F)</p>
                <input 
                    type="number" 
                    class="input-large" 
                    @change="() => handleFahrenheitChange(fahrenheit)" 
                    v-model="fahrenheit"
                >
            </div>
            
        </div>
    </div>
</template>

<style scoped>
@reference "tailwindcss";

.input-large {
    @apply w-64 p-3 border-2 border-gray-200 rounded-lg text-center text-xl focus:outline-none focus:border-blue-500;
}
</style>