<script>
    let text = 'hello world';
    
    // 1. 
    $: computedText = text + '!!!';

    // 2. call function
    const logResponsive = () => {
        console.log(text);
        console.log('change text');
    }

    $: text, logResponsive();

    // 3.
    $: {
        console.log('in bracket', text);
    }

    // 4.
    $: if(text === '') {
        console.log('text is null string');
    }

    // 5.
    $: for(let i=0; i<text.length; i++) {
        console.log('splited ::: ', text[i]);
    }

    $: switch (text) {
        case 'hello':
            console.log('switch hello');
            break;
        default:
            console.log('switch default');
            break;
    }



</script>

<main>
    <input bind:value={text} />
    <div>{text}</div>
    <div>{computedText}</div>
</main>