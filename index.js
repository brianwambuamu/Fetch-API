// function for endpoint to fetch data
function getPosts() {
    let baseURL = "https://jsonplaceholder.typicode.com";
    let postsEndpoint = "/posts";

    // post url [baseurl + endpoint]
    let url = `${baseURL}${postsEndpoint}`;
    
    fetch(url)
    .then(resp => resp.json())
    .then(renderPosts)
}
getPosts()

// function that access the resources given and renders them
function renderPosts(users) {
    users.forEach(addTitles);
}
https://jsonplaceholder.typicode.com"
// function that creates the required list of titles
const titleList = document.getElementById('parentList'); // destination parent element
// const divElement = document.getElementById('parentId'); 

function addTitles (posts) {
    let listElement = document.createElement("li")
    listElement.innerText = posts.title
    titleList.appendChild(listElement)
    
    //testing for capturing IDs
}
addTitles(posts)