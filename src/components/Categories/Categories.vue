<template>
  <div class="categories">
    <router-link to="questions">
        <button 
        v-for="categorie in categories" :key="categorie.code"
        class="categorie" 
        @click="start(categorie.code)">
        <img :src="require(`@/assets/images/${categorie.icon}.svg`)" 
            :alt="categorie.name">
        {{categorie.name}}
      </button>
    </router-link>
  </div>  
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      categories: [
        {
          name: 'General',
          code: '9',
          icon: 'tools'
        },
        {
          name: 'Books',
          code: '10',
          icon: 'book'
        },
        {
          name: 'Movies',
          code: '11',
          icon: 'cinema'
        },
        {
          name: 'Music',
          code: '12',
          icon: 'music'
        },
        {
          name: 'Games',
          code: '15',
          icon: 'game'
        },
        {
          name: 'History',
          code: '23',
          icon: 'history'
        },
        {
          name: 'Animes',
          code: '31',
          icon: 'pikachu'
        }
      ]
    };
  },

  methods: {
    ...mapActions(['getQuestions']),

    start(category) {
      this.getQuestions(category);
    }
  }
};
</script>

<style lang="scss" scoped>
.categories a {
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  text-decoration: none;
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
 