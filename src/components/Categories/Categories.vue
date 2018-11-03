<template>
  <div class="categories">
    <button class="categorie" @click="start('9')">
      <img src="../../assets/images/tools.svg" alt="Tools">
      General
    </button>

    <button class="categorie" @click="start('10')">
      <img src="../../assets/images/book.svg" alt="Book">
      Books
    </button>

    <button class="categorie"@click="start('11')">
      <img src="../../assets/images/cinema.svg" alt="Popcorn">
      Movies
    </button>

    <button class="categorie"@click="start('12')">
      <img src="../../assets/images/music.svg" alt="Music notes">
      Music
    </button>

    <button class="categorie" @click="start('15')">
      <img src="../../assets/images/game.svg" alt="Joystic">
      Games
    </button>

    <button class="categorie" @click="start('23')">
      <img src="../../assets/images/history.svg" alt="Paper">
      History
    </button>

    <button class="categorie" @click="start('31')">
      <img src="../../assets/images/pikachu.svg" alt="Pikachu">
      Animes
    </button>
  </div>  
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  methods: {
    ...mapActions(['getQuestions']),

    start(category) {
      this.getQuestions(category);
    }
  }
};
</script>

<style lang="scss" scoped>
.categories {
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
}
.categorie {
  width: 80px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 1em;
  border-radius: 4px;
  border: 0;
  transition: all 0.3s;

  img {
    height: 30px;
    margin-bottom: 0.2em;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
}
</style>
