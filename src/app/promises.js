//to do async for a single function
//promise can only can get a single result..
//promise is a special case of an observable.
//user observables for multi functions - get a stream of results
//   can choose which result in the the stream to act on
//   promise can convert to observable but you get only 1 result
//observables require you to subsc and unsub
//observables import from rxjs


//service provider
const p = new Promise((res, rej) => {
  let sum = 0;
  console.info('promise created')
  for (let i = 0; i < 1000; i++) {
    sum += i;
  }
  res(sum);
  rej('error')
  console.info('service provider finished')
});

//consumer
p.then(res => {
  console.info(`1st then: consumer: ${res}`);
  throw new Error(`error in result ` + res)
  // return result * 2
})
  .then(res => {
    console.info(`2nd then: result ${res}`);
  })
  .catch(error => {
    console.error(`1st catch: error message: ${error}`);
    return ('hello world');
  })
  .then(res => {
    console.info(`3rd then: result ${res}`);
  })
  .catch(error => {
    console.error(`2nd catch error message: ${error}`);
  })

console.info('completed')




//
