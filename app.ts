
const myPromise = new Promise((resolve,rejected)=>{
console.log('Promise pending');

setTimeout(()=>{
//console.log('Promise resolve');
//resolve(["Shahzaib", "Honey"])

console.log('promise rejected');
rejected(new Error('Data fetch reject'))

},2000)

})

myPromise.then((res)=>(console.log(res))).catch((err)=>(console.log('new error')));


//Apply conditional statement

/*
const myPromise = new Promise((resolve, rejected) => {
  console.log("Promise pending");

  setTimeout(() => {
    let data = "";

    if (data) {
      console.log("promise resolved");
      return resolve(data);
    } else {
      console.log("promise rejected");
      return rejected("New Error");
    }
  }, 2000);
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => console.log("new error"));
  */
