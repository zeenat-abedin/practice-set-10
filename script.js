//1. Use a free API from the internet and feed your app with live data.
//3. Fetch the note which was saved.
//4. Delete the note

let url = "https://jsonplaceholder.typicode.com/todos"; 
let response = fetch(url)  

response.then((res) => {
if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
}).then((todos) => { 
    let ihtml = '';
    console.log(todos)
    for (const item in todos) {
        console.log(todos[item]);
        ihtml += `<div class="card" style="width: 22rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
           <h5 class="card-title">${todos[item].title}</h5>
           <p class="card-text">${todos[item].title}</p>
           <a href="#" class="btn btn-primary">Visit Todos</a>
        </div>
    </div>`       
    }
    cardContainer.innerHTML = ihtml
}).catch((error) => {
    console.error('Error:', error);
});

//2. Create a note saving app which stores your note to localstorage.

let a = localStorage.getItem("note");
alert("Your note is" + " " + a);

let b = prompt("Enter your note")
if (b) {   
    localStorage.setItem("note", b)
}

let c = confirm("Do you  want to delete this note?");
if (c) {
    localStorage.removeItem("note")
    alert("Note deleted successfully!")
}
    