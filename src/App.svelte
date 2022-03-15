<script lang="ts">
	import Matrix from "./matrix"
	import MatrixComponent from "./MatrixComponent.svelte"
	import MatrixToItem from "./MatrixToItem.svelte"

	let initialData: number[] = new Array(6).fill(0)
	let data: number[][] = Matrix.identity(6).data

	// let initialColumn = new Matrix({ dimensions: [6, 1] })
	$: initialColumn = new Matrix({ data: new Array(6).fill(0).map((_, i) => [initialData[i]]) })
	$: multiply = new Matrix({ data })
	$: result = multiply.multiply(initialColumn)

    const elementNames = ["fire", "water", "wind", "earth", "light", "dark"]
</script>

<main>
	<h1>Stellaria Combination Matrices</h1>
	<div id="matrixDisplay">
		<h2>Initial</h2>
		<h2>Multiply</h2>
		<h2>Output</h2>
		<!-- <MatrixComponent matrix={initialColumn}/> -->
		<table>
			{#each initialData as cell, x}
			<tr>
				<td>{elementNames[x]}</td><td><input type="number" bind:value={initialData[x]}></td>
			</tr>
			{/each}
		</table>
		<!-- <MatrixComponent matrix={multiply}/> -->
		<table>
			{#each data as row, y}
			<tr>
				{#each row as cell, x}
					<td><input type="number" bind:value={data[y][x]}></td>
				{/each}
			</tr>
			{/each}
		</table>
		<MatrixComponent matrix={result}/>

		<MatrixToItem data={result.data} name="Output" />
	</div>
</main>

<style>
	h1 {
		text-align: center;
	}
	#matrixDisplay {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width: 85%;
		margin: auto;
		justify-items: center;
	}

	input {
		width: 7ch;
	}
</style>