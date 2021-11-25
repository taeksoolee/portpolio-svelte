import { 
    writable,
    readable,
    derived,
} from 'svelte/store';

// writable(valuie, callback)
// set, update, subscribe
export let count = writable(0, () => {
    console.log('구독 시 호출');
    return () => {
        console.log('모든 구독 해제 시 호출');
    }
});

// readable(value, callback)
//
export let staticValue = readable(0, (set) => {
    console.log('구독 시 호출');
    set(1); // default setting
    return () => {
        console.log('모든 구독 해제 시 호출');
    }
});

