<script>
    export let slotName;
</script>

<div class="wrapper">
    <slot>default value</slot>
    <div>
        <slot name="named" slotName={slotName}>named default value</slot>
    </div>
</div>

<style>
    .wrapper {
        border: 1px solid lightgray;
        margin: 1rem;
        padding: 1rem;
    }
</style>