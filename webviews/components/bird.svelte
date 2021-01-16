<script lang="ts">
  import type { Bird } from '../Game/game';
  export let bird: Bird;
</script>

<section
  style="width: {bird.size}px; height: {bird.size}px; top: {bird.top}px; left: {bird.left}px;"
  id="bird"
/>

<style>
  #bird {
    background-color: var(--vscode-editorWarning-foreground);
    position: absolute;
  }
</style>
