<script>
    import { count } from '../store';
    function addCount() {
        $count = $count+1;
    }
</script>

<div>
    {$count}
</div>
<button on:click={addCount}>
    add
</button>

<style>

</style>