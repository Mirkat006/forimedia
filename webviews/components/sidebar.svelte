<script lang="ts">
  import { GameController } from '../Game/game';
  import Pipe from './pipe.svelte';
  import Bird from './bird.svelte';
  const game = new GameController();

  let frame = game.newGame();

  function jump() {
    game.jump();
  }

  function startGame() {
    frame = game.start();
  }

  setInterval(() => {
    frame = game.nextFrame();
  }, 1000 / 90);
</script>

<main style="width: {frame.width}px; height: {frame.height}px;" class="game">
  <section id="score">{frame.score}</section>

  <Bird bird={frame.bird} />
  <Pipe pipe={frame.firstPipe} />
  <Pipe pipe={frame.secondPipe} />
  {#if frame.gameOver || !frame.gameStarted}
    <section id="init-screen">
      {#if frame.gameOver}
        <h2>Game Over</h2>
        <br />
        <h2>Score: {frame.score}</h2>
      {/if}
      <br />
      <button on:click={startGame}>New Game</button>
    </section>
  {/if}
  <section style="height: {frame.ground.height}px;" id="ground" />
</main>

<svelte:window on:click={jump} />

<style>
  main {
    position: relative;
    overflow: hidden;
    font-size: bold;
  }
  #ground {
    background-color: var(--vscode-button-foreground);
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #init-screen {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  #init-screen h2 {
    text-align: center;
  }
  #init-screen button {
    font-size: 16px;
    border: none;
    border-radius: none;
    padding: 10px;
    cursor: pointer;
    outline: none;
    transition: ease-in-out 0.2s font-size;
    display: block;
    margin: 0 auto;
  }

  #init-screen button:active,
  #init-screen button:focus {
    outline: none;
    font-size: 15px;
  }

  #score {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 2rem;
    z-index: 10;
    padding: 5px;
    user-select: none;
  }
</style>
