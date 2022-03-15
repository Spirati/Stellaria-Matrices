<script lang="ts">
    import type Matrix from "./matrix"

    export let matrix: Matrix
</script>

<table>
{#each matrix.data as row}
    <tr>
    {#each row as cell}
        <td>{cell}</td>
    {/each}
    </tr>
{/each}
</table>

