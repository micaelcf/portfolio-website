<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";
  import "../app.postcss";
</script>

<div class=" bg-gray-300"><NavBar/>
  <slot />
</div>
