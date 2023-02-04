// Trying top create an application similar to that of a blogging platform

const posts = [
    {title: 'Post 1', body: 'This is the first post'},
    {title: 'Post 2', body: 'This is the second post'}
];


// function getPosts(){
//     // getting data from server has some delay
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) =>
//         {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post){
//     return new Promise((resolve, reject) => { // Promises takes in 2 callbacks as parameter
//         setTimeout(() => {
//         posts.push(post);
//         let err = false;
        
//         if(!err){
//             resolve();
//         }
//         else{
//             reject('Error: Something went wrong!!!');
//         }
//     }, 2000);
//     });
// }

// createPost({'title': 'Post 3', 'body': 'This is the third post'})
// .then(getPosts) // executes resolve
// .catch(err => console.log(err)); // executes reject

// Promise.all
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 1000, 'Goodbye')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); 
// fetch api requires 2 then(), hence we are giving one here and one below where it is called

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));