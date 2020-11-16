import store from './store/store';
import { projectAdded } from './store/projects';
// store.subscribe(() => {
//     console.log("Store changed!", store.getState());
// })

// store.dispatch(bugAdded("Bug 1 added!"));
// store.dispatch(bugAdded("Bug 2 added!"));
// store.dispatch(bugRemoved(1));
// store.dispatch(bugResolved(2));
// console.log(projectAdded({ name: 'project 1' }))
store.dispatch(projectAdded({ name: 'proejct 1' }));
store.dispatch(projectAdded({ name: 'proejct 2' }));


console.log(store.getState());