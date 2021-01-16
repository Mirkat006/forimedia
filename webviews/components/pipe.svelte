<script lang="ts">
  import type { PipePair } from '../Game/game';
  export let pipe: PipePair;
</script>

{#if pipe.show}
  <section
    style="left: {pipe.left}px; top: {pipe.topPipe
      .top}px; width: {pipe.width}px; height: {pipe.topPipe.height}px;"
    class="top-pipe pipe"
  />
  <section
    style="left: {pipe.left}px; top: {pipe.bottomPipe
      .top}px; width: {pipe.width}px; height: {pipe.bottomPipe.height}px;"
    class="top-bottom pipe"
  />
{/if}

<style>
  .pipe {
    position: absolute;
    background-color: var(--vscode-button-background);
    -webkit-box-shadow: 4px -1px 7px 0px rgba(50, 50, 50, 0.55);
    -moz-box-shadow: 4px -1px 7px 0px rgba(50, 50, 50, 0.55);
    box-shadow: 4px -1px 7px 0px rgba(50, 50, 50, 0.55);
  }
</style>
