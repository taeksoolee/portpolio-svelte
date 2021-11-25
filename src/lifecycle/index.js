import {
    onMount,
    onDestroy,
    beforeUpdate,
    afterUpdate,
    tick, // 화면 갱신을 기다리는 Promise
} from 'svelte';

export default function lifecycle() {
    onMount(() => {
        console.log('onMount ::: ');
    });

    onDestroy(() => {
        console.log('onDestroy ::: ');
    });

    beforeUpdate(() => {
        console.log('beforeUpdate ::: ');
    });

    afterUpdate(() => {
        console.log('afterUpdate ::: ');
    });
}