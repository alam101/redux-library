import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './taskReducer';
import employeeReducer from './employee';
// import log from './middleware/log';
import { logger } from 'redux-logger';
import error from './middleware/error';
import {addTask,removeTask,completedTask} from './taskReducer';
const store = configureStore(
    {
        reducer: {
            tasks: taskReducer,
            employees: employeeReducer
        },
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware(), // keeps Redux Toolkit's default middlewares
            logger,
            error
        ]


    }
   
);    
 export const  addTask1 = addTask({});
export default store;