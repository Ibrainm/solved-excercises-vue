<script lang="ts" setup>
import { ref, computed } from 'vue';
import "../../../style.css"

    // 0 1 2 3 5 8 13 
    const num1 = ref(0);
    const num2 = ref(1);
    const num3 = ref(0)
    
    const handleIncrement = () => {
        // num 1 = 0   
        // num 2 = 1
        // num 3 = 1  num3.value = num = 1

        // num 1 = 0   num1.value = num2.value = 1
        // num 2 = 1   num2.value = num = 1
        // num 3 = 1  num3.value = num = 2

        const num = num1.value + num2.value;
        num3.value = num;
        num1.value = num2.value;
        num2.value = num;
        

        // console.log("num3 valor actual: ",num3.value);
        // console.log("num1: ", num1.value);
        // console.log("num2: " ,num2.value);
    }

    const handleDecrement = () => {
        if (num3.value === 0) return;

        // const op1 = num2.value - num1.value;
        // num1.value = op1;
        // const op2 = num2.value - num1.value;
        // num3.value = op2;
        // num2.value = op2;

        num1.value = num2.value - num1.value;
        num3.value = num2.value - num1.value;
        num2.value = num3.value;

        
        // console.log("num1: ", num1.value);
        // console.log("num2: " ,num2.value);
        // console.log("num3: ", num3.value);

    }


</script>
  
<template>
    <div class="min-h-screen bg-[#050b1a] flex flex-col items-center justify-center p-6 font-sans">
        <h1 class="title">Fibonacci Counter</h1>
        <div class="white-card">
            <h2 class="text-plus">  {{ num3 }} </h2>
            <div>
                <button class="btn" @click="handleDecrement">Previous</button>
                <button class="btn" @click="handleIncrement">Next</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
@reference "tailwindcss";

.btn{
    @apply bg-blue-500 text-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-blue-600; 
}


</style>