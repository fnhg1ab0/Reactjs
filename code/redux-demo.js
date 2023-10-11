// import redux library
// npm init -y
// npm install redux

const redux = require('redux');

// create a reducer function
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

// create a store
const createStore = redux.createStore(counterReducer);

// create a subscriber function
const counterSubscriber = () => {
    const latestState = createStore.getState();
    console.log(latestState);
}

// subscribe to the store
createStore.subscribe(counterSubscriber);

// dispatch an action
createStore.dispatch({type: ''});
createStore.dispatch({type: 'increment'});
createStore.dispatch({type: 'decrement'});

// run the file
// node redux-demo.js