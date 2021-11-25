<script>
    import {link} from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';

    export let title;
    export let href;
</script>


<li>
    <a {href} use:link use:active>{title}</a>
</li>