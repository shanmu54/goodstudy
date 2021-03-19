function myPromise(constructor){
    this.state = 'pending';
    this.value = undefined;
    this.reson = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    try {
        constructor(resolve,reject)
    } catch (error) {
        reject(error)
    }
    let _this = this
    function resolve(value){
        if(_this.state === 'pending'){
            _this.value = value;
            _this.onResolvedCallbacks.forEach(cb=> cb(value))
            _this.state = 'resolved'
        }
    };
    function reject(reason){
        if(_this.state === 'pending'){
            _this.reason = reason;
            _this.onRejectedCallbacks.forEach(cb=>cb(reason))
            _this.state = 'reject'
        }
    };
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
    
    let promise2 = new Promise((resolve, reject) => {
      // 等待态判断，此时异步代码还未走完，回调入数组队列
      if (this.state === "pending") {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
  
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
      if (this.state === "resolved") {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      if (this.state === "rejected") {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
    })
    return promise2
  }
  

/**
 * 解析then返回值与新Promise对象
 * @param {Object} 新的Promise对象，就是我们创建的promise2实例
 * @param {*} x 上一个then的返回值
 * @param {Function} resolve promise2处理器函数的resolve
 * @param {Function} reject promise2处理器函数的reject
 */
 function resolvePromise(promise2, x, resolve, reject) {
     let called;
    if(promise2 ===x) {
        reject(new TypeError('请避免Promise循环引用'))
    }

    if(x !== null && (typeof x=== 'object' || typeof x === 'function')){
        try {
            let then = x.then;
            if(typeof then === 'function'){
                then.call(x,(y)=>{
                    if(called) return;
                    called = true;
                   resolvePromise(promise2, y, resolve, reject)
                },(r)=>{
                    reject(r)
                })
            }else{
                resolve(x)
            }
        } catch (error) {
            reject(error)
        }
    }else{
        resolve(x)
    }
  }
  
  myPromise.prototype.catch = function(onRejected){
      return this.then(null, onRejected)
  } 