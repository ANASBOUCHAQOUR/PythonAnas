const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
  
  myPromise.then(result => console.log(result));  