<script lang="ts">
    export let data: number[][]
    export let name: string

    const elementNames = ["fire", "water", "wind", "earth", "light", "dark"]

    $: indices = data.map((r, i) => [r[0], i]).sort((a, b) => b[0] - a[0]).map(([r, i]) => i)
</script>

<div>
    <b>{name}</b>
    {#each elementNames as name, index}
        {#if indices.indexOf(index) < 4}
            <span>
                {name}: {data[index][0] >= 0 ? "+" : ""}{data[index][0]}
            </span>
        {/if}
    {/each}
</div>

<style>
    div {
        display: flexbox;
        flex-direction: column;
    }
    span, b {
        display: block
    }
</style>