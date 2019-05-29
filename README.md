# rematch-explorations

I created this repo to play very briefly and high level with `rematch` as the wrapper for `redux`.

The application is a simple counter, where its value is stored in Redux store, and incrementation is executed via Redux actions. Both synchronous and asynchronous.

## Usage
```
yarn install
yarn start
```

## Observations
1. `rematch` isn't an alternative for `redux`. It is built on the top of `redux`
2. It works with `react-redux` meaning from compoment perspective you'd use a classic `connect`
3. Easy setup, close-to-zero-configuration needed. Entire store setup is done in `src/rematch/store.js`
4. Entire `model` configuration (`model` in `rematch` = state, reducers, actions) is done in `src/rematch/models/counter.js`
5. As a brief comparison, the same logic is implemented in Redux in `src/redux/counter.js`. It's 50 lines more.

## Benefits
1. There's no need to implement cumbersome actions, action creators and reducers. `rematch` shifts that responsibility
2. All you need to do is create an object with initial state and functions that modify the state. Easy peasy
3. Easily scalable
4. Easy to migrate from pure Redux
5. It comes with a bunch of handy plugins, e.g. `loading`. Meaning you don't have to worry about implementation of state of loading. Another thing not to keep in mind.