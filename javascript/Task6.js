
function myDisplayer(some) {
  document.getElementById("promit").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

//Callback

function Call(some) {
    document.getElementById("call").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, Call);