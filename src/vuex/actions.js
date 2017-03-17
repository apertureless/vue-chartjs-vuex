export const addData = ({ commit }, e) => commit('addData', [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()])

function getRandomInt () {
  return Math.floor(Math.random() * (50 - 5 + 1)) + 5
}
