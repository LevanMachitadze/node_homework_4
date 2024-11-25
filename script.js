// //1

// const randomPromise = new Promise((resolve, reject) => {
//   const chance = Math.random();

//   if (chance < 0.5) {
//     resolve('Promise resolved!');
//   } else {
//     reject('Promise rejected.');
//   }
// });

// randomPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// //2

// const fetchFastestResponse = async () => {
//   const userApi1 = 'https://dummyjson.com/users';
//   const userApi2 = 'https://jsonplaceholder.typicode.com/users';

//   const promise1 = fetch(userApi1).then((response) => response.json());
//   const promise2 = fetch(userApi2).then((response) => response.json());

//   try {
//     const fastestResponse = await Promise.race([promise1, promise2]);
//     console.log(fastestResponse);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// fetchFastestResponse();

// //3

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => resolve([1, 2, 3]), 1000);
// });

// const promise2 = new Promise((resolve) => {
//   setTimeout(() => resolve([4, 5, 6]), 2000);
// });

// const promise3 = new Promise((_, reject) => {
//   setTimeout(() => reject('Error: Promise rejected.'), 1500);
// });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => {
//     const fulfilledPromises = results
//       .filter((result) => result.status === 'fulfilled')
//       .map((result) => result.value);

//     const mergedArray = fulfilledPromises.flat();
//     console.log(mergedArray);
//   })
//   .catch((error) => console.error(error));

//4

const fetchCombinedUsers = async () => {
  const api1 = 'https://fakestoreapi.com/users';
  const api2 = 'https://jsonplaceholder.typicode.com/users';

  const promise1 = fetch(api1).then((response) => response.json());
  const promise2 = fetch(api2).then((response) => response.json());

  try {
    const [response1, response2] = await Promise.all([promise1, promise2]);

    const combinedData = [...response1, ...response2];
    console.log(combinedData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the function
fetchCombinedUsers();
