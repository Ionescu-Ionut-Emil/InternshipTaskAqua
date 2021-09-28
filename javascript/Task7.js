async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      myResolve("My promise is fulfilled");
    });
    document.getElementById("await").innerHTML = await myPromise;
  }
  
  myDisplay();