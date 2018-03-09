console.log('starting notes');

const fs = require('fs')

let addNote = (title, body) => {
  let notes = []
  let note = {
    title,
    body
  }

  try {
    let notesString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(notesString) //read original file first and create a notes object, and add to that
  } catch (e){
    console.log('catch activated');
  }

  let duplicateNotes = notes.filter((note) => note.title === title) //check if title already exists

  if (duplicateNotes.length === 0) {
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    console.log('note added');
  } else {
    console.log('title already exists');
  }
}
let getAll = () => {
  console.log('listing notes');
}
let readNote = (title) => {
  console.log('reading note', title);
}
let removeNote = (title) => {
  console.log('removing note', title);
}

module.exports = {   //makes the bellow a function you can call on notes
  addNote: addNote,
  getAll,
  readNote,
  removeNote
}
