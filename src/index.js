import store from "./Store.js";
import { addTask,removeTask, completedTask } from "./taskReducer";
import {addEmployee,removeEmloyee} from './employee';
const unsubscribe = store.subscribe(()=>{
    console.log("subscribe:-",store.getState());
});
store.dispatch(addTask({task:'task 1'}));
store.dispatch(addTask({task:'task 2'}));
console.log(store.getState());
unsubscribe();
store.dispatch(completedTask({id:2}));
console.log(store.getState());
store.dispatch(removeTask({id:1}));
console.log(store.getState());

store.dispatch(addEmployee({employee:'emp 1'}));
store.dispatch(addEmployee({employee:'emp 2'}));

console.log(store.getState());
store.dispatch(removeEmloyee({id:1}));

store.dispatch({type:'SHOW_ERROR',payload:{error:'user not found'}});