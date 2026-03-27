import { computed, ref } from "vue";

export const useFibonacciCounter = () => {
    const num1 = ref(0);
    const num2 = ref(1);
    const sum = computed(() => num1.value + num2.value);

}