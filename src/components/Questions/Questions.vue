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
          {{ questionIndex + 1 }} - 
          {{ currentQuestion.question }}
        </p>

        <div class="answer-list" 
             v-for="(answer, index) 
             in randomAnswers"
             :key="index">
             <div class="answer">
              <input type="radio" 
                    name="answer"
                    :id="index" 
                    :value="answer"
                    v-model="currtenAnswer" 
              >
              <label :for="index">{{ answer }}</label>
            </div>
        </div>
      </div>
      <button @click="checkAnswer()"
              v-show="questionIndex < 9"
              :disabled="!currtenAnswer"
              class="btn-next">
              Next <i class="far fa-hand-point-right"></i>
      </button>

      <span>Pontuação: {{ getPoints }}</span>
    </div>
    <div v-else>Carregando</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'questions',
  data() {
    return {
      questionIndex: 0,
      currtenAnswer: ''
    };
  },

  computed: {
    ...mapGetters(['getQuestionList', 'getPoints']),

    currentQuestion() {
      return this.getQuestionList[this.questionIndex];
    },

    randomAnswers() {
      console.log(this.currentQuestion.correct_answer);
      return this.currentQuestion.incorrect_answers
        .concat(this.currentQuestion.correct_answer)
        .sort(() => 0.5 - Math.random());
    }
  },

  methods: {
    ...mapActions(['addPoint']),

    capitalizeFirstLetter(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
    checkAnswer() {
      if (this.currtenAnswer == this.currentQuestion.correct_answer) {
        this.addPoint();
      }
      this.currtenAnswer = '';
      return this.questionIndex++;
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
    background-color: #8e44ad;
    color: #fff;
    border-radius: 2px;
  }
}

.answer-list {
  .answer {
    display: flex;
    flex-direction: column;
    padding: 0.5em 0;

    label {
      background-color: #f5f6fa;
      padding: 0.5em;
      transition: all 0.2s;

      &:hover {
        cursor: pointer;
        background-color: #3d3d3d;
        color: #fff;
        transform: scale(1.03);
      }
    }

    input {
      display: none;

      &:checked ~ label {
        background-color: #3d3d3d;
        color: #fff;
      }
    }
  }
}

.btn-next {
  padding: 1em;
  float: right;
  border: 0;
  background-color: #8e44ad;
  color: #fff;

  &:disabled {
    background-color: #ddd;
    color: #3d3d3d;
  }
}
</style>

