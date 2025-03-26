const error =store=>next=>actions=>{
    if (actions.type==='SHOW_ERROR') {
        console.log(actions.payload.error);
         next(actions);
    }
    else{
    const result = next(actions);
    return result;
   
    }
}

export default error;