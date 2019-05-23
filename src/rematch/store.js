import { init } from '@rematch/core'
import counter from './models/counter'

const store = init({
  models: {
    counter
  }
})
 
export default store
