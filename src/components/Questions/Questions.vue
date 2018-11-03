<template>
  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'questions',
  data() {
    return {
      questions: []
    };
  },

  created() {
    this.questions = this.getQuestionList;
  },

  computed: {
    ...mapGetters(['getQuestionList'])
  }
};
</script>

<style>
</style>
