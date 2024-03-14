//1. Use a free API from the internet and feed your app with live data.
//2. Create a note saving app which stores your note to localstorage.
//3. Fetch the note which was saved.
//4. Delete the note

let url = "https://jsonplaceholder.typicode.com/todos"; 
let response = fetch(url)  

response.then((res) => {
    return res.json();
}).then((todos) => { 
    console.log(todos)
    for (const item in todos) {
        console.log(todos[item]);
        ihtml += `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
           <h5 class="card-title">${todos[item].title}</h5>
           <p class="card-text">${todos[item].title}</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`       
    }
    cardContainer.innerHTML = ihtml
})


