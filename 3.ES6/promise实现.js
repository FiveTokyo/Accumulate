const MyPromise = (function () {
  const PENDING = Symbol('PNEDING'),
    FULFILLED = Symbol('FULFILLED'),
    REJECTED = Symbol('REJECTED'),
    PromiseValue = Symbol('PromiseValue'),
    PromiseStatus = Symbol('PromiseStatus'),
    changeStatus = Symbol('changeStatus'),
    thenables = Symbol('thenables'),
    catchbles = Symbol('catchbles'),
    settleHandle = Symbol('settleHandle'),
    linkPromise = Symbol('linkPromise');
  return class {
    constructor(executor) {
      this[PromiseStatus] = PENDING;
      this[PromiseValue] = undefined;
      this[thenables] = []; //未决状态的then
      this[catchbles] = []; //未决状态的catch
      const resolve = (data) => {
        this[changeStatus](data, FULFILLED, this[thenables]);
      };
      const reject = (reason) => {
        this[changeStatus](reason, REJECTED, this[catchbles]);
      };
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }

    static all(promises) {
      return new MyPromise((resolve, reject) => {
        const results = promises.map((promise) => {
          const obj = {
            result: undefined,
            isResolved: false,
          };
          promise.then(
            (data) => {
              obj.result = data;
              obj.isResolved = true;
              const unResolved = results.filter((result) => {
                return !result.isResolved;
              });
              if (unResolved.length === 0) {
                resolve(results.map((results) => results.result));
              }
            },
            (reason) => {
              reject(reason);
            },
          );
          return obj;
        });
      });
    }

    static race(promises) {
      return new MyPromise((resolve, reject) => {
        promises.forEach((promise) => {
          promise.then(
            (data) => {
              resolve(data);
            },
            (reason) => {
              reject(reason);
            },
          );
        });
      });
    }

    static resolve(data) {
      if (data instanceof MyPromise) {
        return data;
      } else {
        return new MyPromise((resolve) => {
          resolve(data);
        });
      }
    }

    static reject(data) {
      if (data instanceof MyPromise) {
        return data;
      } else {
        return new MyPromise((resolve, reject) => {
          reject(data);
        });
      }
    }

    then(thenable, catchble) {
      // this[settleHandle](thenable, REJECTED, thenables)

      return this[linkPromise](thenable, catchble);
      // this.catch(catchble);
    }
    catch(catchble) {
      // this[settleHandle](catchble, REJECTED, catchbles)
      return this[linkPromise](undefined, catchble);
    }

    //链式调用
    [linkPromise](thenable, catchble) {
      const exec = (data, handle, resolve, reject) => {
        try {
          const result = handle(data);
          if (result instanceof MyPromise) {
            result.then(
              (data) => {
                resolve(data);
              },
              (reason) => {
                reject(reason);
              },
            );
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      return new MyPromise((resolve, reject) => {
        this[settleHandle](
          (data) => {
            if (typeof thenable !== 'function') {
              resolve(data);
              return;
            }
            exec(data, thenable, resolve, reject);
          },
          FULFILLED,
          this[thenables],
        );

        this[settleHandle](
          (reason) => {
            if (typeof catchble !== 'function') {
              reject(data);
              return;
            }
            exec(reason, catchble, resolve, reject);
          },
          REJECTED,
          this[catchbles],
        );
      });
    }

    [settleHandle](handler, immediatelyStatus, queue) {
      if (typeof handler !== 'function') return;
      if (this[PromiseStatus] === immediatelyStatus) {
        setTimeout(() => {
          handler(this[PromiseValue]);
        }, 0);
      } else if (this[PromiseStatus] === PENDING) {
        queue.push(handler);
      }
    }

    //变更状态
    [changeStatus](value, status, queue) {
      if (this[PromiseStatus] !== PENDING) return;
      this[PromiseStatus] = status;
      this[PromiseValue] = value;
      queue.forEach((handler) => handler(value));
    }
  };
})();

// const a = new MyPromise((res, rej) => {
//   setTimeout(() => {
//     res('a');
//   }, 10);
// });

// MyPromise.race(
//   [
//     new MyPromise((res) => {
//       setTimeout(() => {
//         res(1);
//       }, 400);
//     }),
//     new MyPromise((res, rej) => {
//       setTimeout(() => {
//         rej(2);
//       }, 300);
//     }),
//   ],
//   //
// ).then(
//   (data) => {
//     console.log(data);
//   },
//   (reason) => {
//     console.log(reason);
//   },
// );

// a.then((data) => {
//   console.log('data', data);

//   return 'b';
// })
//   .then((data) => {
//     console.log('data', data);
//     return 'c';
//   })
//   .then((data) => {
//     console.log('data', data);
//     return 'd';
//   });

// const b = new MyPromsie((res, rej) => {
//   res('b');
// });
// const c = new MyPromsie((res, rej) => {
//   res('c');
// });

// const d = new MyPromsie((res, rej) => {
//   rej('d');
// });

// const all = MyPromsie.all([a, b, c, d]);
// all.then((data) => {
//   console.log('全部完成');
//   console.log(data);
// });
// all.catch((data) => {
//   console.log('失败');
//   console.log(data);
// });
// const promise = new MyPromsie((resolve, reject) => {
//   //   console.log('a');
//   resolve(3);
// });
// promise
//   .then((data) => {
//     console.log('data', data);
//     return 6;
//   })
//   .then((data) => {
//     console.log(data);
//     return 10;
//   })
//   .then((data) => {
//     console.log(data);
//     return '抛出错误';
//   });

// const aa = new Promise((res, rej) => {
//   res(4);
// })
//   .catch((reason) => {
//     console.log('reason:', reason);
//     return 5;
//   })
//   .then((data) => {
//     console.log('data:', data);
//   });
