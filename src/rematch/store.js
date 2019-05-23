import { init } from '@rematch/core'
import createLoadingPlugin from '@rematch/loading'

// models
import counter from './models/counter'

const loadingPlugin = createLoadingPlugin({})

const store = init({
  plugins: [loadingPlugin],
  models: {
    counter
  }
})
 
export default store
