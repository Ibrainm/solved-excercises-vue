<script lang="ts" setup>
import { ref, computed } from 'vue';

    
    const num1 = ref(0);
    const num2 = ref(1);
    const sum = computed(() => num1.value + num2.value);

</script>

<template>
    <div>
        <h1>Fibonacci Counter</h1>
        <input type="number">
        <button>Previous</button>
        <button>Next</button>
    </div>
</template>


<style scoped>

</style>