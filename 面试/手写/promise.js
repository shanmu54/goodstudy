function myPromise (constructor){
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    var resolve = (value) => {
        if(this.value === 'pending'){
            this.value = value;
            this.status = 'resolved'
        }
    }
    var reject = (reason) =>{
        if(this.status === 'pending'){
            this.reason = reason;
            this.status = 'rejected'
        }
    }
    try{
        constructor(resolve, reject)
    } catch(e){
        reject(e)
    }

}

myPromise.prototype.then = function(onFullfilled, onRejected){
    let self = this;
    switch(self.status){
        case "resolve":
            onFullfilled(self.value);
            break;
        case "rejected":
            onRejected(self.value);
            break;
        default:
    }
}