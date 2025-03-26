import * as actionTypes from './actionTypes.js';
export const  CREATE_TASK="CREATE_TASK";
export const  REMOVE_TASK="REMOVE_TASK";
export const  COMPLETE_TASK="COMPLETE_TASK";
export const addTask = (task)=>{
    return {type: actionTypes.CREATE_TASK,payload:{task:task}}
}
export const removeTask = (id)=>{
    return {type: actionTypes.REMOVE_TASK,payload:{id:id}}
}
export const completeTask = (id)=>{
    return {type: actionTypes.COMPLETE_TASK,payload:{id:id}}
}