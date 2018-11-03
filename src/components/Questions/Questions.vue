<template>
  <div>{{ getQuestionList }}</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'questions',
  computed: {
    ...mapGetters(['getQuestionList'])
  }
};
</script>

<style>
</style>
