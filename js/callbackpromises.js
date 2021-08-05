// Call back function

function printingResults() {
    console.log('First Call');
    setTimeout(function () { console.log('Second Call') }, 2000);
    console.log('Third Call');
}

//printingResults();

// Call back with Arrow functions
function printingArrowResults() {
    console.log('First Call');
    setTimeout(() => { console.log('Second Call') }, 2000);
    console.log('Third Call');
}

//printingArrowResults();

// Promises examples

const myFirstPromise = new Promise((resolve, reject) => {
    //conditions
    let condition = true;
    if (condition) {
        setTimeout(function () { resolve('Promise Resolved') }, 300);
    } else {
        reject('Promise Rejected');
    }
});

const helloPromise = function () {
    return new Promise(function (resolve, reject) {
        const message = `Hi, How are you!`;

        resolve(message)
    });
}

const demoPromise = function () {
    myFirstPromise
        .then(helloPromise)
        .then((successMsg) => {
            console.log("Success:" + successMsg);
        })
        .catch((errorMsg) => {
            console.log("Error:" + errorMsg);
        })
}

//demoPromise();

async function myFunction(){
    await printing('One');
    await printing('Two');
    await printing('three');
}

async function demoPromises() {
    try {
      let testing = await myFirstPromise;
      let test  = await helloPromise();
      console.log(testing);
      console.log(test);
  
    }catch(error){
        console.log(error);
    }
  }
  
  // finally, call our async function
  
   demoPromises();