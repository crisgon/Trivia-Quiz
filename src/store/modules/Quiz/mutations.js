import axios from 'axios';
export default {
  GET_QUESTIONS: (state, category) => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=' +
          category +
          '&type=multiple'
      )
      .then(response => {
        state.questions = response.data.results;
      });
  },

  ADD_POINT: state => {
    state.points++;
  }
};
