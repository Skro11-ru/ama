<main>
 <h1>
   AutoMania 🚗
 </h1>

  <Game />
</main>

<script lang="ts">
import Game from '@/core/views/Game/Game.svelte';
</script>

<style lang="scss">
  main{
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1{
      font-size: 45px;
    }
  }
</style>
