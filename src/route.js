import Basic from './Routes/Basic.svelte';
import Form from './Routes/Form.svelte';
import Counter from './Routes/Counter.svelte';
import Responsive from './Routes/Responsive.svelte';

const routes = {
    '/': Basic,
    '/form': Form,
    '/counter': Counter,
    '/responsive': Responsive,
}


export default routes;