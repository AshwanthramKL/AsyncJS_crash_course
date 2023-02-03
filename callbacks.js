// Trying top create an application similar to that of a blogging platform

const posts = [
    {title: 'Post 1', body: 'This is the first post'},
    {title: 'Post 2', body: 'This is the second post'}
];


function getPosts(){
    // getting data from server has some delay
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) =>
        {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({'title': 'Post 3', 'body': 'This is the third post'}, 
getPosts);
// Doesn't show in website coz it takes longer than getPosts to execute. - fixed using callbacks.
// after adding callbacks the getPosts function executes after the createPost function is executed.
