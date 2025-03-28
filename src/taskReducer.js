import {createSlice} from '@reduxjs/toolkit';
let id=0;

const taskSlice = createSlice({
    name: 'task',
    initialState:[],
    reducers:{
        addTask: (state,action)=>{
            state.push({
                id: ++id,
                task: action.payload.task,
                completed: false 
            });
        },
        removeTask: (state,action)=>{
            const index =  state.findIndex(task=>task.id===action.payload.id);
            state.slice(index,1);  
        },
        completedTask: (state,action)=>{
            const index =  state.findIndex(task=>task.id===action.payload.id);  
            state[index].completed=true;
        }
    }
});
export const  {addTask,removeTask,completedTask}  = taskSlice.actions; 
export default taskSlice.reducer;
