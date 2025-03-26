import { createSlice } from "@reduxjs/toolkit";

let id=0;
const employeeSlice = createSlice(
    {
        name:'employee',
        initialState:[],
        reducers:{
            addEmployee:(state,action)=>{
                state.push({
                    id: ++id,
                    task: action.payload.employee
                });
            },
            removeEmloyee: (state,action)=>{
                const index =  state.findIndex(task=>task.id===action.payload.id);
                state.slice(index,1);  
            }
        }
    }
);
export const{addEmployee,removeEmloyee} = employeeSlice.actions;
export default employeeSlice.reducer;