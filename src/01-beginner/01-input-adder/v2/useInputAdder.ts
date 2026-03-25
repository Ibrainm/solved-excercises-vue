import { computed, ref } from "vue";

export const useInputAdder = (initialValue:number = 0, initialValue2:number = 0 ) => {
    const number1 = ref(initialValue);
    const number2 = ref(initialValue2);

    return {
        number1,
        number2,
        result: computed(() => number1.value + number2.value),
    }
}