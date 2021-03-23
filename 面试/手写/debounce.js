const debounce = (fn, wait = 500, immediate = true) => {
    let timer ;
    return (...args) => {
        if(immediate){
            fn.call(this,...args);
            immediate = false;
            return
        }

        if(timer) return;
        timer = setTimeout(()=>{
            fn.call(this,...args);
            clearTimeout(timer);
            timer = null
        },wait)
    }
}