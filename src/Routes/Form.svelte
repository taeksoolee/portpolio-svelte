<script>
    let val = '';
	function handleClick(e) {
		e.preventDefault();
	}
</script>

<form>
    <input bind:value={val} />
    <button type="submit" on:click={handleClick}>sign</button>
</form>
<p>{val}</p>