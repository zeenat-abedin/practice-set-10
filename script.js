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
    for (const item of todos) {
        console.log(todos[item]);
    }
})

cardContainer.innerHTML = "allCards"

