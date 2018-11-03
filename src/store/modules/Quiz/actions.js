export default {
  getQuestions: (context, category) => {
    context.commit('GET_QUESTIONS', category);
  }
};
