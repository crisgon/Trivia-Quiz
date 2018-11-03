import axios from 'axios';
export default {
  GET_QUESTIONS: (state, category) => {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=' + category)
      .then(response => (state.questions = response.data.results));
  }
};
