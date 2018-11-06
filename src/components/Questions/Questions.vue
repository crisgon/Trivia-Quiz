<template>
  <div>
    <div class="card" v-if="getQuestionList.length">
      <div class="question">
        <div class="question-info">
          <span class="question-category">
            <i class="fas fa-bookmark"></i> {{ currentQuestion.category }}
          </span>
          <span :class="['question-level', currentQuestion.difficulty]">
            {{ capitalizeFirstLetter(currentQuestion.difficulty) }}
            <i class="fas fa-signal"></i>
          </span>
        </div>
        <p class="question-text">
          {{ currentQuestion.question }}
        </p>

        <div class="answer" 
             v-for="(answer, index) 
             in randomAnswers"
             :key="index">
          <input type="radio" 
                 name="answer"
                 :id="index" 
                 :value="answer" 
          >
          <label :for="index">{{ answer }}</label>
        </div>
      </div>
      <button @click="questionIndex++"
              v-show="questionIndex < 9">
              Next <i class="far fa-hand-point-right"></i>
      </button>
    </div>
    <div v-else>Carregando</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'questions',
  data() {
    return {
      questionIndex: 0,
      questions: []
    };
  },

  computed: {
    ...mapGetters(['getQuestionList']),

    currentQuestion() {
      return this.getQuestionList[this.questionIndex];
    },

    randomAnswers() {
      return this.currentQuestion.incorrect_answers
        .concat(this.currentQuestion.correct_answer)
        .sort(() => 0.5 - Math.random());
    }
  },

  methods: {
    capitalizeFirstLetter(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 600px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 4px;
  padding: 1em;
}

.question {
  &-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &-category,
  &-level {
    font-size: 0.8em;
    font-weight: bold;
  }

  .easy {
    color: #44bd32;
  }

  .medium {
    color: #fbc531;
  }

  .hard {
    color: #e84118;
  }

  &-text {
    margin-top: 1em;
    padding: 1em;
    background-color: #f5f6fa;
    border-radius: 2px;
  }
}
</style>

