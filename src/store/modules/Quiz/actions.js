export default {
  getQuestions: (context, category) => {
    context.commit('GET_QUESTIONS', category);
  },

  addPoint: context => {
    context.commit('ADD_POINT');
  }
};
