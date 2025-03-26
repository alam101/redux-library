const log = (store) => (next)=> (action)=>{
    console.log(store,action);
   next(action);

}

export default log;