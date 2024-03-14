//1. Use a free API from the internet and feed your app with live data.
//2. Create a note saving app which stores your note to localstorage.
//3. Fetch the note which was saved.
//4. Delete the note

let url = "https://contests.net/api/v1/all"; 
    
// let method = "GET";
// fetch(url, {method: method})
//     .then((response) => response.json())
//     .then((data) => console.log(data))
    
// let saveNote = (title, body)=>{
//     let note ={
//         title : title ,
//         body: body
//         }
//     let notes = JSON.parse(localStorage.getItem("notes")) || [];
//     notes.push(note);
//     localStorage.setItem("notes",JSON.stringify(notes));
// }

// let getSavedNotes=()=>{
//     let notes = JSON.parse(localStorage.getItem("notes"));  
//     if(!notes){
//         return [];
//     } else {
//         return notes;
//         }
//     }
