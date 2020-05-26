import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postIts: [
      {"background":"yellow","color":"","text":""},
      {"background":"pink","color":"","text":""},
      {"background":"purple","color":"","text":""}
    ],
    colors: ["#49ab09", "#09aba0", "#ab091c", "#0e09ab", "#616362"],
  },
  mutations: {
    
    addPostIt(state){
      state.postIts.push({
        background: state.colors[
          Math.floor(Math.random() * state.colors.length)
        ],
        color: "",
        text: ""
      });
    },

    removePostIts(state, postIt) {
      state.postIts.splice(state.postIts.indexOf(postIt), 1)
    },

    changeColor(state, postit) {
      let randomColor = state.colors[Math.floor(Math.random() * state.colors.length)];
      return postit.background = randomColor;
    },

    changeFontColor(state, postit) {
      let randomColor = state.colors[Math.floor(Math.random() * state.colors.length)];
      return postit.color = randomColor;
    },

   
  },
  actions: {
    add(context) {
      context.commit('addPostIt')
    },

    remove(context, postIt) {
      context.commit('removePostIts', postIt)
    },

    changeColor(context, postit) {
      context.commit('changeColor', postit)
    },

    changeFontColor(context, postit) {
      context.commit('changeFontColor', postit)
    }
    
  },

  getters: {
    getViewPostit: state => {
      return state.postIts.filter((postit) => postit.view)
    }
  },
  modules: {
  }
})
