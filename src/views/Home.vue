<template>
    <div class="home">
        <div v-for="row in board">
            <div v-for="col in row" style="">{{col}}</div>
        </div>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        board: [
          [0, 1, 0],
          [0, 0, 1],
          [1, 1, 1],
          [0, 0, 0]
        ]
      }
    }
  }
</script>
