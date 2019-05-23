export default {
  state: {
    count: 0,
    started: false
  },
  reducers: {
    increment(state, payload) {
      return {
        started: true,
        count: state.count + payload
      }
    },
    reset() {
      return {
        started: false,
        count: 0
      }
    }
  },
  effects: dispatch => ({
    async incrementAsync(payload) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.counter.increment(payload)
    }
  })
}
