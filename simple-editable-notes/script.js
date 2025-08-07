let notes = [];
let editIndex = null; // To track the index of the note being edited

document.getElementById("note-form").addEventListener("submit", function(e){

    e.preventDefault();

    const noteInput = document.getElementById("note-input");
    const text = noteInput.value.trim(); // Trim whitespace

    if (text === "") {
        return; // Prevent adding empty notes
    }

    if(editIndex !== null) {
        notes[editIndex] = text; // Update existing note
        editIndex = null; // Reset edit index
    }
    else {
        notes.push(text); // Add new note
    }

    noteInput.value = ""; // Clear the input field
    displayNotes();
    
});

function displayNotes() {

    const list = document.getElementById("note-list");
    list.innerHTML = "";

    notes.forEach((note, index) => {
        const li = document.createElement("li");
       
        li.innerHTML = `
            <span>${note}</span>
            <button onclick="editNote(${index})">Edit</button>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        list.appendChild(li);
    });
}

function deleteNote(index) {
    notes.splice(index, 1); // Remove note at the specified index
    displayNotes();
}

function editNote(index) {
    document.getElementById("note-input").value = notes[index]; // Set input field to the note being edited
    editIndex = index; // Set the index for editing
}