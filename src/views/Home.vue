<template>
    <div class="home">
        <div v-for="row in board">
            <div v-for="col in row" class="board">{{col}}</div>
        </div>
        <button @click="changeTheBoard()">Next</button>
        <button @click="startPlay()">Play</button>
        <div>{{board}}</div>
    </div>
</template>

<script>
  import {gameOfLife} from '../logic'

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
    },
    methods: {
      changeTheBoard() {
        console.log(this.board)
        let newBoard = gameOfLife(this.board)
        console.log(newBoard)
        this.board = newBoard
        console.log(this.board)
        // this.$set(this.board, [], newBoard)
        // console.log(this.board)
      },
      startPlay() {
        setInterval(this.changeTheBoard, 1000)
      }
    }
  }
</script>

<style>
    .board {
        display: inline;
        border-style: solid;
        border-width: 1px;
    }
</style>
