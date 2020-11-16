import store from './store';

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
})

store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'bug added'
    }
})



store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'Second bug added!'
    }
})

unsubscribe();
store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 2
    }
})


console.log(store.getState());