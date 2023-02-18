import { createStore } from 'vuex'

export default createStore({
  state: {
    videoWrapperRef: null,
  },
  mutations: {
    SET_VIDEO_REF(state, payload) {
      state.videoWrapperRef = payload
    }
  },

  actions: {
    setVideoRef({ commit }, payload) {
      commit('SET_VIDEO_REF', payload)
    }
  },

  getters: {
    getVideoRef: state => state.videoWrapperRef,
  },
})
